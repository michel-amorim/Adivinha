import getNumber from "../service/getNumber.js";
import setNumber from "./segments.js";

let apiValue; // nao sei o que é ou como explicar

const colors = {
  success: "#5FBA37",
  danger: "#BF3F1D",
  black: "#262A34",
  primary: "#EF6C00",
}; // const para cores

const textResults = {
  success: "Você acertou!!!",
  bigger: "É maior",
  smaller: "É menor",
  error: "ERRO",
}; // const para frases do gamer

startGame(); // Iniciando jogo

// Declarando todos os elementos da tela
const submitButton = document.getElementById("run-game"); // butão
const playAgainButton = document.getElementById("play-again"); // butão
const message = document.getElementById("message"); // p
const inputValue = document.getElementById("guess-input"); // input -- pegando os ID do HTML

// Clique para executar o jogo
submitButton.onclick = function () {
  runGame();
}; // funcao para iniciar o jgo

// Clique para resetar e renicializar o jogo
playAgainButton.onclick = function () {
  playAgain();
};

// Função que inicia o jogo chamando o valor inicial da API
async function startGame() {
  setNumber("0", colors.black); // Inicializar o jogo com o dígito 0
  apiValue = await getNumber(); // Recebendo o valor da API ao inicializar o jogo
  console.log(apiValue); // Lógica condicianada ao erro retornado pelo servidor
  if (apiValue > 300) {
    inputValue.value = "";
    message.innerHTML = textResults.error;
    message.style.color = colors.danger;
    setNumber(apiValue.toString(), colors.danger);
    gameOver();
  }
}

// Função para resetar os atributos visuais ao estado inicial do jogo e receber um novo número
const playAgain = async function () {
  message.innerHTML = "";
  submitButton.classList.remove("submit-button-disabled");
  submitButton.classList.add("submit-button");
  inputValue.disabled = false;
  playAgainButton.style.display = "none";
  await startGame();
};

// Função que executa a tentativa do jogador e aplica o(s) digito(s) a tela conferindo resultado
const runGame = async function () {
  let value = inputValue.value; // resgatando o valor do input de palpite
  // Se não existir valor no input, sair da função
  if (!value) {
    return;
  }
  let result = textResults.success; // resgatando a frase vencedora
  let color = colors.success; // resgatando a cor vencedora
  let messageColor = colors.success;
  // Jogador venceu
  if (parseInt(value) === apiValue) {
    gameOver();
  }
  if (value < apiValue) {
    // se o jogador palpitar com valor menor que o valor gerado pela API
    result = textResults.bigger;
    color = colors.black;
    messageColor = colors.primary;
  }
  if (value > apiValue) {
    // se o jogador palpitar com valor maior que o valor gerado pela API
    result = textResults.smaller;
    color = colors.black;
    messageColor = colors.primary;
  }
  // Enviando os dígitos e resultados para tela
  setNumber(value.toString(), color);
  inputValue.value = "";
  message.innerHTML = result;
  message.style.color = messageColor;
};

// Função que representa o fim do jogo em situações de erros ou vitória
const gameOver = function () {
  submitButton.classList.remove("submit-button");
  submitButton.classList.add("submit-button-disabled");
  inputValue.disabled = true;
  playAgainButton.style.display = "block";
};

// Array de combinações dos segmentos que formam cada dígito de 0 a 9 e vazio
const digits = [
  [1, 1, 1, 1, 1, 1, 0], // 0
  [0, 1, 1, 0, 0, 0, 0], // 1
  [1, 1, 0, 1, 1, 0, 1], // 2
  [1, 1, 1, 1, 0, 0, 1], // 3
  [0, 1, 1, 0, 0, 1, 1], // 4
  [1, 0, 1, 1, 0, 1, 1], // 5
  [1, 0, 1, 1, 1, 1, 1], // 6
  [1, 1, 1, 0, 0, 0, 0], // 7
  [1, 1, 1, 1, 1, 1, 1], // 8
  [1, 1, 1, 1, 0, 1, 1], // 9
  [0, 0, 0, 0, 0, 0, 0], // -
];

const size = 7;
// Definindo os 3 dígitos
const digit1 = document.getElementById("digit1");
const digit2 = document.getElementById("digit2");
const digit3 = document.getElementById("digit3");
const digits_arr = [digit1, digit2, digit3];

// Limpar completamente todos os dígitos
function clearAll() {
  for (let j = 0; j < digits_arr.length; j++) {
    for (let i = 0; i < size; i++) {
      digits_arr[j].children[i].classList.remove("on");
    }
  }
}

// Ocultar os caracteres não utilizados pelos dígitos
function clearNotUsed(number) {
  const numSize = digits_arr.length - number.length;
  const reverse_digits_arr = [...digits_arr].reverse();
  for (let i = 0; i < digits_arr.length; i++) {
    i < numSize
      ? (reverse_digits_arr[i].style.display = "none")
      : (reverse_digits_arr[i].style.display = "block");
  }
}

// Função responsável por alterar os números e cores dos dígitos
const setNumber = function (number, color) {
  clearAll(); // limpando os numeros sem utilidade
  clearNotUsed(number);
  const number_arr = Array.from(number).reverse();
  console.log(number_arr);
  const numSize = number.length;
  for (let j = 0; j < numSize; j++) {
    for (let i = 0; i < size; i++) {
      if (digits[parseInt(number_arr[j])][i]) {
        digits_arr[j].children[i].classList.add("on");
        digits_arr[j].children[i].style.backgroundColor = color;
      } else {
        digits_arr[j].children[i].classList.remove("on");
      }
    }
  }
};

export default setNumber;

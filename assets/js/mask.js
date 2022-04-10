const inputValue = document.getElementById("guess-input");

inputValue.addEventListener("keyup", maskInput);

// Máscara do input para permitir apenas números e impedir que o primeiro dígito seja 0
function maskInput(){
    const value = document.getElementById("guess-input").value;
    const formattedValue = value.match('^[1-9][0-9]*$');
    parseInt(formattedValue)>300 ? inputValue.value = 300 : inputValue.value = formattedValue;
}
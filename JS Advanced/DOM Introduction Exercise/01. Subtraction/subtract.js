function subtract() {
    const firstInputElement = document.getElementById('firstNumber');
    const secondInputElement = document.getElementById('secondNumber');
    const resultDivElement = document.getElementById('result');

    const firstNumber = Number(firstInputElement.value);
    const secondNumber = Number(secondInputElement.value);
    resultDivElement.textContent = firstNumber - secondNumber;
}
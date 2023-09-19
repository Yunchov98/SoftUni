function solve() {
    const textareaElement = document.getElementById('input');
    const resultDiv = document.getElementById('output');

    const inputText = textareaElement.value.split('.').filter(s => s !== '');

    while (inputText.length > 0) {
        const text = inputText.splice(0, 3).join('. ') + '.';
        const p = document.createElement('p');
        p.textContent = text;
        resultDiv.appendChild(p);
    }
}
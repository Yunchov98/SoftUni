function toggle() {
    const btnElement = document.querySelector('.button');
    const hiddenTextElement = document.querySelector('#extra');

    if (btnElement.textContent === 'More') {
        btnElement.textContent = 'Less';
        hiddenTextElement.style.display = 'block';
    } else {
        btnElement.textContent = 'More';
        hiddenTextElement.style.display = 'none';
    }
}
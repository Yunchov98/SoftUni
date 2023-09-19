function notify(message) {
    const divElement = document.getElementById('notification');
    divElement.textContent = message;
    divElement.style.display = 'block';

    divElement.addEventListener('click', (e) => {
        e.currentTarget.style.display = 'none';
    });
}
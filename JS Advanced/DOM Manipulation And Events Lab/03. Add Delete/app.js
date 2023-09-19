function addItem() {
    const ulElement = document.getElementById('items');
    const textInputElement = document.getElementById('newItemText');

    const liElement = document.createElement('li');
    liElement.textContent = textInputElement.value;
    textInputElement.value = '';

    ulElement.appendChild(liElement);

    const deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    liElement.appendChild(deleteElement);

    deleteElement.addEventListener('click', () => {
        liElement.remove();
    });
}
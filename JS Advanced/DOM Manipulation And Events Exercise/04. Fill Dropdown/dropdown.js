function addItem() {
    const textInputElement = document.getElementById('newItemText');
    const valueInputElement = document.getElementById('newItemValue');
    const menuElement = document.getElementById('menu');


    const text = textInputElement.value;
    const value = valueInputElement.value;

    const optionElement = document.createElement('option');
    optionElement.textContent = text;
    optionElement.value = value;

    if (text.length > 0 && value.length > 0) {
        menuElement.appendChild(optionElement);
    }

    textInputElement.value = '';
    valueInputElement.value = '';
}
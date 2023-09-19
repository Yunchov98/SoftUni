function solve() {
    const addBtnElements = document.querySelectorAll('.add-product');
    const checkoutButtonElement = document.querySelector('.checkout');
    const textareaElement = document.querySelector('textarea');
    const allButtonsElements = document.querySelectorAll('button');

    const addButtons = Array.from(addBtnElements);
    const allButtons = Array.from(allButtonsElements);

    const productsList = [];
    let totalPrice = 0;

    addButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productDivElement = e.currentTarget.parentNode.parentNode;
            const productNameElement = productDivElement.querySelector('.product-title');
            const productPriceElement = productDivElement.querySelector('.product-line-price');

            totalPrice += Number(productPriceElement.textContent);

            if (!productsList.includes(productNameElement.textContent)) {
                productsList.push(productNameElement.textContent);
            }

            textareaElement.value += `Added ${productNameElement.textContent} for ${Number(productPriceElement.textContent).toFixed(2)} to the cart.\n`;
        });
    });

    checkoutButtonElement.addEventListener('click', () => {
        allButtons.map(btn => btn.setAttribute('disabled', ''));
        textareaElement.value += `You bought ${productsList.join(', ')} for ${totalPrice.toFixed(2)}.`;
    });
}
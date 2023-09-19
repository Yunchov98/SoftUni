function deleteByEmail() {
    const emailElements = document.querySelectorAll('tbody tr td:nth-of-type(2)');
    const emailInputTextElement = document.querySelector('input[name="email"]');
    const resultElement = document.getElementById('result');

    const emails = Array.from(emailElements);
    const currentEmail = emails.find(el => el.textContent === emailInputTextElement.value);

    if (currentEmail) {
        currentEmail.parentNode.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
}
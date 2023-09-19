function validate() {
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/g;
    const emailInputElement = document.getElementById('email');

    emailInputElement.addEventListener('change', onChange);

    function onChange() {
        if (!pattern.test(emailInputElement.value)) {
            emailInputElement.classList = 'error';
        } else {
            emailInputElement.classList = '';
        }
    }
}
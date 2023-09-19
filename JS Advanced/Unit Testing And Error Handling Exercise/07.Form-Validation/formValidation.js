function validate() {
    const usernameInputElement = document.getElementById('username');
    const emailInputElement = document.getElementById('email');
    const passwordInputElement = document.getElementById('password');
    const confirmPasswordInputElement = document.getElementById('confirm-password');
    const checkbox = document.getElementById('company');
    const validDivElement = document.getElementById('valid');

    const usernamePattern = /^[a-zA-Z0-9]{3,20}$/g;
    const emailPattern = /^.*@.*\..*$/g;
    const passwordPattern = /^[\w]{5,15}$/g;


    document.getElementById('company').addEventListener('change', () => {
        const companyInfo = document.getElementById('companyInfo');
        if (document.getElementById('company').checked === false) {
            companyInfo.style.display = 'none';
        } else {
            companyInfo.style.display = 'block';
        }
    });

    document.getElementById('submit').addEventListener('click', onClick);

    function onClick(event) {
        event.preventDefault();

        const invalid = [];

        if (!usernamePattern.test(usernameInputElement.value)) {
            invalid.push(usernameInputElement);
        }

        if (!emailPattern.test(emailInputElement.value)) {
            invalid.push(emailInputElement);
        }

        if (!passwordPattern.test(passwordInputElement.value) || passwordInputElement.value !== confirmPasswordInputElement.value) {
            invalid.push(passwordInputElement);
            invalid.push(confirmPasswordInputElement);
        }

        if (checkbox.checked) {
            let companyId = document.getElementById('companyNumber');
            const companyPattern = /^[0-9]{4}$/g;
            if (!companyPattern.test(companyId.value) || companyId.value < 1000) {
                invalid.push(companyId);
            }
        }

        invalid.forEach((field) => (field.style.borderColor = 'red'));

        if (invalid.length === 0) {
            validDivElement.style.display = 'block';
        } else {
            validDivElement.style.display = 'none';
        }
    }
}
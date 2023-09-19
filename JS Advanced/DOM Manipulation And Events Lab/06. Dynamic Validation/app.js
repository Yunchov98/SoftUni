function validate() {
    const textEmailInputElement = document.getElementById('email');
    textEmailInputElement.addEventListener('change', (e) => {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;

        if (!pattern.test(e.currentTarget.value)) {
            e.currentTarget.classList = 'error';
        } else {
            e.currentTarget.classList = '';
        }
    });
}
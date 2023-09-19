function focused() {
    const inputElements = document.querySelectorAll('input');
    const sections = Array.from(inputElements);

    sections.forEach(el => {
        el.addEventListener('focus', (e) => {
            e.currentTarget.parentNode.classList = 'focused';
        });
    });

    sections.forEach(el => {
        el.addEventListener('blur', (e) => {
            e.currentTarget.parentNode.classList = '';
        });
    });
}
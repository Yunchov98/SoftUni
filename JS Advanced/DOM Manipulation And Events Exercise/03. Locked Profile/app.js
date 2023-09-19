function lockedProfile() {
    const buttonElements = document.querySelectorAll('button');

    const buttons = Array.from(buttonElements);

    buttons.forEach(button => {
        button.addEventListener('click', onClick);
    });

    function onClick(e) {
        const unlockElement = e.currentTarget.parentElement.querySelector('input[value="unlock"]');
        const hiddenElement = e.currentTarget.parentElement.querySelector('.profile div');
        let buttonText = e.currentTarget;

        if (unlockElement.checked && buttonText.textContent === 'Show more') {
            buttonText.textContent = 'Hide it';
            hiddenElement.style.display = 'block';

        } else if (unlockElement.checked && buttonText.textContent === 'Hide it') {
            buttonText.textContent = 'Show more';
            hiddenElement.style.display = 'none';
        }
    }
}
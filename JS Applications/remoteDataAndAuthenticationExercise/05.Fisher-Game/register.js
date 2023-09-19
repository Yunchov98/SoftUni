const url = 'http://localhost:3030/users/register';

const registerForm = document.querySelector('form');
document.getElementById('user').style.display = 'none';

registerForm.addEventListener('submit', onUserRegistration);

async function onUserRegistration(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const { email, password, rePass } = Object.fromEntries(formData);

    try {
        if ([...formData.values()].some(el => el === '')) {
            throw new Error('Incorect input');
        } else if (password != rePass) {
            throw new Error('Passwords do not match!');
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, rePass })
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.message);
        }

        const data = await response.json();
        const user = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        };

        localStorage.setItem('userData', JSON.stringify(user));
        window.location = ('./index.html');
    } catch (error) {
        alert(error.message);
        document.querySelector('form').reset();
    }
}
const loginForm = document.querySelector('form');
document.getElementById('user').style.display = 'none';

loginForm.addEventListener('submit', userLogin);

async function userLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.message);
        }

        const data = await response.json();
        const userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        };

        localStorage.setItem('userData', JSON.stringify(userData));
        window.location = ('./index.html');
    } catch (error) {
        document.querySelector('form').reset();
        alert(error.message);
    }
}
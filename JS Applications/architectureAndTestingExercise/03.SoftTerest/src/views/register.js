import { register } from '../api/users.js';

const section = document.getElementById('registerPage');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;

export function showRegister(context) {
    ctx = context;
    context.showSection(section);
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('repeatPassword');

    if (email.length < 3) {
        return alert('The email should be at least 3 characters long!');
    }

    if (password.length < 3) {
        return alert('The password should be at least 3 characters long!');
    }

    if (password != rePass) {
        return alert('The repeat password should be equal to the password!');
    }

    form.reset();
    await register(email, password);
    ctx.updateNav();
    ctx.goto('/');
}
import { shorRegister } from './register.js';

const routs = {
    // '/': 'a',
    '/register': shorRegister,
    // '/login': 'a',
    // '/logout': 'logout',
    // '/create': 'create',
};

document.querySelector('nav').addEventListener('click', onNavigation);
document.querySelector('#add-movie-button a').addEventListener('click', onNavigation);

function onNavigation(e) {
    if (e.target.tagName == 'A' && e.target.href) {
        e.preventDefault();

        const url = new URL(e.target.href);

        const rout = routs[url?.pathname];
        rout();
    }
}
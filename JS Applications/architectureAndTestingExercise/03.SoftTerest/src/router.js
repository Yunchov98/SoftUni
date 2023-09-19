export function initialize(links) {
    const mainElement = document.querySelector('main');
    const nav = document.querySelector('nav');
    nav.addEventListener('click', onNavigate);

    const context = {
        showSection,
        goto,
        updateNav,
    };

    return context;

    function showSection(section) {
        mainElement.replaceChildren(section);
    };

    function onNavigate(event) {
        let target = event.target;
        if (target.tagName == 'IMG') {
            target = target.parentElement;
        }

        if (target.tagName == 'A') {
            event.preventDefault();
            const url = new URL(target.href);
            goto(url.pathname);
        }
    }

    function goto(name, ...params) {
        const handelr = links[name];
        if (typeof handelr == 'function') {
            handelr(context, ...params);
        }
    }

    function updateNav() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            nav.querySelectorAll('.user').forEach(el => el.style.display = 'block');
            nav.querySelectorAll('.guest').forEach(el => el.style.display = 'none');
        } else {
            nav.querySelectorAll('.user').forEach(el => el.style.display = 'none');
            nav.querySelectorAll('.guest').forEach(el => el.style.display = 'block');
        }
    }
}



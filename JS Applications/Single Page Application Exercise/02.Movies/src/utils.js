const viewSectionElements = [...document.querySelectorAll('.view-section')];
const userViewButtons = [...document.querySelectorAll('.user')];
const guestViewButtons = [...document.querySelectorAll('guest')];
const welcomeMessageElement = document.querySelector('#welcome-msg');

function hideSections() {
    viewSectionElements.forEach(s => s.style.display = 'none');
}

export function showView(section) {
    hideSections();
    section.style.display = 'block';
}

export function updateNavigation() {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        userViewButtons.forEach(b => b.style.display = 'inline-block');
        guestViewButtons.forEach(b => b.style.display = 'none');
        welcomeMessageElement.textContent = `Welcome, ${userData.email}`;
    } else {
        userViewButtons.forEach(b => b.style.display = 'none');
        guestViewButtons.forEach(b => b.style.display = 'inline-block');
        welcomeMessageElement.textContent = '';
    }
}

export function spinner() {
    const element = document.createElement('p');
    element.textContent = 'Please wait! Loading...';
}
const url = 'http://localhost:3030/jsonstore/collections/books';
const tbodyElement = document.querySelector('tbody');
const loadButtonElement = document.getElementById('loadBooks');
const formElement = document.querySelector('form');
const submitButtonElement = document.querySelector('form button');
const h3Element = document.querySelector('form h3');

loadButtonElement.addEventListener('click', onLoad);
formElement.addEventListener('submit', submitHandler);

async function onLoad() {
    try {
        const response = await fetch(url);

        if (response.ok === false) {
            throw new Error('Error');
        }

        tbodyElement.replaceChildren();

        const data = await response.json();
        Object.entries(data).forEach(d => {
            const [id, bookData] = d;

            const trElement = createElement('tr', '', tbodyElement);
            trElement.id = id;

            createElement('td', bookData.title, trElement, 'title');
            createElement('td', bookData.author, trElement, 'author');
            const tdButtonsElement = createElement('td', '', trElement);
            const editButtonElement = createElement('button', 'Edit', tdButtonsElement);
            const deleteButtonElement = createElement('button', 'Delete', tdButtonsElement);

            editButtonElement.addEventListener('click', onEdit);
            deleteButtonElement.addEventListener('click', onDelete);
        });
    } catch (error) {
        return alert(error.message);
    }
};

async function createBook(e) {
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData);
    if (data.title === '' || data.author === '') {
        return alert('All fields must be filled');
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok === false) {
            throw new Error('Error');
        }

        e.target.reset();
        onLoad();
    } catch (error) {
        return alert(error.message);
    }
}

function onEdit(e) {
    const trElement = e.target.parentNode.parentNode;
    h3Element.textContent = 'Edit Form';
    const titleElement = document.querySelector('input[placeholder="Title..."]');
    const authorElement = document.querySelector('input[placeholder="Author..."]');
    titleElement.value = trElement.querySelector('.title').textContent;
    authorElement.value = trElement.querySelector('.author').textContent;
    localStorage.setItem('id', trElement.id);
    submitButtonElement.textContent = 'Save';
}

async function onDelete(e) {
    const id = e.target.parentNode.parentNode.id;

    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE',
        });

        if (response.ok === false) {
            throw new Error('Error');
        }

        onLoad();
    } catch (error) {
        return alert(error.message);
    }
}

async function onSave(e) {
    const id = localStorage.getItem('id');
    localStorage.removeItem('id');

    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok === false) {
            throw new Error('Error');
        }

        submitButtonElement.textContent = 'Submit';
        h3Element.textContent = 'FORM';

        e.target.reset();
        onLoad();
    } catch (error) {
        return alert(error.message);
    }
}

function submitHandler(e) {
    e.preventDefault();

    const buttonElement = e.target.querySelector('button');
    if (buttonElement.textContent === 'Submit') {
        createBook(e);
    } else {
        onSave(e);
    }
}

function createElement(type, content, appender, cls) {
    const element = document.createElement(type);
    element.textContent = content;

    if (cls) {
        element.classList = cls;
    }

    appender.appendChild(element);

    return element;
}
import { getAllIdeas } from '../api/data.js';

const section = document.getElementById('dashboard-holder');
section.addEventListener('click', onDetails);

let ctx = null;

export async function showCatalog(context) {
    ctx = context;
    context.showSection(section);
    const ideas = await getAllIdeas();
    if (ideas.length == 0) {
        section.innerHTML = '<h1>No ideas yet! Be the first one :)</h1>';
    } else {
        section.replaceChildren(...ideas.map(createIdeaPreviw));
    }
}

function createIdeaPreviw(idea) {
    const element = document.createElement('div');
    element.className = 'card overflow-hidden current-card details';
    element.style.width = '20rem';
    element.style.height = '18rem';
    element.innerHTML = `
    <div class="card-body">
        <p class="card-text">${idea.title}</p>
    </div>
    <img class="card-image" src="${idea.img}">
    <a data-id="${idea._id}" class="btn" href="/details">Details</a>
`;

    return element;
}

function onDetails(e) {
    if(e.target.tagName == 'A') {
        e.preventDefault();
        
        const id = e.target.dataset.id;
        if(id) {
            ctx.goto('/details', id);
        }
    }
}

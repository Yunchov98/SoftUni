import { html } from '../../node_modules/lit-html/lit-html.js';
import { searchFruit } from '../data/commands.js';
import { getUserData } from '../util.js';

const searchTemplate = (fruitList, userData, ctx) => html`
<section id="search">
    <div class="form">
        <h2>Search</h2>
        <form class="search-form" @submit=${e=> onSearch(e, ctx)}>
            <input type="text" name="search" id="search-input" />
            <button class="button-list">Search</button>
        </form>
    </div>
    <h4>Results:</h4>
    ${fruitList.length > 0 ? fruitList.map(fruitCard) : html`<p class="no-result">No result.</p>`}
</section>`;

const fruitCard = (fruit, userData) => html`
<div class="search-result">

    <div class="fruit">
        <img src=${fruit.imageUrl} alt="example1" />
        <h3 class="title">${fruit.name}</h3>
        <p class="description">${fruit.description}</p>
        <a class="details-btn" href="/catalog/${fruit._id}">More Info</a>
    </div>
</div>`;

async function onSearch(e, ctx) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const searchField = formData.get('search');
    const query = formData.get('search').trim();

    if (searchField == '') {
        return alert('The field must be filled !');
    }

    e.target.reset();
    ctx.page.redirect(`/search?query=${query}`);
}

export async function searchPage(ctx) {
    const userData = getUserData();

    const fruit = ctx.querystring.split('=')[1];
    const fruitList = fruit == undefined ? [] : await searchFruit(fruit);

    ctx.render(searchTemplate(fruitList, userData, ctx));
}
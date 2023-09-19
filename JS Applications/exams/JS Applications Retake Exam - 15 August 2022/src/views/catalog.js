import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllShoes } from '../data/shoes.js';

const catalogTemplate = (shoes) => html`
<section id="dashboard">
    <h2>Collectibles</h2>
    ${shoes.length > 0 ? html`
    <ul class="card-wrapper">
        <!-- Display a li with information about every post (if any)-->
        ${shoes.map(shoesCard)}
    </ul>` : html`
    <h2>There are no items added yet.</h2>`}
    <!-- Display an h2 if there are no posts -->
</section>`;

export async function catalogPage(ctx) {
    const shoes = await getAllShoes();

    ctx.render(catalogTemplate(shoes));
}

const shoesCard = (shoes) => html`
<li class="card">
    <img src=${shoes.imageUrl} alt="travis" />
    <p>
        <strong>Brand: </strong><span class="brand">${shoes.brand}</span>
    </p>
    <p>
        <strong>Model: </strong><span class="model">${shoes.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${shoes.value}</span>$</p>
    <a class="details-btn" href="/catalog/${shoes._id}">Details</a>
</li>`;
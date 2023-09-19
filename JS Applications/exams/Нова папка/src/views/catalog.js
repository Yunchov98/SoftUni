import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllSongs } from '../data/songs.js';

const catalogTemplate = (songs) => html` <section id="dashboard">
    <h2>Albums</h2>
    ${songs.length > 0
        ? html` <ul class="card-wrapper">
              ${songs.map(songCard)}
          </ul>`
        : html` <h2>There are no albums added yet.</h2>`}
</section>`;

export async function catalogPage(ctx) {
    const songs = await getAllSongs();

    
    ctx.render(catalogTemplate(songs));
}

const songCard = (song) => html` <li class="card">
    <img src=${song.imageUrl} alt="travis" />
    <p>
        <strong>Singer/Band: </strong><span class="singer">${song.singer}</span>
    </p>
    <p><strong>Album name: </strong><span class="album">${song.album}</span></p>
    <p><strong>Sales:</strong><span class="sales">${song.sales}</span></p>
    <a class="details-btn" href="/catalog/${song._id}">Details</a>
</li>`;

import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteSong, songDetails } from '../data/songs.js';
import { getUserData } from '../util.js';

const detailsTemplate = (song, onDelete) => html` <section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src=${song.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>
                <strong>Band:</strong
                ><span id="details-singer">${song.singer}</span>
            </p>
            <p>
                <strong>Album name:</strong
                ><span id="details-album">${song.album}</span>
            </p>
            <p>
                <strong>Release date:</strong
                ><span id="details-release">${song.release}</span>
            </p>
            <p>
                <strong>Label:</strong
                ><span id="details-label">${song.label}</span>
            </p>
            <p>
                <strong>Sales:</strong
                ><span id="details-sales">${song.sales}</span>
            </p>
        </div>
        <div id="likes">Likes: <span id="likes-count">0</span></div>
        <div id="action-buttons">
            ${song.isOwner
                ? html`
                     <a href="/catalog/${song._id}/edit" id="edit-btn">Edit</a>
                     <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                    `
                : null}
            ${song.hasUser && song.isOwner != true
                ? html`<a href="" id="like-btn">Like</a>`
                : null}
        </div>
        <!--Edit and Delete are only for creator-->
    </div>
</section>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const song = await songDetails(id);

    const userData = getUserData();

    song.hasUser = userData != undefined;
    song.isOwner = userData?._id == song._ownerId;

    ctx.render(detailsTemplate(song, onDelete));

    async function onDelete(e) {
        // e.preventDefault();
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteSong(id);
            ctx.page.redirect('/catalog');
        }
    }
}

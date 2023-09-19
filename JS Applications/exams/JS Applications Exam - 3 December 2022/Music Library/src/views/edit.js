import { html } from '../../node_modules/lit-html/lit-html.js';
import { getById, updateSong } from '../data/songs.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (song, onEdit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="singer" .value=${song.singer} id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" .value=${song.album} id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" .value=${song.imageUrl} id="album-img" placeholder="Image url" />
            <input type="text" name="release" .value=${song.release} id="album-release" placeholder="Release date" />
            <input type="text" name="label" .value=${song.label} id="album-label" placeholder="Label" />
            <input type="text" name="sales" .value=${song.sales} id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function editPage(ctx) {
    const id = ctx.params.id;

    const song = await getById(id);

    ctx.render(editTemplate(song, createSubmitHandler(onEdit)));

    async function onEdit({
        singer,
        album,
        imageUrl,
        release,
        label,
        sales
    }) {
        if ([
            singer,
            album,
            imageUrl,
            release,
            label,
            sales
        ].some(s => s == '')) {
            return alert('All fields are required!');
        }

        await updateSong(id, {
            singer,
            album,
            imageUrl,
            release,
            label,
            sales
        });

        ctx.page.redirect('/catalog/' + id);
    }
}
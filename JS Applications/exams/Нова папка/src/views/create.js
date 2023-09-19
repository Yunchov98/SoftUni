import { html } from '../../node_modules/lit-html/lit-html.js';
import { createSong } from '../data/songs.js';
import { createSubmitHandler } from '../util.js';

const createTemplate = (onCreate) => html` <section id="create">
    <div class="form">
        <h2>Add Album</h2>
        <form class="create-form" @submit=${onCreate}>
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export function createPage(ctx) {
    ctx.render(createTemplate(createSubmitHandler(onCreate)));

    async function onCreate({ singer, album, imageUrl, release, label, sales }) {
        if ([singer, album, imageUrl, release, label, sales].some((s) => s == '')) {
            return alert('All fields are required!');
        }

        await createSong({
            singer,
            album,
            imageUrl,
            release,
            label,
            sales,
        });

        ctx.page.redirect('/catalog');
    }
}

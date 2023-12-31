import { html } from '../../node_modules/lit-html/lit-html.js';
import { bookDetails, deleteBook } from '../data/commands.js';
import { getUserData } from '../util.js';

const detailsTemplate = (book, onDelete) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        ${book.canEdit ? html`
        <div class="actions">
            <!-- Edit/Delete buttons ( Only for creator of this book )  -->
            <a class="button" href="/catalog/${book._id}/edit">Edit</a>
            <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>

            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            <!-- <a class="button" href="#">Like</a> -->

            <!-- ( for Guests and Users )  -->
            <!-- <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div> -->
            <!-- Bonus -->
        </div>` : null}
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;

    const book = await bookDetails(id);

    const userData = getUserData();

    if (userData && userData._id == book._ownerId) {
        book.canEdit = true;
    }

    ctx.render(detailsTemplate(book, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteBook(id);
            ctx.page.redirect('/catalog');
        }
    }
}
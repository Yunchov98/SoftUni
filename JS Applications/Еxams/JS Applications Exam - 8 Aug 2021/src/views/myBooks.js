import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyBooks } from '../data/commands.js';
import { getUserData } from '../util.js';

const myBooksTemplate = (books) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for every user's books (if any) -->
    ${books.length > 0 ? html`
    <ul class="my-books-list">
        ${books.map(bookCard)}
    </ul>` : html`
    <p class="no-books">No books in database!</p>`}
</section>`;

export async function myBooksPage(ctx) {
    const userData = getUserData();
    const id = userData._id;

    const books = await getMyBooks(id);

    ctx.render(myBooksTemplate(books));
}

const bookCard = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl}></p>
    <a class="button" href="/catalog/${book._id}">Details</a>
</li>`;
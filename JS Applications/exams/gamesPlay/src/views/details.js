import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteGame, gameDetails } from '../data/games.js';
import { getUserData } from '../util.js';

const detailsTemplate = (game, onDelete) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>

        <!-- Bonus ( for Guests and Users ) -->
        <!-- <div class="details-comments">
            <h2>Comments:</h2>
            <ul>
                list all comments for current game (If any) -->
        <!-- <li class="comment"> -->
        <!-- <p>Content: I rate this one quite highly.</p> -->
        <!-- </li> -->
        <!-- <li class="comment"> -->
        <!-- <p>Content: The best game.</p> -->
        <!-- </li> -->
        <!-- </ul> -->
        <!-- Display paragraph: If there are no games in the database -->
        <!-- <p class="no-comment">No comments.</p> -->
        <!-- </div> -->

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        ${game.canEdit ? html`
        <div class="buttons">
            <a href="/catalog/${game._id}/edit" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
        </div>` : null}
    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    <!-- <article class="create-comment">
        <label>Add new comment:</label>
        <form class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article> -->

</section>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;

    const game = await gameDetails(id);

    const userData = getUserData();

    if (userData && userData._id == game._ownerId) {
        game.canEdit = true;
    }

    ctx.render(detailsTemplate(game, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteGame(id);
            ctx.page.redirect('/');
        }
    }
}
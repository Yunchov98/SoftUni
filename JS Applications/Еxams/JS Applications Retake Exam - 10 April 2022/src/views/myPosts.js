import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyPosts } from '../data/commands.js';
import { getUserData } from '../util.js';

const myPostTemplate = (posts) => html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>

    <div class="my-posts">
        ${posts.length > 0 ? posts.map(postCard) : html`<h1 class="title no-posts-title">You have no posts yet!</h1>`}
    </div>
</section>`;

export async function myPostsPage(ctx) {
    const userData = getUserData();

    const userId = userData._id;

    const posts = await getMyPosts(userId);

    ctx.render(myPostTemplate(posts));
}

const postCard = (post) => html`
<div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src=${post.imageUrl} alt="Material Image">
    <div class="btn-wrapper">
        <a href="/catalog/${post._id}" class="details-btn btn">Details</a>
    </div>
</div>`;
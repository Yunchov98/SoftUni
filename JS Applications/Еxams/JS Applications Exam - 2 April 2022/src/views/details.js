import { html } from '../../node_modules/lit-html/lit-html.js';
import { deletePet, petDetails } from '../data/commands.js';
import { getUserData } from '../util.js';

const detailsTemplate = (pet, onDelete) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src=${pet.image}>
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age} years</h4>
                <h4>Weight: ${pet.weight}kg</h4>
                <!-- <h4 class="donation">Donation: 0$</h4> -->
            </div>
            <!-- if there is no registered user, do not display div-->
            ${pet.canEdit ? html`
            <div class="actionBtn">
                <!-- Only for registered user and creator of the pets-->
                <a href="/catalog/${pet._id}/edit" class="edit">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                <!--(Bonus Part) Only for no creator and user-->
                <!-- <a href="#" class="donate">Donate</a> -->
            </div>` : null}
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;

    const pet = await petDetails(id);

    const userData = getUserData();

    if (userData && userData._id == pet._ownerId) {
        pet.canEdit = true;
    }

    ctx.render(detailsTemplate(pet, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deletePet(id);
            ctx.page.redirect('/');
        }
    }
}
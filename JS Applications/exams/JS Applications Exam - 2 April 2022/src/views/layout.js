import { html } from '../../node_modules/lit-html/lit-html.js';

//TODO replace with actual layout - currently there is only for test
export const layoutTemplate = (userData, content) => html`

    <header>
        <nav>
            <section class="logo">
                <img src="./images/logo.png" alt="logo">
            </section>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/catalog">Dashboard</a></li>
                ${userData ? html`
                <li><a href="/create">Create Postcard</a></li>
                <li><a href="/logout">Logout</a></li>` : html`
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>`}
            </ul>
        </nav>
    </header>
    <main>
        ${content}
    </main>`;
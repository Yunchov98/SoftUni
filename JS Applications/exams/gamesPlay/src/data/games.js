import { del, get, post, put } from './api.js';

const endpoints = {
    catalog: '/data/games?sortBy=_createdOn%20desc',
    post: '/data/games',
    details: (id) => `/data/games/${id}`,
    edit: (id) => `/data/games/${id}`,
    delete: (id) => `/data/games/${id}`,
    homePageGames: '/data/games?sortBy=_createdOn%20desc&distinct=category',
};

export async function getAllGames() {
    return get(endpoints.catalog);
}

export async function getAllHomePageGames() {
    return get(endpoints.homePageGames);
}

export async function createGame(data) {
    return post(endpoints.post, data);
}

export async function gameDetails(id) {
    return get(endpoints.details(id));
}

export async function editGame(id, data) {
    return put(endpoints.edit(id), data);
}

export async function deleteGame(id) {
    return del(endpoints.delete(id));
}
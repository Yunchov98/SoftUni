import { del, get, post, put } from './api.js';


const endpoints = {
    catalog: '/data/albums?sortBy=_createdOn%20desc',
    byId: '/data/albums/',
};

export async function getAllSongs() {
    return get(endpoints.catalog);
}

export async function getById(id) {
    return get(endpoints.byId + id);
}

export async function createSong(data) {
    return post(endpoints.catalog, data);
}

export async function updateSong(id, data) {
    return put(endpoints.byId + id, data);
}

export async function deleteSong(id) {
    return del(endpoints.byId + id);
}
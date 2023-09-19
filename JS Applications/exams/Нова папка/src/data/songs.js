import { del, get, post, put } from './api.js';

const endpoints = {
    getItems: '/data/albums?sortBy=_createdOn%20desc',
    post: '/data/albums',
    edit: (id) => `/data/albums/${id}`,
    delete: (id) => `/data/albums/${id}`,
    details: (id) => `/data/albums/${id}`,
    userLikes: (albumId, userId) => `/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    albumLikes: (albumId) => `/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`,
    sendLike: '/data/likes',
};

export async function getAllSongs() {
    return get(endpoints.getItems);
}

export async function songDetails(id) {
    return get(endpoints.details(id));
}

export async function createSong(data) {
    console.log(data);
    return post(endpoints.post, data);
}

export async function updateSong(id, data) {
    return put(endpoints.edit(id), data);
}

export async function deleteSong(id) {
    return del(endpoints.delete(id));
}

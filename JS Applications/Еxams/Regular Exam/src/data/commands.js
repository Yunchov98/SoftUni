import { del, get, post, put } from './api.js';

const endpoints = {
    catalog: '/data/fruits?sortBy=_createdOn%20desc',
    create: '/data/fruits',
    details: (id) => `/data/fruits/${id}`,
    edit: (id) => `/data/fruits/${id}`,
    delete: (id) => `/data/fruits/${id}`,
    serach: (query) => `/data/fruits?where=name%20LIKE%20%22${query}%22`,
};

export async function getAllFruits() {
    return get(endpoints.catalog);
}

export async function createFruit(data) {
    return post(endpoints.create, data);
}

export async function fruitDetails(id) {
    return get(endpoints.details(id));
}

export async function editFruit(id, data) {
    return put(endpoints.edit(id), data);
}

export async function deleteFruit(id) {
    return del(endpoints.delete(id));
}

export async function searchFruit(query) {
    return get(endpoints.serach(query));
}

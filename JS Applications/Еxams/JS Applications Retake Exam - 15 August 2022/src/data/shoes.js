import { del, get, post, put } from './api.js';


const endpoints = {
    getShoes: '/data/shoes?sortBy=_createdOn%20desc',
    create: '/data/shoes',
    details: (id) => `/data/shoes/${id}`,
    edit: (id) => `/data/shoes/${id}`,
    delete: (id) => `/data/shoes/${id}`,
};

export async function getAllShoes() {
    return get(endpoints.getShoes);
}

export async function createShoes(data) {
    return post(endpoints.create, data);
}

export async function shoesDetails(id) {
    return get(endpoints.details(id));
}

export async function updateShoes(id, data) {
    return put(endpoints.edit(id), data);
}

export async function deleteShoes(id) {
    return del(endpoints.delete(id));
}

import { del, get, post, put } from './api.js';

const endpoints = {
    catalog: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    create: '/data/pets',
    details: (id) => `/data/pets/${id}`,
    edit: (id) => `/data/pets/${id}`,
    delete: (id) => `/data/pets/${id}`,
};

export async function getAllPets() {
    return get(endpoints.catalog);
}

export async function createPet(data) {
    return post(endpoints.create, data);
}

export async function petDetails(id) {
    return get(endpoints.details(id));
}

export async function editPet(id, data) {
    return put(endpoints.edit(id), data);
}

export async function deletePet(id) {
    return del(endpoints.delete(id));
}
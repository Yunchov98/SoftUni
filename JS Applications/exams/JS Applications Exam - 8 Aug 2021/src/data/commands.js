import { del, get, post, put } from './api.js';


const endpoints = {
    catalog: '/data/books?sortBy=_createdOn%20desc',
    create: '/data/books',
    details: (id) => `/data/books/${id}`,
    edit: (id) => `/data/books/${id}`,
    delete: (id) => `/data/books/${id}`,
    myBooks: (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
};

export async function getAllBooks() {
    return get(endpoints.catalog);
}

export async function createBook(data) {
    return post(endpoints.create, data);
}

export async function bookDetails(id) {
    return get(endpoints.details(id));
}

export async function editBook(id, data) {
    return put(endpoints.edit(id), data);
}

export async function deleteBook(id) {
    return del(endpoints.delete(id));
}

export async function getMyBooks(id) {
    return get(endpoints.myBooks(id));
}
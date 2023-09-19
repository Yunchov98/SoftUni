import { del, get, post, put } from './api.js';


const endpoints = {
    catalog: '/data/posts?sortBy=_createdOn%20desc',
    create: '/data/posts',
    details: (id) => `/data/posts/${id}`,
    edit: (id) => `/data/posts/${id}`,
    delete: (id) => `/data/posts/${id}`,
    myPosts: (userId) => `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
};

export async function getAllPosts() {
    return get(endpoints.catalog);
}

export async function createPost(data) {
    return post(endpoints.create, data);
}

export async function postDetails(id) {
    return get(endpoints.details(id));
}

export async function editPost(id, data) {
    return put(endpoints.edit(id), data);
}

export async function deletePost(id) {
    return del(endpoints.delete(id));
}

export async function getMyPosts(userId) {
    return get(endpoints.myPosts(userId));
}
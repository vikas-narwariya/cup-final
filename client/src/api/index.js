import axios from 'axios';


const PORT = process.env.PORT|| 5000;

const API = axios.create({ baseURL: `http://localhost:${PORT}` });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsByCreator = (name) => API.get(`/posts/creator?name=${name}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const asignIn = (formData) => API.post('/admin/asignin', formData);
export const asignUp = (formData) => API.post('/admin/asignup', formData);

export const tsignIn = (formData) => API.post('/teacher/tsignin', formData);
export const tsignUp = (formData) => API.post('/teacher/tsignup', formData);

export const Upload = (formData) => API.post('/uploads/uploadassignment', formData);

import axios from 'axios';

// Base Setup
const BASE_URL = 'https://dummyapi.io/data/v1';
axios.defaults.headers['app-id'] = '619ba2328213396838ca56c4';

// Get all Posts
export const getAllPosts = () => axios.get(`${BASE_URL}/post`);

// Get single Post
export const getSinglePost = (id) => axios.get(`${BASE_URL}/post/${id}`);

// Get Comments
export const getComments = (id) => axios.get(`${BASE_URL}/post/${id}/comment`);

// Create Comment
export const addComment = (comment) =>
	axios.post(`${BASE_URL}/comment/create`, comment);

// Create a Post
export const createPost = (postObject) =>
	axios.post(`${BASE_URL}/post/create`, postObject);

// Update a Post
export const updatePost = (id, postObj) =>
	axios.put(`${BASE_URL}/post/${id}`, postObj);

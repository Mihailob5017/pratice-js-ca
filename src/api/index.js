import axios from 'axios';

// Base Setup
const BASE_URL = 'https://dummyapi.io/data/v1';
axios.defaults.headers['app-id'] = '619ba2328213396838ca56c4';

// Get all Posts
export const getAllPosts = () => axios.get(`${BASE_URL}/post`);

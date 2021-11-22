import { GET_ALL_POSTS } from './action.types';
import * as api from '../api/index';

// Get all users from the API
export const getAllPosts = () => async (dispatch) => {
	try {
		const { data } = await api.getAllPosts();

		// Sort by Dates
		const sortedData = data.data.sort(
			(a, b) => new Date(b.publishDate) - new Date(a.publishDate)
		);

		dispatch({ type: GET_ALL_POSTS, payload: sortedData });
	} catch (error) {
		console.error(error);
	}
};

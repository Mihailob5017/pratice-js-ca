import { ADD_COMMENT, GET_ALL_POSTS, GET_SPECIFIC_POST } from './action.types';
import * as api from '../api/index';

// Get all posts from the API
export const getAllPosts = () => async (dispatch) => {
	try {
		const { data } = await api.getAllPosts();

		/*
		  Note: Data is already sorted by dates in the API, but this is how I would sort it.

		 const sortedData = data.data.sort(
		 	(a, b) => new Date(b.publishDate) - new Date(a.publishDate)
		  );
		*/

		dispatch({ type: GET_ALL_POSTS, payload: data.data });
	} catch (error) {
		console.error(error);
	}
};

// Get one extended post by ID
export const getSpecificPost = (id) => async (dispatch) => {
	try {
		const [post, comments] = await Promise.all([
			api.getSinglePost(id).then((el) => el.data),
			api.getComments(id).then((el) => el.data.data),
		]);
		const sortedComments = comments.sort(
			(a, b) => new Date(b.publishDate) - new Date(a.publishDate)
		);
		dispatch({
			type: GET_SPECIFIC_POST,
			payload: { post, comments: [...sortedComments] },
		});
	} catch (error) {
		console.error(error);
	}
};

// Add a comment to redux only
export const addComment = (currentObject, comment) => async (dispatch) => {
	try {
		const { data } = await api.addComment(comment);

		// Sorting the Comments by date
		const sortedComments = [...currentObject.comments, data].sort(
			(a, b) => new Date(b.publishDate) - new Date(a.publishDate)
		);

		const newObject = {
			post: currentObject.post,
			comments: sortedComments,
		};

		dispatch({ type: ADD_COMMENT, payload: newObject });
	} catch (error) {
		console.error(error);
	}
};

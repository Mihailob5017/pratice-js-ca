import { ADD_COMMENT, GET_ALL_POSTS, GET_SPECIFIC_POST } from './action.types';

const initialState = {
	posts: [],
	extendedPost: {},
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_POSTS:
			return {
				...state,
				posts: action.payload,
			};

		case GET_SPECIFIC_POST:
			return {
				...state,
				extendedPost: action.payload,
			};

		case ADD_COMMENT:
			return {
				...state,
				extendedPost: action.payload,
			};

		default:
			return state;
	}
};

export default rootReducer;

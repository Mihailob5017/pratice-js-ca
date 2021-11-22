import { GET_ALL_USERS } from './action.types';

const initialState = {
	users: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_USERS:
			return {
				...state,
				users: action.payload,
			};
		default:
			return state;
	}
};

export default rootReducer;

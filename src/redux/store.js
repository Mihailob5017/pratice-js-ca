import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const middleware = [thunk];

export const Store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleware))
);
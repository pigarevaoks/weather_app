import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index.js';
import promiseMiddleware from './middleware/index.js';

const store = createStore(
	reducer,
	applyMiddleware(promiseMiddleware)
);
export default store;

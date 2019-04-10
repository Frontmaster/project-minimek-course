import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root-reducer';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

export default function configureStore(preloadedState) {
	const middlewares = [thunk];
	const middlewareEnhancer = applyMiddleware(...middlewares);
	const storeEnhancers = [middlewareEnhancer];
	const composedEnhancer = composeWithDevTools(...storeEnhancers);

	const store = createStore(
		rootReducer,
		preloadedState,
		composedEnhancer
	);

	return store;
}

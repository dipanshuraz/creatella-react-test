import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './rootReducer';

const middleware = applyMiddleware(thunk);

export default createStore(combineReducers, middleware);

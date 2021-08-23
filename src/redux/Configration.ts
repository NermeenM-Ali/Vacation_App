import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import RequestsReducer from './reducers/RequestReducer';

// every reducers in the project
const reducers = combineReducers({
    RequestsReducer: RequestsReducer
})


const store = createStore(reducers, applyMiddleware(thunk))

export { store }
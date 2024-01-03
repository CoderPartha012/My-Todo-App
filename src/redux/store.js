import { createStore } from 'redux';
import todoReducer from './reducer';

const store = createStore(todoReducer);

export default store;

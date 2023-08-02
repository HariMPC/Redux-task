import { createStore } from 'redux';
import allReducer from './Combinereducer';

const store = createStore(allReducer);

export default store;
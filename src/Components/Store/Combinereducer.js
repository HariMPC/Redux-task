// rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from '../reduxaction/CartReducer';

const allReducer = combineReducers({
  cart: cartReducer,
});

export default allReducer;
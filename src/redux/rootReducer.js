import { combineReducers } from 'redux';
import ads from './ads/reducer';
import products from './product/reducer';

export default combineReducers({
  ads,
  products,
});

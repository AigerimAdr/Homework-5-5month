import { combineReducers } from 'redux';
import cartReducer from './cartReducer'; // Создайте редьюсер для корзины

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;

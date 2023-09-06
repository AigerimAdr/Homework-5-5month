import { createStore } from 'redux';
import rootReducer from './reducers'; // Создайте корневой редьюсер

const store = createStore(rootReducer);


export default store;

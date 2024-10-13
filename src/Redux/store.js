import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './habitSlice';
import todoReducer from './todoSlice';
import productsSlice from './productsSlice';
const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        product: productsSlice
    },
});

export default store;

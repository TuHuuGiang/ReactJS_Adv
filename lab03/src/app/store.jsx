import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../conponents/counter/counterReducer';

export default configureStore ({
    reducer: {
        counter: counterReducer
    }
});
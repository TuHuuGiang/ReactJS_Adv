import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../components/post/postsSlide';

export default configureStore ({
    reducer: {
        posts: postReducer
    }
});
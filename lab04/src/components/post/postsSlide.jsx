import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id: 1, title: 'First post', content: 'Hello'},
    {id: 2, title: 'Second post', content: 'Welcome to Redux'},
    {id: 3, title: 'Three post', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quod animi unde! Sit in ratione optio corrupti eum laborum vitae quaerat suscipit. Explicabo fugit officiis quis maxime dolorum dolorem odit?'}
];   

const postSlide = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
});

export default postSlide.reducer;
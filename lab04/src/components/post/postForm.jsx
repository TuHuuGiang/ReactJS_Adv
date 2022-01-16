import React, { useState } from 'react';
import './style.css';

export const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value                                         );

    return(
        <>
            <section>
                <h2>Add a new post</h2>
                <form>
                    <label htmlFor="postTitle">Post title</label>
                    <input type="text" id='postTitle' name='postTitle' value={title} onClick={onTitleChanged} />
                    <label htmlFor="postContent">Post content</label>
                    <textarea name="postContent" id="postContent" value={content} onClick={onContentChanged} ></textarea>
                    <button type='button'>Create new Post</button>
                </form>
            </section>
        </>
    );
}
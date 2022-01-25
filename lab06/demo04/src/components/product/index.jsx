import React from 'react';
import './style.css';

export const Product = (props) => {
    return(
        <>
        <div className='product'>
            <div className="id">{props.id}</div>
            <div className="title">{props.title}</div>
            <div className="price">{props.price}</div>
            <div className="category">{props.category}</div>
        </div>
        </>
    );
}
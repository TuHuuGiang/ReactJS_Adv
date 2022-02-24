import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:3001';

export default function Products(props) {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        // call api
        axios.get(url).then(res => {
            console.log(res.data);
            setProducts(res.data);
        })
    }, []);

    if(products)
        console.log(products);
    else
        return null;

    return (
        <>
            <ul>
                {
                    products.map(p => (
                        <li key={p.id}>{p.id} - {p.name} - {p.price}</li>
                    ))
                }
            </ul>
        </>
    );
}
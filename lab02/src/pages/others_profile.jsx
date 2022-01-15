import React from 'react';
import { useParams } from 'react-router-dom';

export function OthersProfile() {
    let param = useParams();
    return(
        <h1>This is others profile of User's ID {param.id}</h1>
    );
}
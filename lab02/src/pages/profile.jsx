import React from 'react';
import { 
    Routes,
    Route,
    Link, 
    useParams,
    Outlet
} from 'react-router-dom';
import MyButton from '../components/my_button';
import MyButtonV2 from '../components/my_button_v2';
import MyButtonV3 from '../components/my_button_v3';

export function Profile() {
    return(
        <>
            <nav>
                <Link to="me">My Profile</Link>
            </nav>
            <MyButton />
            <MyButtonV2 />
            <MyButtonV3 />
            <Outlet/>   
        </>
    );
}
import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import NavBar from '../components/NavBar';
import { Home } from './home';
import { About } from './about';
import { Contact } from './contact';

export default function Index() {
    return (
        <>
            <BrowserRouter>
                {/* Menu */}
                <NavBar />

                {/* Content */}
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
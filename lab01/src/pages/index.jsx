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
import { Products } from './products';

export default function Index() {
    return (
        <>
            <BrowserRouter>
                {/* Menu */}
                <NavBar />

                {/* Content */}
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="products/*" element={<Products />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
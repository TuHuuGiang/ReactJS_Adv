import { Routes, Route, Link, Outlet, useSearchParams} from 'react-router-dom';
import NotMatch from './notmatch';
import SearchHome from './searchHome';

export default function Search() {
    return(
        <>
            <h1>Searching Pages</h1>

            <Routes>
                <Route path="/" element={<SearchHome />} />
                <Route path="*" element={<NotMatch />} />
            </Routes>
        </>
    );
}
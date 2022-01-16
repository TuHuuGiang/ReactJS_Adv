import { Link } from "react-router-dom";

export default function NotMatch() {
    return(
        <>
            <h1>Error 404 - File/pages not found</h1>

            <Link to="/search">Go to home</Link>
        </>
    );
}
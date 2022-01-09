import { Link } from 'react-router-dom';
import './style.css';

export default function NavBar() {
    return (
        <>
            {/* Menu */}
            <nav>
                <ul>
                    <li><Link to="/" className="menu-item">Home</Link></li>
                    <li><Link to="/products" className="menu-item">Product</Link></li>
                    <li><Link to="/about" className="menu-item">About</Link></li>
                    <li><Link to="/contact" className="menu-item">Contact Us</Link></li>
                </ul>
            </nav>
        </>
    );
}
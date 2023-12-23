import mushroom_logo from '../images/mushroom_logo.jpg';
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div id="logo-container">
                <div className="logo">
                    <a href="/">
                        <img src={mushroom_logo} width='125px' height='auto' alt="Distraction Free" />
                    </a>
                </div>
                <div className="logo-text-small">
                    <a href="/">Distraction Free: Data Science Videos</a>
                </div>
            </div>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
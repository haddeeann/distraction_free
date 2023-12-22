import mushroom_logo from '../images/mushroom_logo.jpg';
import './Header.css';

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
                    <a href="/">Distraction Free Data Science Videos</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
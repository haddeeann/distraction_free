import mushroom_logo from '../images/mushroom_logo.jpg';
import '../css/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div id='logo-container'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={mushroom_logo} width='125px' height='auto' alt='Distraction Free' />
                    </Link>
                </div>
                <div className='logo-text-small'>
                    <Link to='/'>
                        <div>Distraction Free</div>
                        <div>Data Science Videos</div>
                    </Link>
                </div>
            </div>
            <nav id='nav-container'>
                <div><Link to='/'>General Learning</Link></div>
                <div><Link to='/stats'>Statistics</Link></div>
                <div><Link to='/python'>Python</Link></div>
            </nav>
        </header>
    );
}

export default Header;
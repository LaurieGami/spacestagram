import './Header.scss';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__link">
                <h2 className="header__logo">Spacestagram</h2>
            </Link>
        </header>
    )
}

export default Header;
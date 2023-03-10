import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

function Header() {
    return (
        <section className='header__wrapp'>
            <div className="header">
                <a className='header__logo-link' href='#'>
                    <img className="header__logo" src={logo} alt="Логотип компании MEPS"></img>
                </a>
                <nav className="header__nav">
                    <a className="header__nav-link common__link" href='#'>О нас</a>
                    <Link className="header__nav-link common__link" to='/partnership'>Партнерство</Link>
                    <a className="header__nav-link common__link" href='#'>Оборудование</a>
                    <a className="header__nav-link common__link" href='#'>Услуги</a>
                    <a className="header__nav-link common__link" href='#'>Контакты</a>
                </nav>
            </div>
        </section >
    )
}

export default Header
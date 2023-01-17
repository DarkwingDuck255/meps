import logo from '../../images/logo.svg';
import './Header.css';

function Header() {
    return (
        <section className="header">
            <a className='header__logo-link' href='#'>
                <img className="header__logo" src={logo} alt="Логотип компании MEPS"></img>
            </a>
            <nav className="header__nav">
                <a className="header__nav-link common__link" href='#'>О нас</a>
                <a className="header__nav-link common__link" href='#'>Партнерство</a>
                <a className="header__nav-link common__link" href='#'>Оборудование</a>
                <a className="header__nav-link common__link" href='#'>Услуги</a>
                <a className="header__nav-link common__link" href='#'>Контакты</a>
            </nav>
        </section>
    )
}

export default Header
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

function Header() {
    const currentUrl = useLocation();


    console.log(currentUrl.pathname)
    return (
        <section className='header__wrapp'>
            <div className="header">
                <Link to='/' className='header__logo-link' >
                    <img className="header__logo" src={logo} alt="Логотип компании MEPS"></img>
                </Link>
                <nav className="header__nav">
                    <Link className={`header__nav-link common__link ${currentUrl.pathname === "/" ? 'common__current-link' : ''}`} to='/'>О нас</Link>
                    <Link className={`header__nav-link common__link  ${currentUrl.pathname === '/partnership' ? 'common__current-link' : ''}`} to='/partnership'>Партнерство</Link>
                    <Link className={`header__nav-link common__link ${currentUrl.pathname === '/machinery' ? 'common__current-link' : ''}`} to='/machinery'>Оборудование</Link>
                    <Link className={`header__nav-link common__link ${currentUrl.pathname === '/services' ? 'common__current-link' : ''}`} to='/services'>Услуги</Link>
                    {/* <a className="header__nav-link common__link" href='#'>Контакты</a> */}
                </nav>
            </div>
        </section >
    )
}

export default Header
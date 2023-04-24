import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import russian from '../../images/russian.svg';
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
                    <Link className={`header__nav-link common__link ${currentUrl.pathname === '/contacts' ? 'common__current-link' : ''}`} to='/contacts'>Контакты</Link>
                </nav>

                <div className='header__lang'>
                    <img src={russian} className='header__lang-russian'/>
                    <p className='header__lang-text'>RU</p>
                </div>
            </div>
        </section >
    )
}

export default Header
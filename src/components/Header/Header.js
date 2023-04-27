import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import russian from '../../images/russian.svg';
import './Header.css';

function Header() {
    const currentUrl = useLocation();
    const [menuLang, setMenuLang] = React.useState(false);


    function openLangMenu() {
        setMenuLang(true)
    }
    
    function closeLangMenu() {
        setMenuLang(false)
    }

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

                <div className='header__lang' onMouseOver={openLangMenu} onMouseLeave={closeLangMenu}>
                    <img src={russian} className='header__lang-russian' />
                    <p className='header__lang-text'>RU</p>
                </div>
                <div className={`header__change-lang-menu ${menuLang ? 'header__change-lang-menu_visible' : ''}`} onMouseLeave={closeLangMenu} onMouseOver={openLangMenu}>
                    <div className='header__change-lang-menu__option'>
                        <img src={russian} className='header__lang-russian' />
                        <p className='header__lang-text'>EN</p>
                    </div>
                    <div className='header__change-lang-menu__option'>
                        <img src={russian} className='header__lang-russian' />
                        <p className='header__lang-text'>UZ</p>
                    </div>
                    {/* <div className='header__change-lang-menu__option'>
                        <img src={russian} className='header__lang-russian' />
                        <p className='header__lang-text'>UZ</p>
                    </div> */}
                </div>
            </div>
        </section >
    )
}

export default Header
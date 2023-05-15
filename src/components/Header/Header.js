import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import russian from '../../images/russian.svg';
import english from '../../images/english.svg';
import './Header.css';
import { FormattedMessage } from 'react-intl';

function Header({ setCurrentLocale, currentLocale }, props) {
    const currentUrl = useLocation();
    const [menuLang, setMenuLang] = React.useState(false);

    function openLangMenu() {
        setMenuLang(true)
    }

    function closeLangMenu() {
        setMenuLang(false)
    }

    let lang = '';

    function changeLangEN() {
        setCurrentLocale('en')
        localStorage.setItem('lang', 'en')
        console.log(currentLocale)

    }

    function changeLangUZ() {
        localStorage.setItem('lang', 'uz')
        setCurrentLocale('uz')
        console.log(localStorage.getItem('lang'))
    }

    function changeLangRU() {
        localStorage.setItem('lang', 'ru')
        setCurrentLocale('ru')
        console.log(localStorage.getItem('lang'))
    }


    return (


        <section className='header__wrapp'>
            <div className="header">
                <Link to='/' className='header__logo-link' >
                    <img className="header__logo" src={logo} alt="Логотип компании MEPS"></img>
                </Link>
                <nav className="header__nav">
                    <Link className={`header__nav-link common__link ${currentUrl.pathname === "/" ? 'common__current-link' : ''}`} to='/'>

                        <FormattedMessage id="headerMenuAboutUs" defaultMessage="О нас" />
                    </Link>
                    <Link className={`header__nav-link common__link  ${currentUrl.pathname === '/partnership' ? 'common__current-link' : ''}`} to='/partnership'>
                        <FormattedMessage id="headerMenuPartnership" defaultMessage="Партнерство" />
                    </Link>
                    <Link className={`header__nav-link common__link ${currentUrl.pathname === '/machinery' ? 'common__current-link' : ''}`} to='/machinery'>
                    <FormattedMessage id="headerMenuEquipment" defaultMessage="Оборудование" />
                    </Link>
                    <Link className={`header__nav-link common__link ${currentUrl.pathname === '/services' ? 'common__current-link' : ''}`} to='/services'>
                        <FormattedMessage id="headerMenuServices" defaultMessage="Услуги" />
                    </Link>
                    <Link className={`header__nav-link common__link ${currentUrl.pathname === '/contacts' ? 'common__current-link' : ''}`} to='/contacts'>
                        <FormattedMessage id="headerMenuContacts" defaultMessage="Контакты" />

                    </Link>
                </nav>

                <div className={currentLocale === 'ru' ? 'header__lang header__lang_visible' : 'header__lang'} onMouseOver={openLangMenu} onMouseLeave={closeLangMenu}>
                    <img src={russian} className='header__lang-russian' />
                    <p className='header__lang-text'>Ru</p>
                </div>

                <div className={`header__lang ${currentLocale === 'en' ? 'header__lang_visible' : ''}`} onMouseOver={openLangMenu} onMouseLeave={closeLangMenu}>
                    <img src={english} className='header__lang-russian' />
                    <p className='header__lang-text'>En</p>
                </div>

                {/* <div className={`header__lang ${currentLocale === 'uz' ? 'header__lang_visible' : ''}`} onMouseOver={openLangMenu} onMouseLeave={closeLangMenu}>
                    <img src={russian} className='header__lang-russian' />
                    <p className='header__lang-text'>Uz</p>
                </div> */}

                <div className={`header__change-lang-menu ${menuLang ? 'header__change-lang-menu_visible' : ''}`} onMouseLeave={closeLangMenu} onMouseOver={openLangMenu}>
                    <div className={`header__change-lang-menu__option ${currentLocale === 'en' ? 'header__change-lang-menu__option_invisible' : ''}`} onClick={changeLangEN}>
                        <img src={english} className='header__lang-russian' />
                        <p className='header__lang-text'>En</p>
                    </div>
                    <div className={`header__change-lang-menu__option ${currentLocale === 'ru' ? 'header__change-lang-menu__option_invisible' : ''}`} onClick={changeLangRU}>
                        <img src={russian} className='header__lang-russian' />
                        <p className='header__lang-text'>Ru</p>
                    </div>
                    {/* <div className={`header__change-lang-menu__option ${currentLocale === 'uz' ? 'header__change-lang-menu__option_invisible' : ''}`}onClick={changeLangUZ}>
                        <img src={russian} className='header__lang-russian' />
                        <p className='header__lang-text'>Uz</p>
                    </div> */}
                </div>
            </div>
        </section >
    )
}

export default Header
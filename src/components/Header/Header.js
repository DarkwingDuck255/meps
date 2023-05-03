import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import russian from '../../images/russian.svg';
import './Header.css';
import english from '../../locale/en.json'

function Header() {
    const currentUrl = useLocation();
    const [menuLang, setMenuLang] = React.useState(false);
    // const [currentLang, setCurrentLang] = React.useState('');
// localStorage.setItem('lang', 'ru')

    function openLangMenu() {
        setMenuLang(true)
    }

    function closeLangMenu() {
        setMenuLang(false)
    }


    let lang = '';

    function changeLangEN() {
        // setCurrentLang('en')
        localStorage.setItem('lang', 'en')
        // console.log(currentLang)
        console.log(localStorage.getItem('lang'))
    }


    function changeLangUZ() {
        localStorage.setItem('lang', 'uz')
        // console.log(currentLang)
        console.log(localStorage.getItem('lang'))
    }


    return (

        // <section className='header__wrapp'>
        //     <div className="header">
        //         <Link to='/' className='header__logo-link' >
        //             <img className="header__logo" src={logo} alt="Логотип компании MEPS"></img>
        //         </Link>
        //         <nav className="header__nav">
        //             <Link className={`header__nav-link common__link ${currentUrl.pathname === "/" ? 'common__current-link' : ''}`} to='/'>
        //                 {localStorage.getItem('lang') === 'en' ? english.headerMenuAboutUs : 'О нас'}
        //             </Link>
        //             <Link className={`header__nav-link common__link  ${currentUrl.pathname === '/partnership' ? 'common__current-link' : ''}`} to='/partnership'>
        //                 {localStorage.getItem('lang') === 'en' ? english.headerMenuPartnership : 'Партнерство'}
        //             </Link>
        //             <Link className={`header__nav-link common__link ${currentUrl.pathname === '/machinery' ? 'common__current-link' : ''}`} to='/machinery'>
        //                 {localStorage.getItem('lang') === 'en' ? english.headerMenuEquipment : 'Оборудование'}
        //             </Link>
        //             <Link className={`header__nav-link common__link ${currentUrl.pathname === '/services' ? 'common__current-link' : ''}`} to='/services'>{localStorage.getItem('lang') === 'en' ? english.headerMenuServices : 'Услуги'}

        //             </Link>
        //             <Link className={`header__nav-link common__link ${currentUrl.pathname === '/contacts' ? 'common__current-link' : ''}`} to='/contacts'>
        //                 {localStorage.getItem('lang') === 'en' ? english.headerMenuContacts : 'Контакты'}
        //             </Link>
        //         </nav>
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


                <div className={`header__lang ${localStorage.getItem(lang) === 'en' ? '' : 'header__lang_visible'}`} onMouseOver={openLangMenu} onMouseLeave={closeLangMenu}>
                    <img src={russian} className='header__lang-russian' />
                    <p className='header__lang-text'>Rus</p>
                </div>

                <div className={`header__lang ${localStorage.getItem(lang) === 'en' ? 'header__lang_visible' : ''}`} onMouseOver={openLangMenu} onMouseLeave={closeLangMenu}>
                    <img src={russian} className='header__lang-russian' />
                    <p className='header__lang-text'>En</p>
                </div>

                <div className={`header__change-lang-menu ${menuLang ? 'header__change-lang-menu_visible' : ''}`} onMouseLeave={closeLangMenu} onMouseOver={openLangMenu}>
                    <div className={`header__change-lang-menu__option ${localStorage.getItem(lang) === 'en' ? 'header__change-lang-menu__option_invisible' : ''}`} onClick={changeLangEN}>
                        <img src={russian} className='header__lang-russian' />
                        <p className='header__lang-text'>En</p>
                    </div>
                    <div className={`header__change-lang-menu__option ${localStorage.getItem(lang) === 'uz' ? 'header__change-lang-menu__option_invisible' : ''}`} onClick={changeLangUZ}>
                        <img src={russian} className='header__lang-russian' />
                        <p className='header__lang-text'>Uz</p>
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
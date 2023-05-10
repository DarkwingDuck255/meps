import './Footer.css';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
// import arrowButton from '../../images/arrow-to-top.svg';

function Footer() {
    function scrollToTop() {
        window.scrollTo(0, 0)
    }
    return (
        <section className='footer'>
            <nav className='footer__wrapper'>
                <div className='footer__container'>
                    <Link to='/' className='footer__link common__link'>
                        <FormattedMessage id="headerMenuAboutUs" defaultMessage="О нас" />
                    </Link>
                    <Link to='/partnership' className='footer__link common__link'>
                        <FormattedMessage id="headerMenuPartnership" defaultMessage="Партнерство" />
                    </Link>
                </div>
                <div className='footer__container'>
                    <Link to='/machinery' className='footer__link common__link'>
                        <FormattedMessage id="headerMenuEquipment" defaultMessage="Оборудование" /></Link>
                    <Link className='footer__link common__link' to='/services' >
                        <FormattedMessage id="headerMenuServices" defaultMessage="Услуги" />
                    </Link>
                </div>
                <img src={logo} className='footer__logo' alt='логотип' />
                <div className='footer__contacts'>
                    <a href='#' className='footer__contacts-link common__link'>
                        <FormattedMessage id="headerMenuContacts" defaultMessage="Контакты" /></a>
                    <p className='footer__contacts-address'>
                        <FormattedMessage id="aboutusContactsAdress" defaultMessage="100015, Республика Узбекистан, г.Ташкент
                        Мирабадский район, ул.Шахрисабзская 22" />
                    </p>
                    <a href='tel:+998998985886' className='footer__contacts-tel common__link'>
                        <FormattedMessage id="aboutusContactsTel" defaultMessage="тел: " />
                        (+99899) 898-58-86
                    </a>
                    <a href='tel:+998781406706' className='footer__contacts-tel common__link'>
                        <FormattedMessage id="aboutusContactsTel" defaultMessage="тел: " />
                        (+99878) 140-67-06
                    </a>
                    <p className='footer__contacts-fax'>
                        <FormattedMessage id="aboutusContactsFax" defaultMessage="факс: " />
                        (+99899) 898-58-86
                    </p>
                    <a href='mailto:meps@sks.uz' className='footer__contacts-email common__link'>
                        e-mail: meps@sks.uz
                    </a>

                </div>
                <button className='footer__button-to-top' onClick={scrollToTop} />
            </nav>

        </section>
    )
}

export default Footer
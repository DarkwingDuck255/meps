import './Footer.css';
import logo from '../../images/logo.svg'
// import arrowButton from '../../images/arrow-to-top.svg';

function Footer() {
    return (
        <section className='footer'>
            <div className='footer__wrapper'>
                <div className='footer__container'>
                    <a className='footer__link common__link' href='#'>О нас</a>
                    <a className='footer__link common__link' href='#'>Партнерство</a>
                </div>
                <div className='footer__container'>
                    <a className='footer__link common__link' href='#'>Оборудование</a>
                    <a className='footer__link common__link' href='#'>Услуги</a>
                </div>
                <img src={logo} className='footer__logo' alt='логотип' />
                <div className='footer__contacts'>
                    <a href='#' className='footer__contacts-link common__link'>Контакты</a>
                    <p className='footer__contacts-address'>
                        100015, Республика Узбекистан, г.Ташкент
                        Мирабадский район, ул.Шахрисабзская 22
                    </p>
                    <a href='tel:+998998985886' className='footer__contacts-tel common__link'>
                        тел: (+99899) 898-58-86
                    </a>
                    <a href='tel:+998781406706' className='footer__contacts-tel common__link'>
                        тел: (+99878) 140-67-06
                    </a>
                    <p className='footer__contacts-fax'>
                        факс: (+99899) 898-58-86
                    </p>
                    <a href='mailto:meps@sks.uz' className='footer__contacts-email common__link'>
                        e-mail: meps@sks.uz
                    </a>

                </div>
                {/* <button className='footer__button-to-top'/> */}
            </div>

        </section>
    )
}

export default Footer
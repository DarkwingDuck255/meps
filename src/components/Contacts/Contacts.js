import './Contacts.css';

function Contacts() {
    return (
        <section className="contacts">
            <div className="contacts__map-container">
                <iframe className="contacts__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A9d08a2a29363019a9ecebe17d545a0ed4d73e0ad8c323d8319684c0e5d1092fa&amp;source=constructor" max-width="1156" width='100%' height="468" frameBorder="0"></iframe>
                <div className="contacts__map-address">
                    <h3 className="contacts__map-address-header">
                        Наши контакты
                    </h3>
                    <div className='footer__contacts contacts__map_text'>
                        {/* <a href='#' className='footer__contacts-link common__link'>Контакты</a> */}
                        <p className='footer__contacts-address contacts__map_text-modifier'>
                            ООО "MIDDLE EAST POWER SOLUTIONS" 100015, Республика Узбекистан, г.Ташкент Мирабадский район, ул.Шахрисабзская 22
                        </p>
                        <a href='tel:+998998985886' className='footer__contacts-tel common__link contacts__map_text-modifier'>
                            тел: (+99899) 898-58-86
                        </a>
                        <a href='tel:+998781406706' className='footer__contacts-tel common__link contacts__map_text-modifier'>
                            тел: (+99878) 140-67-06
                        </a>
                        <p className='footer__contacts-fax contacts__map_text-modifier'>
                            факс: (+99899) 898-58-86
                        </p>
                        <a href='mailto:meps@sks.uz' className='footer__contacts-email common__link contacts__map_text-modifier'>
                            e-mail: meps@sks.uz
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
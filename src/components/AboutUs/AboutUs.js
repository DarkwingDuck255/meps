import './AboutUs.css';
import meps from '../../images/MEPS.svg';
import carousel from '../../images/carousel.png';
import middleEast from '../../images/MIDDLE EAST POWER SOLUTIONS.svg';
import mepsGroup from '../../images/meps-group.svg';
import mitsubishi from '../../images/mitsubishi.jpg';
// import arrow from '../../images/arrow.svg';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

function AboutUs() {

    return (
        <section className="about-us">
            <div className="about-us__slogan">
                <h1 className="about-us__slogan-header">
                    <FormattedMessage id="aboutusSlogan" defaultMessage="MEPS:
                    Ваша энергетическая
                    независимость" />

                </h1>
            </div>
            <div className="about-us__slogan-green-rectangle" />

            <div className='about-us__description'>
                <div className='about-us__description-block'>
                    <h2 className='about-us__description-header'>
                        <FormattedMessage id="aboutusHeader" defaultMessage="О нас" />
                    </h2>
                    <p className='about-us__description-target'>
                        <FormattedMessage id="aboutusText" defaultMessage="«MIDDLE EAST POWER SOLUTIONS» создано в 2022 году. Компания ставит перед собой масштабные задачи: занять лидирующие позиции на рынке Узбекистана по поставкам энергетического оборудования, гармоничное внедрение поставленного оборудования в существующую производственную инфраструктуру заказчиков
                        с последующим техническим сопровождением." />
                    </p>
                    <p className='about-us__description-description'>

                        <FormattedMessage id="aboutusText2" defaultMessage="В наших бизнес-процессах задействована команда сотрудников, имеющих отличный опыт работы в сфере энергетики и проектирования различных производственных объектов. Мы стремимся предложить своим заказчикам оптимальные технические решения, способные если не исключить, то минимизировать энергетическую зависимость от внешних факторов. Номенклатура предлагаемой продукции включает в себя различные типы генерирующего оборудования на базе газопоршневых
                        и дизельных двигателей, газодожимные и компрессорные станции, электротехнические блоки, административные и вспомогательные модули." />

                    </p>

                </div>

                <div className='about-us__right-block'>
                    <div className='green__block'>
                        <img className='about-us__right-block-header' src={meps} />

                        <img className='about-us__right-block-header' src={middleEast} />
                        <img className='about-us__right-block-header-description_vertical' src={mepsGroup} />
                    </div>

                    <img className='about-us__right-block-image' src={carousel} alt='изображения с электростанций' />
                </div>
            </div>

            <div className='about-us__mitsubishi'>
                <img src={mitsubishi} className='about-us__mitsubishi-image' alt='фото электростанции' />
                <div className='about-us__mitsubishi-description'>

                    <h3 className='about-us__mitsubishi-description-header'>

                        <FormattedMessage id="aboutusPartnershipHeader" defaultMessage="Партнерство с Mitsubishi" />
                    </h3>
                    <p className='about-us__mitsubishi-description-text'>
                        <FormattedMessage id="aboutusPartnershipText" defaultMessage="ООО «MIDDLE EAST POWER SOLUTIONS» является официальным партнером
                        и сервисным представителем компании Mitsubishi Turbocharger and Engine Europe b.V. в Узбекистане и странах СНГ." />

                    </p>
                    <Link to='/partnership'>
                        <div className='about-us__mitsubishi-description-link' alt='изображение стелки для перехода на страницу' />
                    </Link>
                </div>
                <div className='about-us__mitsubishi-green-rectangle' />
            </div>

            <div className='about-us__contacts'>
                <div className='about-us__contacts-green-block-wrapper'>
                    <div className='about-us__contacts-green-block'>
                        <h4 className='about-us__contacts-green-block-header'>
                            <FormattedMessage id="headerMenuContacts" defaultMessage="Контакты" />
                        </h4>
                        <p className='about-us__contacts-green-block-address'>
                            <FormattedMessage id="aboutusContactsAdress" defaultMessage="100015, Республика Узбекистан, г.Ташкент
                            Мирабадский район, ул.Шахрисабзская 22" />

                        </p>
                        <a href='tel:+998998985886' className='about-us__contacts-green-block-tel common__link'>
                            <FormattedMessage id="aboutusContactsTel" defaultMessage="тел: " />
                            (+99899) 898-58-86
                        </a>
                        <a href='tel:+998781406706' className='about-us__contacts-green-block-tel common__link'>
                            <FormattedMessage id="aboutusContactsTel" defaultMessage="тел: " />
                            (+99878) 140-67-06
                        </a>
                        <p className='about-us__contacts-green-block-fax'>
                            <FormattedMessage id="aboutusContactsFax" defaultMessage="факс: " />
                            (+99899) 898-58-86
                        </p>
                        <a href='mailto:meps@sks.uz' className='about-us__contacts-green-block-email common__link'>
                            e-mail: meps@sks.uz
                        </a>
                    </div>
                </div>

                <div className='about-us__contacts-services'>
                    <h4 className='about-us__contacts-services-header'>
                        <FormattedMessage id="aboutusServicesHeader" defaultMessage="Услуги" />

                    </h4>
                    <p className='about-us__contacts-services-text'>
                        <FormattedMessage id="aboutusServicesText" defaultMessage="Благодаря наличию партнерских отношений с производителями оборудования «MEPS» обеспечивает высокий уровень сервисного и эксплуатационного обслуживания. Важным преимуществом «MEPS» является использование оригинальных запасных частей и расходных материалов." />

                    </p>
                    <Link to='/services' className='about-us__contacts-services-link common__link'>
                        <FormattedMessage id="aboutusServicesButton" defaultMessage="Подробнее" />

                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
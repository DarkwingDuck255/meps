import './AboutUs.css';
import meps from '../../images/MEPS.svg';
import carousel from '../../images/carousel.png';
import middleEast from '../../images/MIDDLE EAST POWER SOLUTIONS.svg';
import mepsGroup from '../../images/meps-group.svg';
import mitsubishi from '../../images/mitsubishi.jpg';
import arrow from '../../images/arrow.svg';

function AboutUs() {

    return (
        <section className="about-us">
            <div className="about-us__slogan">
                <h1 className="about-us__slogan-header">MEPS:
                    Ваша энергетическая
                    независимость
                </h1>
            </div>
            <div className="about-us__slogan-green-rectangle" />

            <div className='about-us__description'>
                <div className='about-us__description-block'>
                    <h2 className='about-us__description-header'>
                        О нас
                    </h2>
                    <p className='about-us__description-target'>
                        «MIDDLE EAST POWER SOLUTIONS» создано в 2022 году. Компания ставит перед собой масштабные задачи: занять лидирующие позиции на рынке Узбекистана по поставкам энергетического оборудования, гармоничное внедрения поставленного оборудования в существующую производственную инфраструктуру заказчиков с последующим техническим сопровождением.

                    </p>
                    <p className='about-us__description-description'>
                        В наших бизнес-процессах задействована команда сотрудников, имеющих отличный опыт работы в сфере энергетики и проектирования различных производственных объектов. Мы стремимся предложить своим заказчикам оптимальные технические решения, способные если не исключить, то минимизировать энергетическую зависимость от внешних факторов. Номенклатура предлагаемой продукции включает в себя различные типы генерирующегооборудования на базе газопоршневых и дизельных двигателей, газодожимные и компрессорные станции, электротехнические блоки.
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
                        Партнерство с Mitsubishi
                    </h3>
                    <p className='about-us__mitsubishi-description-text'>
                        «MIDDLE EAST POWER SOLUTIONS» является официальным дилером компании. Mitsubishi Turbocharger and Engine Europe b.V.
                    </p>
                    <img src={arrow} className='about-us__mitsubishi-description-link' alt='изображение стелки для перехода на страницу' />
                </div>
                <div className='about-us__mitsubishi-green-rectangle' />
            </div>

            <div className='about-us__contacts'>
                <div className='about-us__contacts-green-block-wrapper'>
                    <div className='about-us__contacts-green-block'>
                        <h4 className='about-us__contacts-green-block-header'>
                            Контакты
                        </h4>
                        <p className='about-us__contacts-green-block-address'>
                            100015, Республика Узбекистан, г.Ташкент
                            Мирабадский район, ул.Шахрисабзская 22
                        </p>
                        <a href='tel:+998998985886' className='about-us__contacts-green-block-tel common__link'>
                            тел: (+99899) 898-58-86
                        </a>
                        <a href='tel:+998781406706' className='about-us__contacts-green-block-tel common__link'>
                            тел: (+99878) 140-67-06
                        </a>
                        <p className='about-us__contacts-green-block-fax'>
                            факс: (+99899) 898-58-86
                        </p>
                        <a href='mailto:meps@sks.uz' className='about-us__contacts-green-block-email common__link'>
                            e-mail: meps@sks.uz
                        </a>
                    </div>
                </div>

                <div className='about-us__contacts-services'>
                    <h4 className='about-us__contacts-services-header'>
                        Услуги
                    </h4>
                    <p className='about-us__contacts-services-text'>
                        Благодаря наличию партнерских отношений с производителями оборудования «MEPS» обеспечивает высокий уровень сервисного и эксплуатационного обслуживания. Важным преимуществом «MEPS» является использование оригинальных запасных частей и расходных материалов.
                    </p>
                    <a href='#' className='about-us__contacts-services-link common__link'>
                        Подробнее
                    </a>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
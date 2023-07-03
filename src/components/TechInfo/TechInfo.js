import './TechInfo.css';
import './TechInfo-tablet.css';
import techInfoImg from '../../images/techinfo.png';
import techInfoImgEn from '../../images/techinfo-en.png';
import techInfoImgUz from '../../images/techinfo-uz.png';
import techIconOne from '../../images/transport.svg';
import techIconTwo from '../../images/exploitation.svg';
import techIconThree from '../../images/eco.svg';
import { FormattedMessage } from 'react-intl';

function TechInfo({ currentLocale }) {
    return (
        <section className='tech-info' >
            <h2 className='tech-info__header'>
                <FormattedMessage id="machineryTechInfoHeader" defaultMessage="Основные технические характеристики электрических станций" />

            </h2>
            <img className='tech-info__table' src={currentLocale === '' || currentLocale === 'ru' ? techInfoImg : ''} />

            <img className='tech-info__table' src={currentLocale === 'en' ? techInfoImgEn : ''} />

            <img className='tech-info__table' src={currentLocale === 'uz' ? techInfoImgUz : ''} />

            <h3 className='tech-info__specification-header'>
                <FormattedMessage id="machineryFeaturesTitle" defaultMessage="Конструктивные особенности" />

            </h3>
            <div className='tech-info__specification-card-wrap'>


                <div className='tech-info__specification-card'>
                    <img className='tech-info__specification-card-icon' src={techIconOne} />
                    <h4 className='tech-info__specification-card-title'>
                        <FormattedMessage id="machineryFeaturesSubtitle" defaultMessage="Транспортировка" />

                    </h4>

                    <ul className='tech-info__specification-card-list'>
                        <li className='tech-info__specification-card-list-item'>
                            <FormattedMessage id="machineryFeaturesText" defaultMessage="Стеновое ограждение блок-модуля изготовлено из профилированного листа 3 мм, что обеспечивает высокую жесткость контейнера и минимизацию повреждений во время транспортировки и эксплуатации." />

                        </li>
                        <li className='tech-info__specification-card-list-item'>
                            <FormattedMessage id="machineryFeaturesText2" defaultMessage="Несущие конструкции блок-модуля изготовлены из профилированных прямоугольных труб, что в комплексе с несущим стеновым ограждением позволяет производить погрузочно-разгрузочные операции при помощи захватов краном через 4 верхних усиленных фитинга, либо при помощи 4 домкратов через 4 нижних фитинга." />

                        </li>
                        <li className='tech-info__specification-card-list-item'>
                            <FormattedMessage id="machineryFeaturesText3" defaultMessage="Габариты блок-модулей соответствуют требованиям транспортных перевозок автомобильным и железнодорожным транспортом." />

                        </li>
                        <li className='tech-info__specification-card-list-item'>
                            <FormattedMessage id="machineryFeaturesText4" defaultMessage="Для транспортировки внешние элементы блок-модуля защищаются пленкой, что позволяет сохранить презентабельный вид установки после доставки." />

                        </li>
                    </ul>
                </div>

                <div className='tech-info__specification-card'>
                    <img className='tech-info__specification-card-icon' src={techIconTwo} />
                    <h4 className='tech-info__specification-card-title'>
                        <FormattedMessage id="machineryFeaturesSubtitle2" defaultMessage="Эксплуатация" />

                    </h4>

                    <ul className='tech-info__specification-card-list'>
                        <li className='tech-info__specification-card-list-item'>
                            <FormattedMessage id="machineryFeaturesText2-1" defaultMessage="Установлено рабочее, наружное, аварийное и ремонтно-переносное светодиодное освещение, обеспечивающее удобство эксплуатационного персонала." />

                        </li>
                        <li className='tech-info__specification-card-list-item'>
                            <FormattedMessage id="machineryFeaturesText2-2" defaultMessage=" Внутреннее стеновое ограждение выполнено из перфорированного нержавеющего листа 1 мм в сочетании с негорючей акустической минеральной плитой, что обеспечивает шумопоглощение внутри блок-модуля и минимальные тепловые потери." />

                        </li>
                        <li className='tech-info__specification-card-list-item'>
                            <FormattedMessage id="machineryFeaturesText2-3" defaultMessage="Установлены электрические конвекторы для поддержания температуры не менее +5C." />

                        </li>
                        <li className='tech-info__specification-card-list-item'>
                            <FormattedMessage id="machineryFeaturesText2-4" defaultMessage="Установлены выключатели и розетки для ремонтных работ." />

                        </li>
                        <li className='tech-info__specification-card-list-item'>
                            <FormattedMessage id="machineryFeaturesText2-5" defaultMessage="Установлен расширительный масляный бак, рассчитанный на месяц непрерывной работы установки." />

                        </li>
                    </ul>
                </div>

                <div className='tech-info__specification-card'>
                    <img className='tech-info__specification-card-icon' src={techIconThree} />
                    <h4 className='tech-info__specification-card-title'>
                        <FormattedMessage id="machineryFeaturesSubtitle3" defaultMessage="Влияние на окружающую среду" />

                    </h4>

                    <ul className='tech-info__specification-card-list'>
                        <li className='tech-info__specification-card-list-item'>
                            <FormattedMessage id="machineryFeaturesText3-1" defaultMessage="Уровень шума на расстоянии 10 м о станции не превышает 76 Дб, что обеспечивается применением шумоглушителей в вентиляционных проемах, критических шумоглушителей выхлопных газов и малошумных вентиляторов на воздушных охладителях, установленных на крыше блок модуля" />

                        </li>
                        <li className='tech-info__specification-card-list-item'>
                            <FormattedMessage id="machineryFeaturesText3-2" defaultMessage="Уровень вредных выбросов NOx не превышает 250 мг/мЗ." />

                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default TechInfo;
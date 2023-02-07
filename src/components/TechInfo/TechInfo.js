import './TechInfo.css';
import techInfoImg from '../../images/techinfo.png';
import techIconOne from '../../images/icon-tech.svg';


function TechInfo() {
    return (
        <section className='tech-info' >
            <h2 className='tech-info__header'>
                Основные технические характеристики электрических станций
            </h2>
            <img className='tech-info__table' src={techInfoImg} />

            <h3 className='tech-info__specification-header'>
                Конструктивные особенности
            </h3>
            <div className='tech-info__specification-card-wrap'>


                <div className='tech-info__specification-card'>
                    <img className='tech-info__specification-card-icon' src={techIconOne}/>
                    <h4 className='tech-info__specification-card-title'>
                        Транспортировка
                    </h4>

                    <ul className='tech-info__specification-card-list'>
                        <li className='tech-info__specification-card-list-item'>
                            Стеновое ограждение блок-модуля изготовлено из профилированного листа 3 мм, что обеспечивает высокую жесткость контейнера и минимизацию повреждений во время транспортировки и эксплуатации.
                        </li>
                        <li className='tech-info__specification-card-list-item'>
                            Несущие конструкции блок-модуля изготовлены из профилированных прямоугольных труб, что в комплексе с несущим стеновым ограждением позволяет производить погрузочно-разгрузочные операции при помощи захватов краном через 4 верхних усиленных фитинга, либо при помощи 4 домкратов через 4 нижних фитинга.
                        </li>
                        <li className='tech-info__specification-card-list-item'>
                            Габариты блок-модулей соответствуют требованиям транспортных перевозок автомобильным и железнодорожным транспортом.
                        </li>
                        <li className='tech-info__specification-card-list-item'>
                            Для транспортировки внешние элементы блок-модуля защищаются пленкой, что позволяет сохранить презентабельный вид установки после доставки.
                        </li>
                    </ul>
                </div>

                <div className='tech-info__specification-card'>
                    <img className='tech-info__specification-card-icon' src={techIconOne}/>
                    <h4 className='tech-info__specification-card-title'>
                        Транспортировка
                    </h4>

                    <ul className='tech-info__specification-card-list'>
                        <li className='tech-info__specification-card-list-item'>
                            Стеновое ограждение блок-модуля изготовлено из профилированного листа 3 мм, что обеспечивает высокую жесткость контейнера и минимизацию повреждений во время транспортировки и эксплуатации.
                        </li>
                        <li className='tech-info__specification-card-list-item'>
                            Несущие конструкции блок-модуля изготовлены из профилированных прямоугольных труб, что в комплексе с несущим стеновым ограждением позволяет производить погрузочно-разгрузочные операции при помощи захватов краном через 4 верхних усиленных фитинга, либо при помощи 4 домкратов через 4 нижних фитинга.
                        </li>
                        <li className='tech-info__specification-card-list-item'>
                            Габариты блок-модулей соответствуют требованиям транспортных перевозок автомобильным и железнодорожным транспортом.
                        </li>
                        <li className='tech-info__specification-card-list-item'>
                            Для транспортировки внешние элементы блок-модуля защищаются пленкой, что позволяет сохранить презентабельный вид установки после доставки.
                        </li>
                    </ul>
                </div>

                <div className='tech-info__specification-card'>
                    <img className='tech-info__specification-card-icon' src={techIconOne}/>
                    <h4 className='tech-info__specification-card-title'>
                        Транспортировка
                    </h4>

                    <ul className='tech-info__specification-card-list'>
                        <li className='tech-info__specification-card-list-item'>
                            Стеновое ограждение блок-модуля изготовлено из профилированного листа 3 мм, что обеспечивает высокую жесткость контейнера и минимизацию повреждений во время транспортировки и эксплуатации.
                        </li>
                        <li className='tech-info__specification-card-list-item'>
                            Несущие конструкции блок-модуля изготовлены из профилированных прямоугольных труб, что в комплексе с несущим стеновым ограждением позволяет производить погрузочно-разгрузочные операции при помощи захватов краном через 4 верхних усиленных фитинга, либо при помощи 4 домкратов через 4 нижних фитинга.
                        </li>
                        <li className='tech-info__specification-card-list-item'>
                            Габариты блок-модулей соответствуют требованиям транспортных перевозок автомобильным и железнодорожным транспортом.
                        </li>
                        <li className='tech-info__specification-card-list-item'>
                            Для транспортировки внешние элементы блок-модуля защищаются пленкой, что позволяет сохранить презентабельный вид установки после доставки.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default TechInfo;
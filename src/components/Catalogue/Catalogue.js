import './Catalogue.css';
import windSupply from '../../images/wind-supply.png';
import waterHeat from '../../images/water-heat.png';
import gas from '../../images/gas.png';
// import airCompress from '../../images/air-compress.png';
import blockContainer from '../../images/block-container.png';
import ktp from '../../images/ktp.png';
import { FormattedMessage } from 'react-intl';


export default function Catalogue(props) {
    return (
        <section className='catalogue'>
            <h2 className='catalogue__header'>
            <FormattedMessage id="machineryCatalogueHeader" defaultMessage="Каталог оборудования" />
                
            </h2>
            <div className='catalogue__cards'>
                <div className='catalogue__card'>
                    <img className='catalogue__card-image' src={windSupply} />
                    <h4 className='catalogue__card-header'>
                        Ветродизельная гибридная энергетическая установка
                    </h4>
                    <p className='catalogue__card-description'>
                        Гибридные энергетические установки предназначены для электроснабжения потребителей за счет выработки электрической энергии от силы ветра, а при его отсутствии от дизельного, либо газового топлива.
                    </p>
                    <button type='button'  className='catalogue__card-popup-button' onClick={props.onOpenHibrid}>Подробнее</button>
                </div>

                <div className='catalogue__card'>
                    <img className='catalogue__card-image' src={waterHeat} />
                    <h4 className='catalogue__card-header'>
                        Водогрейные котельные
                    </h4>
                    <p className='catalogue__card-description'>
                        Водогрейные котельные предназначены для обеспечения надежного теплоснабжения промышленных объектов
                        и удаленных потребителей.
                    </p>
                    <button className='catalogue__card-popup-button' onClick={props.onOpenBoiler}>Подробнее</button>
                </div>

                <div className='catalogue__card'>
                    <img className='catalogue__card-image' src={gas} />
                    <h4 className='catalogue__card-header'>
                        Газодожимные компрессорные
                    </h4>
                    <p className='catalogue__card-description'>
                        Комплектные установки с полной системой автоматизации на базе компрессоров Atlas Сорсо, Ariel, Cooper, Hyundai и т.д
                    </p>
                    <button className='catalogue__card-popup-button' onClick={props.onOpenGasCompress}>Подробнее</button>
                </div>

                {/* <div className='catalogue__card'>
                    <img className='catalogue__card-image' src={airCompress} />
                    <h4 className='catalogue__card-header'>
                        Воздушные компрессорные
                    </h4>
                    <p className='catalogue__card-description'>

                    </p>
                    <button className='catalogue__card-popup-button' href='#'>Подробнее</button>
                </div> */}

                <div className='catalogue__card'>
                    <img className='catalogue__card-image' src={blockContainer} />
                    <h4 className='catalogue__card-header'>
                        Закрытые распределительные устройства в блок-контейнере
                    </h4>
                    <p className='catalogue__card-description'>
                        ЗРУ изготавливаются под индивидуальные решения для каждого Заказчика с применением современного и безопасного в эксплуатации электрооборудования.
                    </p>
                    <button className='catalogue__card-popup-button' onClick={props.onOpenBlockContainer} >Подробнее</button>
                </div>

                <div className='catalogue__card'>
                    <img className='catalogue__card-image' src={ktp} />
                    <h4 className='catalogue__card-header'>
                        Комплектные трансформаторные подстанции наружной установки (КТП)
                    </h4>
                    <p className='catalogue__card-description'>
                        Гибридные энергетические установки предназначены для электроснабжения потребителей за счет выработки электрической энергии от силы ветра,
                        а при его отсутствии от дизельного,
                        либо газового топлива.
                    </p>
                    <button className='catalogue__card-popup-button' onClick={props.onOpenKTP}>Подробнее</button>
                </div>
            </div>
        </section>
    )
}
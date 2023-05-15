import './PopupHibrid.css';
import imageOne from '../../images/lightning2.svg';
import imageTwo from '../../images/resistor.svg';
import imageThree from '../../images/electric1.svg';
import imageFour from '../../images/cutout.svg';
import imageFive from '../../images/electric2.svg';
import { FormattedMessage } from 'react-intl';


function PopupBlockContainer(props) {

    function closeByClickOnOverlay(evt) {
        if (evt.target.classList.contains('popup-wrap_visible')) {
            props.onClose()
        }
    }
    return (
        <div className={`popup-wrap ${props.isOpenBlockContainer ? 'popup-wrap_visible' : ''}`} onClick={closeByClickOnOverlay}>
            <div className={`popup ${props.isOpenBlockContainer ? 'popup_visible' : ''}`}>
                <button className='popup__close-btn' onClick={props.onClose} />
                <h4 className="popup__title">
                    <FormattedMessage id="machineryGearsTitle" defaultMessage="Закрытые распределительные устройства в блок-контейнере" />

                </h4>
                <p className="popup__text">
                    <FormattedMessage id="machineryGearsText2" defaultMessage="ЗРУ изготавливаются под индивидуальные решения для каждого Заказчика с применением современного и безопасного в эксплуатации электрооборудования. Комплектация ЗРУ осуществляется электрооборудованием различного исполнения с различными номинальными параметрами - трансформаторы, устройства АВР, ИБП, ШСН, компенсаторы реактивной мощности и т.д." />
                    
                </p>

                <div className="popup__tech">
                    <h5 className="popup__tech-title">
                        <FormattedMessage id="machineryPopupBoilerHeader" defaultMessage="Технические характеристики" />
                        
                    </h5>
                    <div className="popup__tech-cards-container">
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageOne} />
                            <p className="popup__tech-card-text">
                                <FormattedMessage id="machineryGearsPopupTech" defaultMessage="Номинальное напряжение,
                                0,4, 6, 10, 35 кВ" />
                                
                            </p>
                        </div>
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageTwo} />
                            <p className="popup__tech-card-text">
                                <FormattedMessage id="machineryGearsPopupTech2" defaultMessage="Номинальный ток
                                главных цепей,
                                630, 1000, 1250, 1600, 2А" />
                                
                            </p>
                        </div>
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageThree} />
                            <p className="popup__tech-card-text">
                                <FormattedMessage id="machineryGearsPopupTech3" defaultMessage="Номинальный ток
                                сборных шин,
                                630, 1000, 1600, 2500 А" />
                                
                            </p>
                        </div>
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageFour} />
                            <p className="popup__tech-card-text">
                                <FormattedMessage id="machineryGearsPopupTech4" defaultMessage="Номинальный ток
                                отключения выключателя,
                                16, 20, 25, 31,5 кА" />
                                
                            </p>
                        </div>
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageOne} />
                            <p className="popup__tech-card-text">
                                <FormattedMessage id="machineryGearsPopupTech5" defaultMessage=" Номинальное напряжение вспомогательных цепей,
                                110, 220 B" />
                               
                            </p>
                        </div>
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageFive} />
                            <p className="popup__tech-card-text">
                                <FormattedMessage id="machineryGearsPopupTech6" defaultMessage="Вид линейных высоковольтных присоединений,
                                Шинные, кабельные" />
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopupBlockContainer;
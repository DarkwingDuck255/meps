import './PopupHibrid.css';
import imageOne from '../../images/power.svg';
import imageTwo from '../../images/time2.svg';
import imageThree from '../../images/fuel.svg';
import { FormattedMessage } from 'react-intl';

function PopupBoiler(props) {

    function closeByClickOnOverlay(evt) {
        if (evt.target.classList.contains('popup-wrap_visible')) {
            props.onClose()
        }
    }
    return (
        <div className={`popup-wrap ${props.isOpenBoiler ? 'popup-wrap_visible' : ''}`} onClick={closeByClickOnOverlay}>
            <div className={`popup ${props.isOpenBoiler ? 'popup_visible' : ''}`}>
                <button className='popup__close-btn' onClick={props.onClose} />
                <h4 className="popup__title">
                    <FormattedMessage id="machineryWaterTitle" defaultMessage="Водогрейные котельные" />
                    
                </h4>
                <p className="popup__text">
                    <FormattedMessage id="machineryWaterText" defaultMessage="Водогрейные котельные предназначены для обеспечения надежного теплоснабжения промышленных объектов и удаленных потребителей.В состав поставки входят модульное здание котельной, газовый котел, водоподготовительная установка для подготовки подпиточной воды и дымовая труба." />
                    
                </p>
                <p className="popup__text">
                    <FormattedMessage id="machineryWaterText2" defaultMessage="Водогрейные котельные поставляются с максимальной готовностью оборудования для проведения пуско-наладочных работ и монтируются на специально подготовленный фундамент." />
                    
                </p>

                <div className="popup__tech">
                    <h5 className="popup__tech-title">
                        <FormattedMessage id="machineryPopupTechHeader" defaultMessage="Технические характеристики" />
                        
                    </h5>
                    <div className="popup__tech-cards-container">
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageOne} />
                            <p className="popup__tech-card-text">
                                <FormattedMessage id="machineryPopupBoilerParameter" defaultMessage="Единичная мощность котла, до 10 Гкал/ч" />
                                
                            </p>
                        </div>
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageTwo} />
                            <p className="popup__tech-card-text">
                                <FormattedMessage id="machineryPopupBoilerParameter2" defaultMessage="Срок изготовления,
                                6 месяцев" />
                            </p>
                        </div>
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageThree} />
                            <p className="popup__tech-card-text">
                                <FormattedMessage id="machineryPopupBoilerParameter3" defaultMessage="Топливо
                                (газ, жидкое топливо, уголь, ТБО, возобновляемое)" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopupBoiler;
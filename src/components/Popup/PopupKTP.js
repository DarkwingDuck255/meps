import './PopupHibrid.css';
import imageOne from '../../images/lightning2.svg';
import imageTwo from '../../images/resistor.svg';
import imageThree from '../../images/electric1.svg';
import imageFour from '../../images/cutout.svg';
import imageFive from '../../images/electric2.svg';
import { FormattedMessage } from 'react-intl';


function PopupKTP(props) {

    function closeByClickOnOverlay(evt) {
        if (evt.target.classList.contains('popup-wrap_visible')) {
            props.onClose()
        }
    }
    return (
        <div className={`popup-wrap ${props.isOpenKTP ? 'popup-wrap_visible' : ''}`} onClick={closeByClickOnOverlay}>
            <div className={`popup ${props.isOpenKTP ? 'popup_visible' : ''}`}>
                {/* <div className='popup__header'> */}
                <button className='popup__close-btn' onClick={props.onClose} />
                <h4 className="popup__title">
                    <FormattedMessage id="machineryKTPTitle" defaultMessage="Комплектные трансформаторные подстанции наружной установки (КТП)" />

                </h4>
                {/* </div> */}
                <p className="popup__text popup__text-ktp">
                    <FormattedMessage id="machineryKTPPopupList" defaultMessage="Изготавливаются следующие виды КТП:" />

                </p>
                <ul className='popup__text-list'>
                    <li>
                        <FormattedMessage id="machineryKTPPopupListItem" defaultMessage=" Однотрансформаторные тупиковые с внутренней высоковольтной ячейкой или без нее" />
                    </li>
                    <li>
                        <FormattedMessage id="machineryKTPPopupListItem2" defaultMessage="Двухтрансформаторные тупиковые" />
                    </li>
                    <li>
                        <FormattedMessage id="machineryKTPPopupListItem3" defaultMessage="Одно- и двухтрансформаторные проходные" />
                    </li>
                </ul>

                <p className="popup__text">
                    <FormattedMessage id="machineryKTPPopupText" defaultMessage="Корпус КТП представляет собой цельносварной металлический блок-контейнер. В проемы устанавливаются технологические ворота, двери и панели для обслуживания. Компоновочные решения и выбор типа оборудования выполняются согласно требований Заказчика." />

                </p>

                <div className="popup__tech">
                    <h5 className="popup__tech-title">
                        <FormattedMessage id="machineryKTPPopupTech" defaultMessage=" Технические характеристики" />

                    </h5>
                    <div className="popup__tech-cards-container">
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageOne} />
                            <p className="popup__tech-card-text">
                                <FormattedMessage id="machineryKTPPopupTech" defaultMessage="Мощность силового трансформатора,
                                25 - 3150 кВА" />

                            </p>
                        </div>
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageTwo} />
                            <p className="popup__tech-card-text">
                                <FormattedMessage id="machineryKTPPopupTech2" defaultMessage=" Номинальное напряжение на стороне высокого напряжения (ВН), 6, 10, 35 кВ" />

                            </p>
                        </div>
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageThree} />
                            <p className="popup__tech-card-text">
                                <FormattedMessage id="machineryKTPPopupTech3" defaultMessage="Номинальный ток сборных
                                шин на стороне,
                                630, 1000 А" />
                                
                            </p>
                        </div>
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageFour} />
                            <p className="popup__tech-card-text">
                                <FormattedMessage id="machineryKTPPopupTech4" defaultMessage=" Номинальный ток сборных
                                шин на стороне,
                                до 2500А" />
                               
                            </p>
                        </div>
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageOne} />
                            <p className="popup__tech-card-text">
                                <FormattedMessage id="machineryKTPPopupTech5" defaultMessage="Номинальное напряжение на стороне низкого напряжения (НН), 0,4, 6, 10 кВ" />
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopupKTP;
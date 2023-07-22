import './PopupHibrid.css';
import imageOne from '../../images/power.svg';
import imageTwo from '../../images/lightning.svg';
import imageThree from '../../images/wind.svg';
import { FormattedMessage } from 'react-intl';

function PopupHibrid(props) {

    function closeByClickOnOverlay(evt) {
        if (evt.target.classList.contains('popup-wrap_visible')) {
            props.onClose()
        }
    }
    return (
        <div className={`popup-wrap ${props.isOpenHibrid ? 'popup-wrap_visible' : ''}`} onClick={closeByClickOnOverlay}>
            <div className={'popup-wrapper'}>
            <div className={`popup ${props.isOpenHibrid ? 'popup_visible' : ''}`}>
                {/* <div className='popup-btn-wrap'> */}
                    <button className='popup__close-btn' onClick={props.onClose} />
                {/* </div> */}

                <h4 className="popup__title">
                    <FormattedMessage id="machineryHybridTitle" defaultMessage="Ветродизельная гибридная энергетическая установка" />

                </h4>
                <p className="popup__text">
                    <FormattedMessage id="machineryHybridText" defaultMessage="Гибридные энергетические установки предназначены для электроснабжения потребителей за счет выработки электрической энергии от силы ветра, а при его отсутствии от дизельного, либо газового топлива." />

                </p>
                <p className="popup__text">
                    <FormattedMessage id="macineryHybridText2" defaultMessage="Такие установки обеспечивают постоянную требуемую выходную мощность для потребителя, при этом минимизируя затраты на топливо и сокращая выбросы." />

                </p>

                <div className="popup__tech">
                    <h5 className="popup__tech-title">
                        <FormattedMessage id="machineryPopupTechHeader" defaultMessage="Технические характеристики" />

                    </h5>
                    <div className="popup__tech-cards-container">
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageOne} />
                            <p className="popup__tech-card-text">
                                <FormattedMessage id="machineryPopupTechParameter" defaultMessage="Мощность установки,
                                до 1000 кВт" />

                            </p>
                        </div>
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageTwo} />
                            <p className="popup__tech-card-text">
                                <FormattedMessage id="machineryPopupTechParameter2" defaultMessage="Номинальное напряжение, 0,4 кВ" />

                            </p>
                        </div>
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageThree} />
                            <p className="popup__tech-card-text">
                                <FormattedMessage id="machineryPopupTechParameter3" defaultMessage="Требуемая скорость
                                ветра не менее, 6 м/с" />

                            </p>
                        </div>
                    </div>
                </div>
            
            </div></div>
        </div>
    );
}

export default PopupHibrid;
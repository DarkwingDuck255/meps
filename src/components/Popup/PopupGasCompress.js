import './PopupHibrid.css';
import imageOne from '../../images/fire.svg';
import imageTwo from '../../images/barometer.svg';

function PopupGasCompress(props) {

    function closeByClickOnOverlay(evt) {
        if (evt.target.classList.contains('popup-wrap_visible')) {
            props.onClose()
        }
    }
    return (
        <div className={`popup-wrap ${props.isOpenGasCompress ? 'popup-wrap_visible' : ''}`} onClick={closeByClickOnOverlay}>
            <div className={`popup ${props.isOpenGasCompress ? 'popup_visible' : ''}`}>
                <button className='popup__close-btn' onClick={props.onClose} />
                <h4 className="popup__title">
                    Газодожимные компрессорные
                </h4>
                {/* <p className="popup__text">
                    
                </p>
                <p className="popup__text">
                    
                </p> */}

                <div className="popup__tech">
                    <h5 className="popup__tech-title">
                        Технические характеристики
                    </h5>
                    <div className="popup__tech-cards-container">
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageOne} />
                            <p className="popup__tech-card-text">
                                Расход газа,
                                до 60 ООО мЗ/ч
                            </p>
                        </div>
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageTwo} />
                            <p className="popup__tech-card-text">
                                Давление на входе,
                                от 5-12
                            </p>
                        </div>
                        <div className="popup__tech-card">
                            <img className="popup__tech-card-img" src={imageTwo} />
                            <p className="popup__tech-card-text">
                                Давление на выходе,
                                до З50
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopupGasCompress;
import './Benefits.css';
import './Benefits-tablet.css';
import squares from '../../images/squares.svg';
import gear from '../../images/gear.svg';
import volume from '../../images/volume.svg';
import time from '../../images/time.svg';
import { FormattedMessage } from 'react-intl';

function Benefits() {
    return (
        <section className='benefits'>
            <div className='benefits__item'>
                <img src={squares} className='benefits__item-icon' alt='квадраты разных размеров' />
                <p className='benefits__item-description'>
                    <FormattedMessage id="aboutusAdvantages1" defaultMessage="Широкий модельный ряд, диапазон от 400 кВтдо 4 МВт" />
                </p>
            </div>
            <div className='benefits__item'>
                <img src={gear} className='benefits__item-icon' alt='квадраты разных размеров' />
                <p className='benefits__item-description'>
                    <FormattedMessage id="aboutusAdvantages2" defaultMessage="Самый высокий КПД среди аналогичичных установок" />
                </p>
            </div>
            <div className='benefits__item'>
                <img src={volume} className='benefits__item-icon' alt='квадраты разных размеров' />
                <p className='benefits__item-description'>
                    <FormattedMessage id="aboutusAdvantages3" defaultMessage="Низкий уровень шума и вредных выбросов" />
                </p>
            </div>
            <div className='benefits__item'>
                <img src={time} className='benefits__item-icon' alt='квадраты разных размеров' />
                <p className='benefits__item-description'>
                    <FormattedMessage id="aboutusAdvantages4" defaultMessage="Набор нагрузки за 16 секунд" />
                </p>
            </div>
        </section>
    )
}

export default Benefits
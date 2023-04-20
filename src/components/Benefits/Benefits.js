import './Benefits.css';
import squares from '../../images/squares.svg';
import gear from '../../images/gear.svg';
import volume from '../../images/volume.svg';
import time from '../../images/time.svg';

function Benefits() {
    return (
        <section className='benefits'>
            <div className='benefits__item'>
                <img src={squares} className='benefits__item-icon' alt='квадраты разных размеров' />
                <p className='benefits__item-description'>Широкий модельный ряд, диапазон от 400 кВтдо 4 МВт</p>
            </div>
            <div className='benefits__item'>
                <img src={gear} className='benefits__item-icon' alt='квадраты разных размеров' />
                <p className='benefits__item-description'>Самый высокий КПД среди аналогичичных установок</p>
            </div>
            <div className='benefits__item'>
                <img src={volume} className='benefits__item-icon' alt='квадраты разных размеров' />
                <p className='benefits__item-description'>Низкий уровень шума и вредных выбросов</p>
            </div>
            <div className='benefits__item'>
                <img src={time} className='benefits__item-icon' alt='квадраты разных размеров' />
                <p className='benefits__item-description'>Набор нагрузки за 16 секунд</p>
            </div>
        </section>
    )
}

export default Benefits
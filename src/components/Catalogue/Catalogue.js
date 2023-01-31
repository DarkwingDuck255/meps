import './Catalogue.css';
import windSupply from '../../images/wind-supply.png';

export default function Catalogue() {
    return (
        <section className='catalogue'>
                <h2 className='catalogue__header'>
                    Каталог оборудования
                </h2>

                <div className='catalogue__card'>
                    <img className='catalogue__card-image' src={windSupply} />
                    <h4 className='catalogue__card-header'>

                    </h4>
                    <p className='catalogue__card-description'>

                    </p>
                    <a className='catalogue__card-popup' href='#'>Подробнее</a>
                </div>

                <div className='catalogue__card'>
                    <img className='catalogue__card-image' src={windSupply} />
                    <h4 className='catalogue__card-header'>

                    </h4>
                    <p className='catalogue__card-description'>

                    </p>
                    <a className='catalogue__card-popup' href='#'>Подробнее</a>
                </div>

                <div className='catalogue__card'>
                    <img className='catalogue__card-image' src={windSupply} />
                    <h4 className='catalogue__card-header'>

                    </h4>
                    <p className='catalogue__card-description'>

                    </p>
                    <a className='catalogue__card-popup' href='#'>Подробнее</a>
                </div>

                <div className='catalogue__card'>
                    <img className='catalogue__card-image' src={windSupply} />
                    <h4 className='catalogue__card-header'>

                    </h4>
                    <p className='catalogue__card-description'>

                    </p>
                    <a className='catalogue__card-popup' href='#'>Подробнее</a>
                </div>
        </section>
    )
}
import './Schema.css';
import schemaImg from '../../images/schema.png';
import umbrella from '../../images/umbrella.svg';
import bug from '../../images/bug.svg';
import gears from '../../images/gears.svg';
import sound from '../../images/sound.svg';
import service from '../../images/service.svg';
import fireProtect from '../../images/fire-protect.svg';
import coldProtect from '../../images/cold-protect.svg';
import sertification from '../../images/sertification.svg';

export default function Schema() {
    return (
        <section className="schema">
            <h2 className="schema__header">
                Электрические станции
            </h2>
            <img src={schemaImg} className="schema__image" />

            <div className='schema__advantages'>
                <div className='schema__advantages-item'>
                    <img src={umbrella} className='schema__advantages-item-img' />
                    <div className='schema__advantages-item-wrap'>
                        <h3 className='schema__advantages-item-header'>
                            Защита от осадков
                        </h3>
                        <p className='schema__advantages-item-description'>
                            Предохраняет технику от дождя, снега, града, ветра, песка и т.д.
                        </p>
                    </div>
                </div>
                <div className='schema__advantages-item'>
                    <img src={bug} className='schema__advantages-item-img' />
                    <div className='schema__advantages-item-wrap'>
                        <h3 className='schema__advantages-item-header'>
                            Зищита от взлома
                        </h3>
                        <p className='schema__advantages-item-description'>
                            Предотвращает доступ посторонних лиц к технике
                        </p>
                    </div>
                </div>
                <div className='schema__advantages-item'>
                    <img src={gears} className='schema__advantages-item-img' />
                    <div className='schema__advantages-item-wrap'>
                        <h3 className='schema__advantages-item-header'>
                            Упрощенный монтаж на месте
                        </h3>
                        <p className='schema__advantages-item-description'>
                            Не требует специальной подготовки  площадки
                        </p>
                    </div>
                </div>
                <div className='schema__advantages-item'>
                    <img src={sound} className='schema__advantages-item-img' />
                    <div className='schema__advantages-item-wrap'>
                        <h3 className='schema__advantages-item-header'>
                            Защита от шума
                        </h3>
                        <p className='schema__advantages-item-description'>
                            Позволяет устанавливать оборудование вблизи жилых домов
                        </p>
                    </div>
                </div>
                <div className='schema__advantages-item'>
                    <img src={service} className='schema__advantages-item-img' />
                    <div className='schema__advantages-item-wrap'>
                        <h3 className='schema__advantages-item-header'>
                            Удобный сервис
                        </h3>
                        <p className='schema__advantages-item-description'>
                            Свободное пространство внутри контейнера для сервисных инженеров и обслуживающего персонала
                        </p>
                    </div>
                </div>
                <div className='schema__advantages-item'>
                    <img src={fireProtect} className='schema__advantages-item-img' />
                    <div className='schema__advantages-item-wrap'>
                        <h3 className='schema__advantages-item-header'>
                            Пожарная безопасность
                        </h3>
                        <p className='schema__advantages-item-description'>
                            Имеет в составе систему пожаротушения и сигнализации
                        </p>
                    </div>
                </div>
                <div className='schema__advantages-item'>
                    <img src={coldProtect} className='schema__advantages-item-img' />
                    <div className='schema__advantages-item-wrap'>
                        <h3 className='schema__advantages-item-header'>
                            Защита от холода
                        </h3>
                        <p className='schema__advantages-item-description'>
                            Эксплуатация оборудования при температурах от – 60⁰ до +60⁰

                        </p>
                    </div>
                </div>
                <div className='schema__advantages-item'>
                    <img src={sertification} className='schema__advantages-item-img' />
                    <div className='schema__advantages-item-wrap'>
                        <h3 className='schema__advantages-item-header'>
                        Сертификация
                        </h3>
                        <p className='schema__advantages-item-description'>
                        Энергетические установки имеют сертификат соответствия
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
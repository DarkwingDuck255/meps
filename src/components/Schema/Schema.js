import './Schema.css';
import schemaImg from '../../images/schema.png';
import schemaImgEn from '../../images/schema-en.png';
import umbrella from '../../images/umbrella.svg';
import bug from '../../images/bug.svg';
import gears from '../../images/gears.svg';
import sound from '../../images/sound.svg';
import service from '../../images/service.svg';
import fireProtect from '../../images/fire-protect.svg';
import coldProtect from '../../images/cold-protect.svg';
import sertification from '../../images/sertification.svg';
import { FormattedMessage } from 'react-intl';

export default function Schema({currentLocale}) {
    return (
        <section className="schema">
            <h2 className="schema__header">
                <FormattedMessage id="machineryAdvantagesHeader" defaultMessage="Электрические станции" />

            </h2>
            <img src={currentLocale === 'en' ? schemaImgEn : schemaImg} className="schema__image" />

            <div className='schema__advantages'>
                <div className='schema__advantages-item'>
                    <img src={umbrella} className='schema__advantages-item-img' />
                    <div className='schema__advantages-item-wrap'>
                        <h3 className='schema__advantages-item-header'>
                            <FormattedMessage id="machineryAdvantagesTitle" defaultMessage="Защита от осадков" />

                        </h3>
                        <p className='schema__advantages-item-description'>
                            <FormattedMessage id="machineryAdvantagesText" defaultMessage="Предохраняет технику от дождя, снега, града, ветра, песка и т.д." />

                        </p>
                    </div>
                </div>
                <div className='schema__advantages-item'>
                    <img src={bug} className='schema__advantages-item-img' />
                    <div className='schema__advantages-item-wrap'>
                        <h3 className='schema__advantages-item-header'>
                            <FormattedMessage id="machineryAdvantagesTitle4" defaultMessage="Зищита от взлома" />
                        </h3>
                        <p className='schema__advantages-item-description'>
                            <FormattedMessage id="machineryAdvantagesText4" defaultMessage="Предотвращает доступ посторонних лиц к технике" />

                        </p>
                    </div>
                </div>
                <div className='schema__advantages-item'>
                    <img src={gears} className='schema__advantages-item-img' />
                    <div className='schema__advantages-item-wrap'>
                        <h3 className='schema__advantages-item-header'>
                            <FormattedMessage id="machineryAdvantagesTitle6" defaultMessage="Упрощенный монтаж на месте" />

                        </h3>
                        <p className='schema__advantages-item-description'>
                            <FormattedMessage id="machineryAdvantagesText6" defaultMessage="Не требует специальной подготовки  площадки" />

                        </p>
                    </div>
                </div>
                <div className='schema__advantages-item'>
                    <img src={sound} className='schema__advantages-item-img' />
                    <div className='schema__advantages-item-wrap'>
                        <h3 className='schema__advantages-item-header'>
                            <FormattedMessage id="machineryAdvantagesTitle2" defaultMessage="Защита от шума" />

                        </h3>
                        <p className='schema__advantages-item-description'>
                            <FormattedMessage id="machineryAdvantagesText2" defaultMessage="Позволяет устанавливать оборудование вблизи жилых домов" />

                        </p>
                    </div>
                </div>
                <div className='schema__advantages-item'>
                    <img src={service} className='schema__advantages-item-img' />
                    <div className='schema__advantages-item-wrap'>
                        <h3 className='schema__advantages-item-header'>
                            <FormattedMessage id="machineryAdvantagesTitle5" defaultMessage="Удобный сервис" />

                        </h3>
                        <p className='schema__advantages-item-description'>
                            <FormattedMessage id="machineryAdvantagesText5" defaultMessage="Свободное пространство внутри контейнера для сервисных инженеров и обслуживающего персонала" />

                        </p>
                    </div>
                </div>
                <div className='schema__advantages-item'>
                    <img src={fireProtect} className='schema__advantages-item-img' />
                    <div className='schema__advantages-item-wrap'>
                        <h3 className='schema__advantages-item-header'>
                            <FormattedMessage id="machineryAdvantagesTitle3" defaultMessage="Пожарная безопасность" />

                        </h3>
                        <p className='schema__advantages-item-description'>
                            <FormattedMessage id="machineryAdvantagesText3" defaultMessage="Имеет в составе систему пожаротушения и сигнализации" />

                        </p>
                    </div>
                </div>
                <div className='schema__advantages-item'>
                    <img src={coldProtect} className='schema__advantages-item-img' />
                    <div className='schema__advantages-item-wrap'>
                        <h3 className='schema__advantages-item-header'>
                            <FormattedMessage id="machineryAdvantagesTitle7" defaultMessage="Защита от холода" />

                        </h3>
                        <p className='schema__advantages-item-description'>
                            <FormattedMessage id="machineryAdvantagesText7" defaultMessage="Эксплуатация оборудования при температурах от – 60⁰ до +60⁰" />
                        </p>
                    </div>
                </div>
                <div className='schema__advantages-item'>
                    <img src={sertification} className='schema__advantages-item-img' />
                    <div className='schema__advantages-item-wrap'>
                        <h3 className='schema__advantages-item-header'>
                            <FormattedMessage id="machineryAdvantagesTitle8" defaultMessage="Сертификация" />


                        </h3>
                        <p className='schema__advantages-item-description'>
                            <FormattedMessage id="machineryAdvantagesText8" defaultMessage="Энергетические установки имеют сертификат соответствия" />


                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
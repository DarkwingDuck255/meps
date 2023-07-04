import './Services.css';
import './Services-tablet.css';
import warranty from '../../images/warranty.svg';
import techSupport from '../../images/tech-support.svg';
import monitoring from '../../images/monitoring.svg';
import planRepair from '../../images/plan-repair.svg';
import supplies from '../../images/supplies.svg';
import majorRepairs from '../../images/major-repairs.svg';
import training from '../../images/training.svg';
import { FormattedMessage } from 'react-intl';

function Services() {
    return (
        <section className="services">
            <h2 className="services__header">
                <FormattedMessage id="servicesHeader" defaultMessage="Услуги" />
            </h2>
            <p className="services__text">
                <FormattedMessage id="servicesText" defaultMessage="Благодаря наличию партнерских отношений с производителями оборудования «MEPS» обеспечивает высокий уровень сервисного и эксплуатационного обслуживания. Важным преимуществом «MEPS» является использование оригинальных запасных частей и расходных материалов." />

            </p>
            <div className="servces__advantages">
                <div className="services__advantages-item">
                    <img className="services__advantages-item-image" src={warranty} />
                    <p className="services__advantages-item-text">
                        <FormattedMessage id="servicesListItem" defaultMessage="Гарантийное обслуживание и поддержка" />
                    </p>
                </div>
                <div className="services__advantages-item">
                    <img className="services__advantages-item-image" src={techSupport} />
                    <p className="services__advantages-item-text">
                        <FormattedMessage id="servicesListItem2" defaultMessage="Техническое обслуживание газопоршневых и дизельных установок" />
                    </p>
                </div>
                <div className="services__advantages-item">
                    <img className="services__advantages-item-image" src={monitoring} />
                    <p className="services__advantages-item-text">
                        <FormattedMessage id="servicesListItem3" defaultMessage="Мониторинг и техническая диагностика оборудования" />
                    </p>
                </div>
                <div className="services__advantages-item">
                    <img className="services__advantages-item-image" src={planRepair} />
                    <p className="services__advantages-item-text">
                        <FormattedMessage id="servicesListItem4" defaultMessage="Плановые и восстановительные ремонты газопоршневых и дизельных установок" />
                    </p>
                </div>
                <div className="services__advantages-item">
                    <img className="services__advantages-item-image" src={supplies} />
                    <p className="services__advantages-item-text">
                        <FormattedMessage id="servicesListItem5" defaultMessage="Поставка запасных частей и расходных материалов" />
                    </p>
                </div>
                <div className="services__advantages-item">
                    <img className="services__advantages-item-image" src={majorRepairs} />
                    <p className="services__advantages-item-text">
                        <FormattedMessage id="servicesListItem6" defaultMessage="Капитальный ремонт газопоршневых и дизельных установок" />
                    </p>
                </div>
                <div className="services__advantages-item">
                    <img className="services__advantages-item-image" src={training} />
                    <p className="services__advantages-item-text">
                        <FormattedMessage id="servicesListItem7" defaultMessage="Обучение эксплуатирующего персонала Заказчика" />
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Services;
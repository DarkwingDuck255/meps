import './Services.css';
import warranty from '../../images/warranty.svg';
import techSupport from '../../images/tech-support.svg';
import monitoring from '../../images/monitoring.svg';
import planRepair from '../../images/plan-repair.svg';
import supplies from '../../images/supplies.svg';
import majorRepairs from '../../images/major-repairs.svg';
import training from '../../images/training.svg';

function Services() {
    return (
        <section className="services">
            <h2 className="services__header">
                Услуги
            </h2>
            <p className="services__text">
                Благодаря наличию партнерских отношений с производителями оборудования «MEPS» обеспечивает высокий уровень сервисного и эксплуатационного обслуживания. Важным преимуществом «MEPS» является использование оригинальных запасных частей и расходных материалов.
            </p>
            <div className="servces__advantages">
                <div className="services__advantages-item">
                    <img className="services__advantages-item-image" src={warranty} />
                    <p className="services__advantages-item-text">Гарантийное обслуживание и поддержка</p>
                </div>
                <div className="services__advantages-item">
                    <img className="services__advantages-item-image" src={techSupport} />
                    <p className="services__advantages-item-text">Техническое обслуживание газопоршневых и дизельных установок</p>
                </div>
                <div className="services__advantages-item">
                    <img className="services__advantages-item-image" src={monitoring} />
                    <p className="services__advantages-item-text">Мониторинг и техническая диагностика оборудования</p>
                </div>
                <div className="services__advantages-item">
                    <img className="services__advantages-item-image" src={planRepair} />
                    <p className="services__advantages-item-text">Плановые и восстановительные ремонты газопоршневых и дизельных установок</p>
                </div>
                <div className="services__advantages-item">
                    <img className="services__advantages-item-image" src={supplies} />
                    <p className="services__advantages-item-text">Поставка запасных частей и расходных материалов</p>
                </div>
                <div className="services__advantages-item">
                    <img className="services__advantages-item-image" src={majorRepairs} />
                    <p className="services__advantages-item-text">Капитальный ремонт газопоршневых и дизельных установок</p>
                </div>
                <div className="services__advantages-item">
                    <img className="services__advantages-item-image" src={training} />
                    <p className="services__advantages-item-text">Обучение эксплуатирующего персонала Заказчика</p>
                </div>
            </div>
        </section>
    );
}

export default Services;
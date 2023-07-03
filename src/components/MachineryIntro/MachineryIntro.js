import './MachineryIntro.css';
import './MachineryIntro-tablet.css';
import { FormattedMessage } from 'react-intl';

export default function MachineryIntro() {
    return (
        <section className="machinery-intro">
            <div className='machinery-intro__container'>
                <div className='machinery-intro__header-wrapper'>
                    <h2 className='machinery-intro__header'>
                        <FormattedMessage id="machineryHeader" defaultMessage="Модульные электростанции" />
                    </h2>
                </div>
                <p className='machinery-intro__description'>
                    <FormattedMessage id="machineryIntro" defaultMessage="«MEPS» предлагает гибкие проектные решения, направленные на удовлетворение нужд заказчика. Модули энергоустановок могут быть использованы в различных климатических условиях.
                    Модульная компоновка энергетического оборудования позволяет минимизировать объем строительно-монтажных работ и существенно сократить сроки и стоимость сооружения объектов." />
                </p>
            </div>

            <h2 className='machinery-intro__subtitle'>

                <FormattedMessage id="machineryHeaderSubtitle" defaultMessage="Преимущества оборудования" />
            </h2>
        </section>
    )
}
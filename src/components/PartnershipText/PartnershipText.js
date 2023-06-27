import './PartnershipText.css';
import './PartnershipText-tablet.css';
import partnershipHeaderImg from '../../images/partnership-header-img.png';
import { FormattedMessage } from 'react-intl';

function PartnershipText() {
    return (
        <section className="partnership-section">
            <div className="partnership-section__header-wrapper">
                <div className='partnership-section__header-image-block'>
                    <img className="partnership-section__header-image" src={partnershipHeaderImg} />
                </div>

                <div className="partnership-section__header-blue-rectangle">
                    <div className='partnership-section__header-blue-rectangle-text-wrap'>
                        <h2 className="partnership-section__header">
                            <FormattedMessage id="aboutusPartnershipHeader" defaultMessage="Партнерство с Mitsubishi" />
                        </h2>
                        <p className="partnership-section__header-intro">
                            <FormattedMessage id="aboutusPartnershipText" defaultMessage="«MIDDLE EAST POWER SOLUTIONS» является официальным партнером и сервисным представителем компании Mitsubishi Turbocharger and Engine Europe b.V. в Узбекистане и странах СНГ." />

                        </p>
                    </div>

                </div>
            </div>

            <div className='partnership-section__article'>
                <h3 className='partnership-section__article-header'>
                    <FormattedMessage id="partnershipSubHeader" defaultMessage="Поставщик газопоршневых и дизельных двигателей" />
                </h3>
                <p className='partnership-section__article-text'>
                    <FormattedMessage id="partnershipText1" defaultMessage="Благодаря партнерским отношениям с компанией Mitsubishi Turbocharger and Engine Europe b.V. мы можем обеспечить высокий уровень сервисного и эксплуатационного обслуживания." />
                </p>

                <p className='partnership-section__article-text'>
                    <FormattedMessage id="partnershipText2" defaultMessage="Наличие пополняемого склада запасных частей на территории Узбекистана позволит существенно сократить сроки ремонта
                    и технического обслуживания." />
                </p>

                <p className='partnership-section__article-text'>
                    <FormattedMessage id="partnershipText3" defaultMessage="Оборудование Mitsubishi создано для работы даже в самых тяжелых условиях и известно своей эффективностью и надежностью. Mitsubishi Heavy Industries уделяет серьезное внимание развитию и улучшению своих двигателей. Дизельные и газовые генераторные установки Mitsubishi обеспечивают высокую мощность и надежность и оснащены современными системами управления." />
                </p>

                <p className='partnership-section__article-text'>
                    <FormattedMessage id="partnershipText4" defaultMessage="Для генераторных установок Mitsubishi используются дизельные
                    или газовые двигатели и турбокомпрессоры Mitsubishi, которые сконструированы и изготовлены в соответствии с высочайшими стандартами качества, что обеспечивает наилучшие производственные характеристики. Использование высокоэффективных генераторов позволяет повысить производительность и сократить расход топлива.
                    Mitsubishi постоянно уделяет внимание качеству продукции
                    и управлению производством,что делает их надежным партнером
                    для своих клиентов на протяжении многих лет." />
                </p>
            </div>

        </section>
    )
}

export default PartnershipText
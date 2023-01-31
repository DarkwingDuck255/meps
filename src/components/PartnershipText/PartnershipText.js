import './PartnershipText.css';
import partnershipHeaderImg from '../../images/partnership-header-img.png';
function PartnershipText() {
    return (
        <section className="partnership-section">
            <div className="partnership-section__header-wrapper">
                <img className="partnership-section__header-image" src={partnershipHeaderImg} />
                <div className="partnership-section__header-blue-rectangle">
                    <h2 className="partnership-section__header">
                        Партнерство с Mitsubishi
                    </h2>
                    <p className="partnership-section__header-intro">
                        «MIDDLE EAST POWER SOLUTIONS» является официальным дилером компании. Mitsubishi Turbocharger and Engine Europe b.V.
                    </p>
                </div>
            </div>

            <div className='partnership-section__article'>
                <h3 className='partnership-section__article-header'>
                    Поставщик газопоршневых и дизельных двигателей
                </h3>
                <p className='partnership-section__article-text'>

                    Благодаря партнерским отношениям с компанией Mitsubishi Turbocharger and Engine Europe b.V. мы можем обеспечить высокий уровень сервисного и эксплуатационного обслуживания.
                </p>

                <p className='partnership-section__article-text'>
                    Наличие пополняемого склада запасных частей на территории Узбекистана позволит существенно сократить сроки ремонта
                    и технического обслуживания.


                </p>

                <p className='partnership-section__article-text'>
                    Оборудование Mitsubishi создано для работы даже в самых тяжелых условиях и известно своей эффективностью и надежностью. Mitsubishi heavy industries уделяет серьезное внимание развитию и улучшению своих двигателей. Дизельные и газовые генераторные установки Mitsubishi обеспечивают высокую мощность и надежность и оснащены современными системами управления.


                </p>

                <p className='partnership-section__article-text'>
                    Для генераторных установок Mitsubishi используются дизельные
                    или газовые двигатели и турбокомпрессоры Mitsubishi, которые сконструированы и изготовлены в соответствии с высочайшими стандартами качества, что обеспечивает наилучшие производственные характеристики. Использование высокоэффективных генераторов позволяет повысить производительность и сократить расход топлива.
                    Mitsubishi постоянно уделяет внимание качеству продукции
                    и управлению производством,что делает их надежным партнером
                    для своих клиентов на протяжении многих лет.
                </p>
            </div>
        </section>
    )
}

export default PartnershipText
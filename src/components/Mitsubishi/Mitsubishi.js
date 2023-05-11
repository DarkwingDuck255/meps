import './Mitsubishi.css';
import graph from '../../images/mitsubishi-graph.png';
import nomenclature from '../../images/partnership-header-img.png';
import { FormattedMessage } from 'react-intl';

export default function Mitsubishi() {
    return (
        <section className="mitsubishi">
            <h2 className='mitsubishi__header'>
                <FormattedMessage id="machineryMitsubishiEqHeader" defaultMessage="Производственная линейка оборудования Mitsubishi" />

            </h2>
            <img className='mitsubishi__graph' src={graph} />

            <div className='mitsubishi__nomenclature'>
                <img className='mitsubishi__nomenclature-image' src={nomenclature} />
                <div className='mitsubishi__nomenclature-container'>

                    <h3 className='mitsubishi__nomenclature-header'>
                        <FormattedMessage id="MachineryNomenclatureTitle" defaultMessage="Номенклатура предлагаемого
                        оборудования" />
                        
                    </h3>
                    <ul className='mitsubishi__nomenclature-list'>
                        <li className='mitsubishi__nomenclature-list-item'>
                            <FormattedMessage id="MachineryNomenclatureText" defaultMessage=" Электрические станции (газопоршневые, дизельные, комбинированные)" />
                           
                        </li>
                        <li className='mitsubishi__nomenclature-list-item'>
                            <FormattedMessage id="MachineryNomenclatureText2" defaultMessage="Блочно-модульные котельные" />
                            
                        </li>
                        <li className='mitsubishi__nomenclature-list-item'>
                            <FormattedMessage id="MachineryNomenclatureText3" defaultMessage="Модульные компрессорные (газодожимные, воздушные)" />
                            
                        </li>
                        <li className='mitsubishi__nomenclature-list-item'>
                            <FormattedMessage id="MachineryNomenclatureText4" defaultMessage="Электротехнические блоки" />
                            
                        </li>
                        <li className='mitsubishi__nomenclature-list-item'>
                            <FormattedMessage id="MachineryNomenclatureText5" defaultMessage="Административные и вспомогательные модули" />
                            
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
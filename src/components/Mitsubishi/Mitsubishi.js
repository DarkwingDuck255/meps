import './Mitsubishi.css';
import graph from '../../images/mitsubishi-graph.png';
import nomenclature from '../../images/partnership-header-img.png';

export default function Mitsubishi() {
    return (
        <section className="mitsubishi">
            <h2 className='mitsubishi__header'>
                Производственная линейка оборудования Mitsubishi
            </h2>
            <img className='mitsubishi__graph' src={graph} />

            <div className='mitsubishi__nomenclature'>
                <img className='mitsubishi__nomenclature-image' src={nomenclature} />
                <div className='mitsubishi__nomenclature-container'>
                    <h3 className='mitsubishi__nomenclature-header'>
                        Номенклатура предлагаемого
                        оборудования
                    </h3>
                    <ul className='mitsubishi__nomenclature-list'>
                        <li className='mitsubishi__nomenclature-list-item'>
                            Электрические станции (газопоршневые, дизельные, комбинированные)
                        </li>
                        <li className='mitsubishi__nomenclature-list-item'>
                            Блочно-модульные котельные
                        </li>
                        <li className='mitsubishi__nomenclature-list-item'>
                            Модульные компрессорные (газодожимные, воздушные)
                        </li>
                        <li className='mitsubishi__nomenclature-list-item'>
                            Электротехнические блоки
                        </li>
                        <li className='mitsubishi__nomenclature-list-item'>
                            Административные и вспомогательные модули
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
import './Modules.css';
import admModule from '../../images/adm-module.png';
import kpp from '../../images/kpp.png';
import warehouse from '../../images/warehouse.png';
import thermal from '../../images/thermal-point.png';
import { FormattedMessage } from 'react-intl';

export default function Modules() {
    return (
        <section className="modules">
            <h2 className='modules__header'>
                <FormattedMessage id="machineryAdministrativeHeader" defaultMessage="Административные и вспомогательные модули" />

            </h2>
            <p className='modules__description'>
                <FormattedMessage id="machineryAdministrativeText" defaultMessage="Модульные решения позволяют быстро возводить сооружения различного размера и назначения. Заводом изготавливаются индивидуальные решения на базе цельносварных металлических контейнеров или каркасных конструкций с обшивкой сэндвич-панелями." />

            </p>

            <div className='catalogue__cards'>
                <div className='catalogue__card'>
                    <img className='catalogue__card-image' src={admModule} />
                    <h4 className='catalogue__card-header'>
                        <FormattedMessage id="machineryAdministrativeModTitle" defaultMessage="Административный модуль" />

                    </h4>
                    <p className='catalogue__card-description'>
                        <FormattedMessage id="machineryAdministrativeModText" defaultMessage="Размещение помещений постоянного пребывания персонала, мастерских, технических комнат отдыха, помещения охраны, уборных и прочих помещений требуемой категории и назначения." />
                        
                    </p>

                </div>
                <div className='catalogue__card'>
                    <img className='catalogue__card-image' src={kpp} />
                    <h4 className='catalogue__card-header'>
                        <FormattedMessage id="machineryCheckpoint" defaultMessage="Контрольно-пропускной пункт" />
                        
                    </h4>
                    <p className='catalogue__card-description'>
                        <FormattedMessage id="machineryCheckpointText" defaultMessage="Модули с наружной и внутренней отделкой, системой электроснабжения, вентиляции икондиционирования, водоснабжения, связи, мебелью и прочим требуемым оборудованием для размещения персонала охраны." />
                        
                    </p>

                </div>
                <div className='catalogue__card'>
                    <img className='catalogue__card-image' src={warehouse} />
                    <h4 className='catalogue__card-header'>
                        <FormattedMessage id="machineryDepots" defaultMessage="Склад ГСМ" />
                        
                    </h4>
                    <p className='catalogue__card-description'>
                    <FormattedMessage id="machineryDepotsText" defaultMessage="Предназначены для хранения ГСМ, имеющие полимерные маслостойкие напольные покрытия, средства механизации, системы освещения, отопления и вентиляции, требуемой степени огнестойкости." />
                        
                    </p>

                </div>
                <div className='catalogue__card'>
                    <img className='catalogue__card-image' src={thermal} />
                    <h4 className='catalogue__card-header'>
                    <FormattedMessage id="machineryHeatUnits" defaultMessage="Тепловой пункт" />
                        
                    </h4>
                    <p className='catalogue__card-description'>
                    <FormattedMessage id="machineryHeatUnitsText" defaultMessage="Предназначен для присоединения систем теплопотребления (отопления, вентиляции, ГВС и др.) к водяным тепловым сетям. Выполняет задачи коммерческого учёта воды и тепла, автоматического управления параметрами теплоносителя." />
                        
                    </p>

                </div>
            </div>

        </section>
    )
}
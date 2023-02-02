import './Modules.css';
import admModule from '../../images/adm-module.png';
import kpp from '../../images/kpp.png';
import warehouse from '../../images/warehouse.png';
import thermal from '../../images/thermal-point.png';

export default function Modules() {
    return (
        <section className="modules">
            <h2 className='modules__header'>
                Административные и вспомогательные модули
            </h2>
            <p className='modules__description'>
                Модульные решения позволяют быстро возводить сооружения различного размера и назначения. Заводом изготавливаются индивидуальные решения на базе цельносварных металлических контейнеров или каркасных конструкций с обшивкой сэндвич-панелями.
            </p>

            <div className='catalogue__cards'>
                <div className='catalogue__card'>
                    <img className='catalogue__card-image' src={admModule} />
                    <h4 className='catalogue__card-header'>
                        Ветродизельная гибридная энергетическая установка
                    </h4>
                    <p className='catalogue__card-description'>
                        Гибридные энергетические установки предназначены для электроснабжения потребителей за счет выработки электрической энергии от силы ветра, а при его отсутствии от дизельного, либо газового топлива.
                    </p>
                    
                </div>
                <div className='catalogue__card'>
                    <img className='catalogue__card-image' src={kpp} />
                    <h4 className='catalogue__card-header'>
                        Ветродизельная гибридная энергетическая установка
                    </h4>
                    <p className='catalogue__card-description'>
                        Гибридные энергетические установки предназначены для электроснабжения потребителей за счет выработки электрической энергии от силы ветра, а при его отсутствии от дизельного, либо газового топлива.
                    </p>
                    
                </div>
                <div className='catalogue__card'>
                    <img className='catalogue__card-image' src={warehouse} />
                    <h4 className='catalogue__card-header'>
                        Ветродизельная гибридная энергетическая установка
                    </h4>
                    <p className='catalogue__card-description'>
                        Гибридные энергетические установки предназначены для электроснабжения потребителей за счет выработки электрической энергии от силы ветра, а при его отсутствии от дизельного, либо газового топлива.
                    </p>
                    
                </div>
                <div className='catalogue__card'>
                    <img className='catalogue__card-image' src={thermal} />
                    <h4 className='catalogue__card-header'>
                        Ветродизельная гибридная энергетическая установка
                    </h4>
                    <p className='catalogue__card-description'>
                        Гибридные энергетические установки предназначены для электроснабжения потребителей за счет выработки электрической энергии от силы ветра, а при его отсутствии от дизельного, либо газового топлива.
                    </p>
                    
                </div>
            </div>

        </section>
    )
}
import './Feedback.css';

function Feedback() {


    const emailPattern = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}'

    return (
        <div className='feedback__wrap'>
            <section className="feedback">
                <div className='feedback__green-rectangle'>
                    <div className='feedback__green-rectangle-wrap'>
                        <h3 className='feedback__green-rectangle-header'>
                            Обратная связь
                        </h3>
                        <p className='feedback__green-rectangle-text'>
                            Мы всегда открыты для сотрудничества
                            и рады новым интересным проектам
                        </p>
                    </div>
                </div>
                <div className='feedback__form-container'>
                    <div className='feedback__form-decoration'>
                        <div className='feedback__form-decoration-second' />

                    </div>
                    <h3 className='feedback__form-header'>
                        Отправить нам сообщение
                    </h3>
                    <form className='feedback__form'>
                        <div className='feedback__form-name-tel-wrap'>
                            <div className='feedback__form-input-wrap name_mod'>
                                <label className='feedback__form-name-label' for='name'>
                                    Имя
                                </label>
                                <input className='feedback__form-name' id='name' type='name' minLength="2" maxLength="30" required name='name' autoComplete='false' />
                            </div>
                            <div className='feedback__form-input-wrap tel_mod'>
                                <label className='feedback__form-name-label' for='tel'>
                                    Телефон
                                </label>
                                <input className='feedback__form-tel' id='tel' type='tel' required />
                            </div>
                        </div>
                        <div className='feedback__form-input-wrap email_mod'>
                            <label className='feedback__form-name-label' for='email'>
                                E-mail
                            </label>
                            <input className='feedback__form-email' pattern={emailPattern} type='email' name='email' id='email' required />
                        </div>
                        <label className='feedback__form-company-label' for='company'>
                            Компания
                        </label>
                        <input className='feedback__form-comany' type='text' id='company' required />
                        <label className='feedback__form-message-label' for='message'>
                            Сообщение
                        </label>
                        <textarea className='feedback__form-message' type='text' id='message' name='message' maxLength='500' minLength='100' required />

                        <button className='feedback__form-submit' type='submit'>
                            Отправить сообщение
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Feedback;
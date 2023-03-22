import { useState } from 'react';
import './Feedback.css';
import * as Api from '../../utils/Api.js';
import { useForm } from "react-hook-form";

function Feedback() {


    const emailPattern = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
    const MAX_TEXT_LENGTH = 500;
    const [text, setText] = useState("");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [tel, setTel] = useState('');
    // const [err, setErr] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    function handleNameInput(evt) {
        setName(evt.target.value)
        // evt.target.validationMessage(setErr)
    }
    function handleEmailInput(evt) {
        setEmail(evt.target.value)
    }

    function handleCompanyInput(evt) {
        setCompany(evt.target.value)
    }

    function handleTelInput(evt) {
        setTel(evt.target.value)
    }


    function handleTextAreaChange(event) {
        const value = event.target.value;
        if (value.length <= MAX_TEXT_LENGTH) {
            setText(value);
        }
    }

    function onSubmitFeedback(data) {

        Api.sendFeedback(data)
            // .then(res => evt.target.reset())
            .catch(err => {
                console.log(err)
                // setIsErrMsg(true)
            })
    }

    function sendMsg(data) {

        onSubmitFeedback(data)
        // setName('')
    }

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
                    <form className='feedback__form' onSubmit={handleSubmit(sendMsg)}>
                        <div className='feedback__form-name-tel-wrap'>
                            <div className='feedback__form-input-wrap name_mod'>
                                <label className='feedback__form-name-label' htmlFor='name' >
                                    Имя
                                </label>
                                <input className='feedback__form-name' id='name' type='name' required name='name' autoComplete='off'
                                    {...register("name", { validate: (value) => value.length > 2 && value.length < 30 })} />
                                {errors.name && <span>мудак!</span>}
                            </div>
                            <div className='feedback__form-input-wrap tel_mod'>
                                <label className='feedback__form-name-label' htmlFor='tel'>
                                    Телефон
                                </label>
                                <input className='feedback__form-tel' id='tel' type='number' name='tel' required onChange={handleTelInput}
                                    {...register("tel", { validate: (value) => value.length <= 20 })} />
                                {errors.tel ? <span>мудак, телефон!</span> : ''}
                            </div>
                        </div>
                        <div className='feedback__form-input-wrap other-input_mod'>
                            <label className='feedback__form-name-label' htmlFor='email'>
                                E-mail
                            </label>
                            <input className='feedback__form-email' pattern={emailPattern} type='email' name='email' id='email' required onChange={handleEmailInput}
                                {...register('email', { validate: (value) => value.pattern })} />
                            {errors.email ? <span>мудак, email!</span> : ''}
                        </div>
                        <div className='feedback__form-input-wrap other-input_mod'>
                            <label className='feedback__form-name-label' htmlFor='company'>
                                Компания
                            </label>
                            <input className='feedback__form-comany' name='company' type='text' id='company' required onChange={handleCompanyInput}
                                {...register('company')} />
                            {errors.company ? <span>мудак, company!</span> : ''}
                        </div>
                        <div className='feedback__form-input-wrap textarea_mod'>
                            <label className='feedback__form-name-label' htmlFor='message'>
                                Сообщение
                            </label>
                            <span className='feedback__form-message-letter-count'>{text.length}/{MAX_TEXT_LENGTH}</span>
                            <textarea className='feedback__form-message' type='text' id='message' name='message' maxLength='500' minLength='100' required onChange={handleTextAreaChange} value={text}
                                // {...register('message')}
                                />
                            {/* {errors.message && <span>мудак!</span>} */}
                        </div>


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
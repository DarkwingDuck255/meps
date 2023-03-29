import { useEffect, useRef, useState } from 'react';
import './Feedback.css';
import ReCAPTCHA from "react-google-recaptcha";
import * as Api from '../../utils/Api.js';
import { useForm } from "react-hook-form";
import useFormWithValidation from '../../utils/formValidate'
import meme from '../../images/meme.jpg'

function Feedback() {


    const emailPattern = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
    const MAX_TEXT_LENGTH = 500;
    const [text, setText] = useState("");
    const form = useRef();
    const [captcha, setCaptcha] = useState(false)

    const { values, isValid, handleChange, errors } = useFormWithValidation({
        name: '',
        tel: '',
        email: '',
        company: '',
        message: '',
    })

    useEffect(() => {

    }, [values.name || values.tel])

    function handleTextAreaChange(event) {
        const value = event.target.value;
        if (value.length <= MAX_TEXT_LENGTH) {
            setText(value);
        }
    }

    function onSubmitFeedback(data) {
        console.log({ name: data.name.value, tel: data.tel.value, email: data.email.value, company: data.company.value, text: data.message.value })
        Api.sendFeedback({ name: data.name.value, tel: data.tel.value, email: data.email.value, company: data.company.value, text: data.message.value })
            .then(form.current.reset(), setText(''))

            .catch(err => {
                console.log(err)
                // setIsErrMsg(true)
            })
    }

    function sendMsg(data) {
        data.preventDefault()
        const { name, tel, email, company, message } = form.current
        console.log(name.value, company.value)
        onSubmitFeedback({ name, tel, email, company, message })
        console.log(form)


        // setName('')
    }

    function handleRecaptchaChange(value) {
        console.log("Captcha value:", value);
        setCaptcha(true)
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
                    <form className='feedback__form' name='feedbackForm' onSubmit={sendMsg} ref={form} id='feedbackForm' noValidate>
                        <div className='feedback__form-name-tel-wrap'>
                            <div className='feedback__form-input-wrap name_mod'>
                                <label className='feedback__form-name-label' htmlFor='name' >
                                    Имя
                                </label>
                                <input className={`feedback__form-name ${errors.name ? 'invalid' : ''}`} id='name' type='name' required name='name' autoComplete='off' minLength='3' maxLength='40'
                                    onChange={handleChange} values={values.name}
                                // {...register("name", { validate: (value) => value.length > 2 && value.length < 30 })} 
                                />
                                {errors.name && <span className='invalid-text'>{errors.name}</span>}
                                {/* <span>{values.name.length < 3 ? 'Введи имя, скотина!' : ''}</span> */}
                            </div>
                            <div className='feedback__form-input-wrap tel_mod'>
                                <label className='feedback__form-name-label' htmlFor='tel'>
                                    Телефон
                                </label>
                                <input className={`feedback__form-tel ${errors.tel ? 'invalid' : ''}`} id='tel' type='tel' name='tel' required onChange={handleChange} values={values.tel} minLength='6' maxLength='20'
                                // {...register("tel", { validate: (value) => value.length <= 20 })} 
                                />
                                {/* {errors.tel ? <span className='invalid-text'>мудак, телефон!</span> : ''} */}
                                <span className='invalid-text'>{errors.tel ? 'Введите пожалуста номер телефона.' : ''}</span>

                                {/* пробный вариант для английского */}
                                {/* <span className='invalid-text'>{values.tel.length < 6 && en ? 'Enter your phone number' : ''}</span> */}

                                <span className='invalid-text'>{values.tel.length > 20 ? 'Превышено максимальное количество цифр' : ''}</span>
                            </div>
                        </div>
                        <div className='feedback__form-input-wrap other-input_mod'>
                            <label className='feedback__form-name-label' htmlFor='email'>
                                E-mail
                            </label>
                            <input className={`feedback__form-email ${errors.email ? 'invalid' : ''}`} pattern={emailPattern} type='email' name='email' id='email' required onChange={handleChange} values={values.email}
                            // {handleEmailInput}
                            // {...register('email', { validate: (value) => value.pattern })} 
                            />
                            {errors.email ? <span className='invalid-text'>мудак, email!</span> : ''}
                            {/* <span>{errors.email ? 'Введите пожалуйста ваш email' : ''}</span> */}

                        </div>
                        <div className='feedback__form-input-wrap other-input_mod'>
                            <label className='feedback__form-name-label' htmlFor='company'>
                                Компания
                            </label>
                            <input className={`feedback__form-comany ${errors.company ? 'invalid' : ''}`} name='company' type='text' id='company' required onChange={handleChange} values={values.company} minLength='6'
                            // onChange={handleCompanyInput}
                            // {...register('company')} 
                            />
                            {/* {errors.company ? <span>мудак, company!</span> : ''} */}
                            <span className='invalid-text'>{errors.company ? 'Введите пожалуйста название вашей компании' : ''}</span>

                        </div>
                        <div className='feedback__form-input-wrap textarea_mod'>
                            <label className='feedback__form-name-label' htmlFor='message'>
                                Сообщение
                            </label>
                            <span className='feedback__form-message-letter-count'>{text.length}/{MAX_TEXT_LENGTH}</span>
                            <textarea className='feedback__form-message' type='text' id='message' name='message' maxLength='500' minLength='100' required onChange={handleTextAreaChange} values={values.message}
                                value={text}
                            // onChange={handleTextAreaChange} 
                            // {...register('message')}
                            />
                            {/* {errors.message && <span>мудак!</span>} */}
                            <span>{text.length < 100 ? 'Минимальная длина сообщения - 100 символов' : ''}</span>
                            {/* <span>{text.length >= 100 && text.length <= 500 ? 'Все ОК' : ''}</span> */}
                        </div>
                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={handleRecaptchaChange}
                        />

                        <button className='feedback__form-submit' type='submit' disabled={!captcha}>
                            Отправить сообщение
                        </button>
                    </form>
                </div>
                {values.company === 'мемный парень с пальцем у виска' ? <img className='meme' src={meme} /> : ''}
            </section>
        </div>
    );
}

export default Feedback;
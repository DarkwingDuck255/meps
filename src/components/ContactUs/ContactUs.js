import './ContactUs.css';
import '../Feedback/Feedback.css';
import { useEffect, useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import * as Api from '../../utils/Api.js';
import { useForm } from "react-hook-form";
import useFormWithValidation from '../../utils/formValidate'
import meme from '../../images/meme.jpg'

function ContactUs(props) {
    const [feedback, setFeedback] = useState(false)
    const emailPattern = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
    const MAX_TEXT_LENGTH = 500;
    const [text, setText] = useState("");
    const form = useRef();
    const [captcha, setCaptcha] = useState(false);
    const [success, setSuccess] = useState();

    const { values, isValid, handleChange, errors } = useFormWithValidation({
        name: '',
        tel: '',
        email: '',
        company: '',
        message: '',
    })

    useEffect(() => {
        // if (ReCAPTCHA.stoken === null) {
        setCaptcha(false)
        console.log(ReCAPTCHA.stoken)
        // }
    }, [ReCAPTCHA.stoken])

    function openFeedback() {
        setFeedback(true)
    }

    function closeFeedback() {
        setFeedback(false)
    }

    function closeByClickOnOverlay(evt) {
        if (evt.target.classList.contains('feedback__popup-background_visible')) {
            closeFeedback()
        }
    }

    function handleTextAreaChange(event) {
        const value = event.target.value;
        if (value.length <= MAX_TEXT_LENGTH) {
            setText(value);
        }
    }

    function onSubmitFeedback(data) {
        console.log({ name: data.name.value, tel: data.tel.value, email: data.email.value, company: data.company.value, text: data.message.value })
        Api.sendFeedback({ name: data.name.value, tel: data.tel.value, email: data.email.value, company: data.company.value, text: data.message.value })
            .then((res) => {
                form.current.reset()
                setText('')
                console.log(res)
                if (res = 200) {
                    console.log(res)
                    setSuccess(true)
                }
            })

            .catch(err => {
                console.log(err)
                setSuccess(false)
                // setIsErrMsg(true)
            })
    }

    function sendMsg(data) {
        data.preventDefault()
        const { name, tel, email, company, message } = form.current
        // console.log(name.value, company.value)
        onSubmitFeedback({ name, tel, email, company, message })
        console.log(form)
        sendMessageToTelegram()
    }

    function handleRecaptchaChange(value) {
        console.log("Captcha value:", value);
        setCaptcha(true)
        if (value === null) {
            setCaptcha(false)
        }
    }

    // Функция отправки сообщения на бэк для последующей отправки в телеграм

    function sendMessageToTelegram() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const tel = document.getElementById("tel").value
        const company = document.getElementById("company").value
        const message = document.getElementById("message").value;
        // const xhr = new XMLHttpRequest();
        // xhr.open("POST", "/", true);
        // xhr.setRequestHeader('Content-Type', 'application/json');
        // xhr.send(JSON.stringify({ name: name, email: email, message: message}));

        return fetch(`http://localhost:3001/send-msg`, {
            method: 'POST',
            headers: {
                // 'Accept': "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: name, email: email, message: message, tel: tel, company: company }),
        })
            .then((res) => {
                return console.log(res)
            })
    }

    return (

        <>
            <div className='contact-us' onClick={openFeedback}>
                <p className='contact-us__text'>
                    Связаться с нами
                </p>
            </div>

            <div className={`feedback__popup-background ${feedback ? 'feedback__popup-background_visible' : ''}`} onMouseDown={closeByClickOnOverlay}>
                <div className={`feedback__form-container ${feedback ? 'feedback__form-container_visible' : 'feedback__form-container_hidden'}`}>
                    <button className='feedback__form-close-btn' onClick={closeFeedback} />
                    <div className='feedback__form-decoration'>
                        <div className='feedback__form-decoration-second' />

                    </div>
                    <h3 className='feedback__form-header'>
                        Отправить нам сообщение
                    </h3>
                    <form className='feedback__form feedback__form_popup-width' name='feedbackForm' onSubmit={sendMsg} ref={form} id='feedbackForm'>
                        <div className='feedback__form-name-tel-wrap'>
                            <div className='feedback__form-input-wrap name_mod'>
                                <label className='feedback__form-name-label' htmlFor='name' >
                                    Имя
                                </label>
                                <input className={`feedback__form-name ${errors.name ? 'invalid' : ''}`} id='name' type='name' required name='name' autoComplete='off' minLength='3' maxLength='40'
                                    onChange={handleChange} values={values.name}
                                />
                                {errors.name && <span className='invalid-text'>{errors.name}</span>}
                            </div>
                            <div className='feedback__form-input-wrap tel_mod'>
                                <label className='feedback__form-name-label' htmlFor='tel'>
                                    Телефон
                                </label>
                                <input className={`feedback__form-tel ${errors.tel ? 'invalid' : ''}`} id='tel' type='tel' name='tel' required onChange={handleChange} values={values.tel} minLength='6' maxLength='20'
                                />
                                <span className='invalid-text'>{errors.tel ? 'Введите номер телефона.' : ''}</span>

                                <span className='invalid-text'>{values.tel.length > 20 ? 'Превышено максимальное количество цифр.' : ''}</span>
                            </div>
                        </div>
                        <div className='feedback__form-input-wrap other-input_mod'>
                            <label className='feedback__form-name-label' htmlFor='email'>
                                E-mail
                            </label>
                            <input className={`feedback__form-email ${errors.email ? 'invalid' : ''}`} pattern={emailPattern} type='email' name='email' id='email' required onChange={handleChange} values={values.email}
                            />
                            {errors.email ? <span className='invalid-text'>Введите корректный email.</span> : ''}

                        </div>
                        <div className='feedback__form-input-wrap other-input_mod'>
                            <label className='feedback__form-name-label' htmlFor='company'>
                                Компания
                            </label>
                            <input className={`feedback__form-comany ${errors.company ? 'invalid' : ''}`} name='company' type='text' id='company' onChange={handleChange} values={values.company} minLength='6'
                            />
                            <span className='invalid-text'>{errors.company ? 'Введите название вашей компании.' : ''}</span>

                        </div>
                        <div className='feedback__form-input-wrap textarea_mod'>
                            <label className='feedback__form-name-label' htmlFor='message'>
                                Сообщение
                            </label>
                            <span className='feedback__form-message-letter-count'>{text.length}/{MAX_TEXT_LENGTH}</span>
                            <textarea className='feedback__form-message' type='text' id='message' name='message' maxLength='500' onChange={handleTextAreaChange} values={values.message}
                                value={text}
                            />
                        </div>
                        <ReCAPTCHA
                            // sitekey="6LfrXjkUAAAAAK0aMCuIZ3uN6t18S8VIZuYkjA8Y"
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={handleRecaptchaChange}
                        />

                        <button className={`feedback__form-submit ${captcha === true ? '' : 'feedback__form-submit_disabled'}`} type='submit' disabled={!captcha}>
                            Отправить сообщение
                        </button>
                        {success ? <span className='feedback__form-success-msg'>Сообщение успешно отправлено!</span> : ''}
                        {success === false ? <span className='feedback__form-fail-msg'>Произошла ошибка, пожалуйста повторите попытку позже.</span> : ''}
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactUs
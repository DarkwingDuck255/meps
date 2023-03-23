import { useRef, useState } from 'react';
import './Feedback.css';
import * as Api from '../../utils/Api.js';
import { useForm } from "react-hook-form";
import useFormWithValidation from '../../utils/formValidate'

function Feedback() {


    const emailPattern = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
    const MAX_TEXT_LENGTH = 500;
    const [text, setText] = useState("");
    const form = useRef();
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [company, setCompany] = useState('');
    // const [tel, setTel] = useState('');
    // const [err, setErr] = useState('');

    const { values, isValid, handleChange, errors } = useFormWithValidation({
        name: '',
        tel: '',
        email: '',
        company: '',
        message: '',
    })

    // const {
    //     register,
    //     handleSubmit,
    //     reset,
    //     formState: { errors }
    // } = useForm();

    // function handleNameInput(evt) {
    //     setName(evt.target.value)
    //     // evt.target.validationMessage(setErr)
    // }
    // function handleEmailInput(evt) {
    //     setEmail(evt.target.value)
    // }

    // function handleCompanyInput(evt) {
    //     setCompany(evt.target.value)
    // }

    // function handleTelInput(evt) {
    //     setTel(evt.target.value)
    // }


    function handleTextAreaChange(event) {
        const value = event.target.value;
        if (value.length <= MAX_TEXT_LENGTH) {
            setText(value);
        }
    }

    function onSubmitFeedback(data) {
        console.log({ name: data.name.value, tel: data.tel.value, email: data.email.value, company: data.company.value, text: data.message.value})
        Api.sendFeedback({ name: data.name.value, tel: data.tel.value, email: data.email.value, company: data.company.value, text: data.message.value})
            // {email: values.email, name: values.name, tel: values.tel, company: values.company, message: values.message}
            // .then(res => evt.target.reset())
            .catch(err => {
                console.log(err)
                // setIsErrMsg(true)
            })
    }

    function sendMsg(data) {
        data.preventDefault()
        const {name, tel, email, company, message} = form.current
        console.log(name.value, company.value)
        onSubmitFeedback({ name, tel, email, company, message})

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
                    <form className='feedback__form' onSubmit={sendMsg} ref={form} id='feedbackForm'>
                        <div className='feedback__form-name-tel-wrap'>
                            <div className='feedback__form-input-wrap name_mod'>
                                <label className='feedback__form-name-label' htmlFor='name' >
                                    Имя
                                </label>
                                <input className='feedback__form-name' id='name' type='name' required name='name' autoComplete='off' minLength='3' maxLength='40'
                                    onChange={handleChange} values={values.name}
                                // {...register("name", { validate: (value) => value.length > 2 && value.length < 30 })} 
                                />
                                {/* {errors.name && <span>мудак!</span>} */}
                                <span>{errors.name ? 'тобi пизда, имя' : ''}</span>
                            </div>
                            <div className='feedback__form-input-wrap tel_mod'>
                                <label className='feedback__form-name-label' htmlFor='tel'>
                                    Телефон
                                </label>
                                <input className='feedback__form-tel' id='tel' type='number' name='tel' required onChange={handleChange} values={values.tel}
                                // {...register("tel", { validate: (value) => value.length <= 20 })} 
                                />
                                {/* {errors.tel ? <span>мудак, телефон!</span> : ''} */}
                                <span>{errors.tel ? 'тобi пизда, телефон' : ''}</span>
                            </div>
                        </div>
                        <div className='feedback__form-input-wrap other-input_mod'>
                            <label className='feedback__form-name-label' htmlFor='email'>
                                E-mail
                            </label>
                            <input className='feedback__form-email' pattern={emailPattern} type='email' name='email' id='email' required onChange=
                                {handleChange} values={values.email}
                            // {handleEmailInput}
                            // {...register('email', { validate: (value) => value.pattern })} 
                            />
                            {/* {errors.email ? <span>мудак, email!</span> : ''} */}
                            <span>{errors.email ? 'тобi пизда, почта' : ''}</span>
                        </div>
                        <div className='feedback__form-input-wrap other-input_mod'>
                            <label className='feedback__form-name-label' htmlFor='company'>
                                Компания
                            </label>
                            <input className='feedback__form-comany' name='company' type='text' id='company' required onChange={handleChange} values={values.company}
                            // onChange={handleCompanyInput}
                            // {...register('company')} 
                            />
                            {/* {errors.company ? <span>мудак, company!</span> : ''} */}
                            <span>{errors.company ? 'тобi пизда, компания' : ''}</span>
                        </div>
                        <div className='feedback__form-input-wrap textarea_mod'>
                            <label className='feedback__form-name-label' htmlFor='message'>
                                Сообщение
                            </label>
                            <span className='feedback__form-message-letter-count'>{text.length}/{MAX_TEXT_LENGTH}</span>
                            <textarea className='feedback__form-message' type='text' id='message' name='message' maxLength='500' minLength='100' required value={text} onChange={handleTextAreaChange} values={values.message}
                            // onChange={handleTextAreaChange} 
                            // {...register('message')}
                            />
                            {/* {errors.message && <span>мудак!</span>} */}
                            <span>{errors.message}</span>

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
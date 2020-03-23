import _ from 'lodash';
import Loader from 'react-loader-spinner'
import { Toast, ToastBody } from 'reactstrap';
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import React, { useContext, useState, useEffect } from 'react';

import { sendEmail } from '../../utils/email';
import SECTIONS from '../../utils/types/section-types';
import { ThemeContext } from '../../context/ThemeContext';
import SectionTemplate from '../Common/SectionTemplate/SectionTemplate';

import './Contact.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const EMAIL_REGEX =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [toastMessage, setToastMessage] = useState('');
    const [isMessageBeingSent, setIsMessageBeingSent] = useState(false);
    const [isToastOpen, setIsToastOpen] = useState(false);
    
    const { activeLang, content } = useContext(ThemeContext);
    const sectionContent = content[activeLang].sections[SECTIONS.CONTACT];
    
    useEffect(() => {
        if (isToastOpen) {
            const interval = setInterval( () => setIsToastOpen(false), 3000);
            return () => clearInterval(interval);
        }
    });

    const clearForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    };

    const onSubmit = () => {
        setIsMessageBeingSent(true);
        sendEmail({ name, email, message })
            .then(response => {  // TODO: move to utils and split this componentinto two.
                const isSuccess = response === 200; 
                const submitMessage = isSuccess 
                    ? sectionContent.form.succes 
                    : sectionContent.form.error;
                setToastMessage(submitMessage);
                setIsToastOpen(true);
                isSuccess && clearForm();
                setIsMessageBeingSent(false);
            });
    };

    const validateEmail = () => EMAIL_REGEX.test(email);

    const getFieldsWrapperCommonClassNames = field => `contact__field mb-3 d-flex justify-content-start align-items-start ${!_.isEmpty(field) ? 'contact--populated' : ''}` 

    const getFilesClassNames = field => `contact__inputs contact__inputs-${field} w-100 py-3 border-0 m-0`;
    
    const areAllFieldsEmpty = _.isEmpty(name) && _.isEmpty(email) && _.isEmpty(message);
    const isSendEnabled = !areAllFieldsEmpty && validateEmail();

    return (
        <SectionTemplate
            sectionName={ SECTIONS.CONTACT }
            sectionInnerClass="col-12">
            <h2 className="portfolio-secondary-heading">{ `${sectionContent.heading}.` }</h2>
            <form className="contact__form position-relative">
                <div className={ `${getFieldsWrapperCommonClassNames(name)}` }>
                    <input 
                        id="name"
                        type="text" 
                        value={ name }
                        placeholder={ sectionContent.form.name.placeholder }
                        className={ getFilesClassNames('name') }
                        onChange={ event => setName(event.target.value) } />
                    <label className="position-absolute p-3 font-weight-light" htmlFor="name">
                        {
                            !_.isEmpty(name) && name.length >= 3 
                                ? <MdThumbUp className="contact__icon" size="18" color="#ffffff" /> 
                                : sectionContent.form.name.title
                        } 
                    </label>
                </div>
                <div className={ `${getFieldsWrapperCommonClassNames(email)}` }>
                    <input 
                        id="email"
                        type="text"  
                        value={ email }
                        placeholder={ sectionContent.form.email.placeholder }
                        className={ getFilesClassNames('email') }
                        onChange={ event => setEmail(event.target.value) } />
                    <label className="position-absolute p-3 font-weight-light" htmlFor="email">
                    {
                        !_.isEmpty(email) && email.length >= 3
                            ?   (
                                    validateEmail() 
                                    ? <MdThumbUp className="contact__icon" size="18" color="#ffffff" />
                                    : <MdThumbDown className="contact__icon" size="18" color="#ffffff" />
                                )
                            : sectionContent.form.email.title
                    }
                    </label>
                 </div>
                <div className={ `${getFieldsWrapperCommonClassNames(message)}` }>
                    <textarea 
                        rows="1" 
                        id="message" 
                        value={ message }
                        placeholder={ sectionContent.form.message.placeholder }
                        className={ `${getFilesClassNames('message')}` }
                        onChange={ event => setMessage(event.target.value) } />
                    <label className="position-absolute p-3 font-weight-light" htmlFor="message">
                    {
                        !_.isEmpty(message) && message.length >= 3 
                            ? <MdThumbUp className="contact__icon" size="18" color="#ffffff" /> 
                            : sectionContent.form.message.title
                    }
                    </label>
                    
                </div>
                <div className="contact__form-btn-container d-flex justify-content-center justify-content-md-start mt-3 mt-md-5 py-3">
                    <button 
                        type="button" 
                        disabled={ !isSendEnabled }
                        onClick={ onSubmit }
                        className="contact__form-btn border-0 text-white py-3 px-5 text-uppercase">
                        { sectionContent.form.submit }
                    </button>
                    <button 
                        type="button" 
                        onClick={ () => clearForm() }
                        disabled={ areAllFieldsEmpty }
                        className="contact__form-btn contact__clear-btn border-0 text-white py-3 px-5 text-uppercase">
                        { sectionContent.form.clear }
                    </button>
                </div>
                {
                    isMessageBeingSent && (
                        <Loader
                            width={ 30 }    
                            height={ 30 }
                            type="Triangle"
                            color="#000000"
                            className="contact__loader position-fixed" />
                    )
                }
            </form>
            <Toast
                className="contact__toast bg-dark text-white py-3 position-fixed" 
                isOpen={ isToastOpen }>
                <ToastBody>
                    { toastMessage }
                </ToastBody>
            </Toast>
        </SectionTemplate>
    );
};

export default Contact;

import _ from 'lodash';
import React, { useContext, useState } from 'react';
import { MdThumbUp, MdThumbDown } from "react-icons/md";

import SECTIONS from '../../utils/types/section-types';
import { ThemeContext } from '../../context/ThemeContext';
import SectionTemplate from '../Common/SectionTemplate/SectionTemplate'

import './Contact.scss';

const EMAIL_REGEX =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { activeLang, content } = useContext(ThemeContext);
    const sectionContent = content[activeLang].sections[SECTIONS.CONTACT];
    
    const clearForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    }
    const validateEmail = (email) => EMAIL_REGEX.test(email);

    const getFieldsWrapperCommonClassNames = field => `contact__field  mb-3 d-flex justify-content-start align-items-start ${!_.isEmpty(field) ? 'contact--focused' : ''}` 

    const getFilesClassNames = field => `contact__inputs contact__inputs-${field} w-100 py-3 border-0 m-0`;
    console.log(  !_.isEmpty(name))
    return (
        <SectionTemplate
            sectionName={ SECTIONS.CONTACT }
            sectionInnerClass="col-12">
            <h2 className="contact__heading">{ `${sectionContent.heading}.` }</h2>
            <form className="contact__form mt-5 position-relative">
                <div className={ `${getFieldsWrapperCommonClassNames(name)}` }>
                    <input 
                        id="name"
                        type="text" 
                        value={ name }
                        placeholder="Who Are You?"
                        className={ getFilesClassNames('name') }
                        onChange={ event => setName(event.target.value) } />
                    <label className="position-absolute p-3" htmlFor="name">
                        {
                            !_.isEmpty(name) && name.length >= 3 
                                ? <MdThumbUp className="contact__icon" size="18" color="#ffffff" /> 
                                : 'Name'
                        } 
                    </label>
                </div>
                <div className={ `${getFieldsWrapperCommonClassNames(email)}` }>
                    <input 
                        id="email"
                        type="text"  
                        value={ email }
                        placeholder="name@email.com"
                        onChange={ event => setEmail(event.target.value) }
                        className={ getFilesClassNames('email') } />
                    <label className="position-absolute p-3" htmlFor="email">
                    {
                        !_.isEmpty(email) && email.length >= 3
                            ?   (
                                    validateEmail(email) 
                                    ? <MdThumbUp className="contact__icon" size="18" color="#ffffff" />
                                    : <MdThumbDown className="contact__icon" size="18" color="#ffffff" />
                                )
                            : 'Email'
                    }
                    </label>
                 </div>
                 <div className={ `${getFieldsWrapperCommonClassNames(message)}` }>
                    <textarea 
                        rows="3" 
                        id="message" 
                        value={ message }
                        placeholder="Your message goes here..."
                        className={ getFilesClassNames('message') }
                        onChange={ event => setMessage(event.target.value) } />
                    <label className="position-absolute p-3" htmlFor="message">
                    {
                        !_.isEmpty(message) && message.length >= 3 
                            ? <MdThumbUp className="contact__icon" size="18" color="#ffffff" /> 
                            : 'Message'
                    }
                    </label>
                    
                </div>
                <button type="button" className="contact__form-btn border-0 text-white">Send</button>
                {
                    <button 
                        type="button" 
                        className="contact__form-btn contact__clear-btn border-0 text-white"
                        disabled={ (_.isEmpty(name) && _.isEmpty(email) && _.isEmpty(message))}
                        onClick={ () => clearForm() }>
                        Clear
                    </button>
                }
            </form>
        </SectionTemplate>
    );
};

export default Contact;

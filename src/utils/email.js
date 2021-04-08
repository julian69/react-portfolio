import emailjs from 'emailjs-com';

export const sendEmail = (params) => emailjs.send(
    process.env.REACT_APP_EMAIL_SERVICE_ID,
    process.env.REACT_APP_EMAIL_TEMPLATE_ID, 
    params, 
    process.env.REACT_APP_EMAIL_USER_ID,
)
.then(response => 
    response.status, 
    err => err,
);
import React  from "react";
import SECTIONS from '../utils/types/section-types';

const  { HOME, ABOUT, SKILLS, WORKS, CONTACT } = SECTIONS;

export default {
    EN: {
        sections: {
            [HOME]: {
                name: HOME,
                heading: 'Front-end Developer',
            },
            [ABOUT]: {
                name: ABOUT,
                heading: 'About',
                content:( 
                    <React.Fragment>
                        <p>My name is Julian and I'm a front-end developer from Argentina. I love new technologies and creating simple and elegant interfaces that both take advantage of and hide the complexity behind their design.</p>
                        <p>I've worked for companies and as a freelance developer, both locally and remotely. I am currently in Spain, where I settled my studio, working for companies around the globe.</p>
                    </React.Fragment>
                ),
            },
            [SKILLS]: {
                name: SKILLS,
                heading: 'Skills',
            },
            [WORKS]: {
                name: WORKS,
                heading: (
                    <React.Fragment>
                        <p>Some</p>
                        <p>Works<span>.</span></p>
                    </React.Fragment>
                ),
            },
            [CONTACT]: {
                name: CONTACT,
                heading: 'Contact',
                form: {
                    name: {
                        title: 'Name',
                        placeholder: 'Who are you?'
                    },
                    email: {
                        title: 'Email',
                        placeholder: 'name@email.com'
                    },
                    message: {
                        title: 'Msg',
                        placeholder: 'Your message...'
                    },
                    succes: 'Your message has been successfully sent!',
                    error: 'Something went wrong. Please try again.',
                    submit: 'send',
                    clear: 'clear',
                }
            },
        },
    },
    ES: {
        sections: {
            [HOME]: {
                name: 'inicio',
                heading: 'Desarrollador Front-end',
            },
            [ABOUT]: {
                name: 'sobre mi',
                heading: 'Sobre mi',
                content:( 
                    <React.Fragment>
                        <p>Mi nombre es Julian, soy Argentino y desarrollador front-end. Me gustan las nuevas tecnologías y crear simple y elegantes interfaces que aprovechen la complejidad de las tecnologías utilizadas manteniendo un diseño simple y claro.</p>
                        <p>He trabajado para compañías y en forma independiente, tanto en forma local como remota. Actualmente me encuentro en España, donde instale mi estudio, trabajando para compañías alrededor del mundo.</p>
                    </React.Fragment>
                ),
            },
            [SKILLS]: {
                name: 'tecnologias',
                heading: 'Tecnologias',
            },
            [WORKS]: {
                name: 'trabajos',
                heading: (
                    <React.Fragment>
                        <p>Algunos</p>
                        <p>Trabajos<span>.</span></p>
                    </React.Fragment>
                ),
            },
            [CONTACT]: {
                name: "contacto",
                heading: 'Contacto',
                form: {
                    name: {
                        title: 'Nombre',
                        placeholder: '¿Quien eres?'
                    },
                    email: {
                        title: 'Email',
                        placeholder: 'name@email.com'
                    },
                    message: {
                        title: 'Msj',
                        placeholder: 'Tu mensaje...'
                    },
                    succes: '¡Tu mensaje se ha enviado exitosamente!',
                    error: 'Algo anduvo mal, por favor intenta nuevamente',
                    submit: 'Enviar',
                    clear: 'limpiar',
                }
            }
        },
    }, 
};
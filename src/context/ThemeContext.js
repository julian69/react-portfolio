import React, { createContext, useState } from "react";

import SECTIONS from '../utils/types/section-types';

export const ThemeContext = createContext();
const  { HOME, ABOUT, SKILLS, WORKS, CONTACT } = SECTIONS;

const INIT_STATE = {
    activeLang: 'EN', 
    activeSection: 'home',
    content: {
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
                            <p>I've worked for companies and as a freelance developer, both locally and remotely. I am currently in Spain, where I settled my studio, working for companies around the globe.`</p>
                        </React.Fragment>
                    ),
                },
                [SKILLS]: {
                    name: SKILLS,
                    heading: 'Skills',
                },
                [WORKS]: {
                    name: WORKS,
                    heading: 'Works',
                },
                [CONTACT]: {
                    name: CONTACT,
                    heading: 'Contact',
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
                            <p>Mi nombre es Julian, vengo de Argentina y soy desarrollador front-end. Me gustan las nuevas tecnologías y crear simple y elegantes interfaces que aprovechen la complejidad de las tecnologías utilizadas manteniendo un diseño simple y claro.</p>
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
                    heading: 'Trabajos',
                },
                [CONTACT]: {
                    name: "contacto",
                    heading: 'Contacto',
                }
            },
        }, 
    }, 
};

const ThemeContextProvider = (props) => {
    const [contextProviderState, setContextProviderState] = useState(INIT_STATE);

    const updateActiveSection = activeSection => (
        setContextProviderState({
            ...contextProviderState,
            activeSection,
        })
    );

    const updateActiveLang = activeLang => (
        setContextProviderState({
            ...contextProviderState,
            activeLang,
        })
    );

    const values = { 
        ...contextProviderState, 
        updateActiveLang,
        updateActiveSection,
    };

    return(
        <ThemeContext.Provider value={ values }>
            { props.children }
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
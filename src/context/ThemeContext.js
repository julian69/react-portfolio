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
            ...INIT_STATE,
            activeSection,
        })
    );

    const updateActiveLang = activeLang => (
        setContextProviderState({
            ...INIT_STATE,
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
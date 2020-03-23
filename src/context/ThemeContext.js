import React, { createContext, useState } from "react";
import content from './content';

export const ThemeContext = createContext();

const INIT_STATE = {
    content,
    activeLang: 'EN', 
    activeSection: 'home',
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
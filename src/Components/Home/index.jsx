import React, { useContext } from 'react';

import SECTIONS from '../../utils/types/section-types';
import { ThemeContext } from '../../context/ThemeContext';

import './Home.scss';

const Home = () => {
    const { activeLang, content } = useContext(ThemeContext);
    const siteContent = content[activeLang];
    
    return (
        <div className="home section container-fluid">
            <div className="row">
                <div className="col-12 d-flex justify-content-end align-content-center text-light">
                    <h1>{ siteContent.sections[SECTIONS.HOME].heading }</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;

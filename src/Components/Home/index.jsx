import React, { useContext } from 'react';

import SECTIONS from '../../utils/types/section-types';
import { ThemeContext } from '../../context/ThemeContext';
import SectionTemplate from '../Common/SectionTemplate/SectionTemplate'

import './Home.scss';

const Home = () => {
    const { activeLang, content } = useContext(ThemeContext);
    const sectionContent = content[activeLang].sections[SECTIONS.HOME];
    
    return (
        <SectionTemplate
            isFluid
            sectionName={ SECTIONS.HOME }
            sectionInnerClass="col-12 d-flex justify-content-end align-items-end text-light">
            <h1>{ sectionContent.heading }</h1>
        </SectionTemplate>
    );
};

export default Home;

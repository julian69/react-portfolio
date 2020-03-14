import React, { useContext } from 'react';

import SECTIONS from '../../utils/types/section-types';
import { ThemeContext } from '../../context/ThemeContext';
import SectionTemplate from '../Common/SectionTemplate/SectionTemplate'

// import './Skills.scss';

const Skills = () => {
    const { activeLang, content } = useContext(ThemeContext);
    const sectionContent = content[activeLang].sections[SECTIONS.SKILLS];
    
    return (
        <SectionTemplate
            sectionName={ SECTIONS.SKILLS }
            sectionInnerClass="col-12">
            <h2>{ sectionContent.heading }</h2>
        </SectionTemplate>
    );
};

export default Skills;

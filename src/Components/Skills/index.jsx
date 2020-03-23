import _ from 'lodash';
import React, { useContext, useState } from 'react';

import ProgressLine from "./ProgressLine";
import SECTIONS from '../../utils/types/section-types';
import { ThemeContext } from '../../context/ThemeContext';
import { TOPICS, SKILLS } from '../../utils/types/skills-types';
import SectionTemplate from '../Common/SectionTemplate/SectionTemplate'

import "./Skills.scss";

const Skills = () => {
    const { activeLang, content } = useContext(ThemeContext);
    const [activeTopic, setActiveTopic] = useState(TOPICS.FRONT_END)
    const sectionContent = content[activeLang].sections[SECTIONS.SKILLS];

    return (
        <SectionTemplate
            sectionName={ SECTIONS.SKILLS }
            sectionInnerClass="col-12">
            <h2 className="portfolio-secondary-heading">
                { `${sectionContent.heading}.` }
                <div className="skills__topics-btn">
                    [
                        {   
                            _.map(TOPICS, (topic, index) => ( // index: static values
                                <React.Fragment key={ index }>
                                    <button
                                        onClick={ () => setActiveTopic(topic) }
                                        className="bg-transparent border-0 p-0 mr-1">
                                        { _.capitalize(topic) }
                                    </button> 
                                    { topic !== TOPICS.MISC && <span>/</span> }
                                </React.Fragment>
                            ))
                        }
                    ]
                </div>
            </h2>
            {
                SKILLS[activeTopic].map((skill, index) => ( // index: static values
                    <ProgressLine
                        key={ index }
                        barHeight="15"
                        barBg="#efefef"
                        progresBg="rgba(255, 82, 82, .7)"
                        label={ skill.label }
                        percentage={ skill.percentage } /> 
                ))
            }
        </SectionTemplate>
    );
};

export default Skills;


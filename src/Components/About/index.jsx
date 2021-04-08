import React, { useContext } from 'react';
import { IoIosCloudDownload } from "react-icons/io";

import SECTIONS from '../../utils/types/section-types';
import { ThemeContext } from '../../context/ThemeContext';
import SectionTemplate from '../Common/SectionTemplate/SectionTemplate';
import './About.scss';

const About = () => {
    const { activeLang, content } = useContext(ThemeContext);
    const sectionContent = content[activeLang].sections[SECTIONS.ABOUT];

   return (
        <SectionTemplate
            sectionName={ SECTIONS.ABOUT }
            sectionInnerClass="col-12">
            <h2 className="portfolio-secondary-heading">{ `${sectionContent.heading}.` }</h2>
            <div className="about__text-wrapper">
                { sectionContent.content }
            </div>
            <div className="mt-3 mt-md-5 py-md-3">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about__download-link"
                    href={ require('../../assets/docs/CV.pdf') }>
                    <span className="mr-2 text-dark">CV</span>
                    <IoIosCloudDownload size="32" color="#000000" />
                </a>
            </div>
        </SectionTemplate>
   );
};

export default About;

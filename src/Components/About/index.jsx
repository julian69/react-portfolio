import React, { useContext } from 'react';
import { IoIosCloudDownload } from "react-icons/io";

import SECTIONS from '../../utils/types/section-types';
import { ThemeContext } from '../../context/ThemeContext';
import SectionTemplate from '../Common/SectionTemplate/SectionTemplate'
import './About.scss';

const About = () => {
    const { activeLang, content } = useContext(ThemeContext);
    const sectionContent = content[activeLang].sections[SECTIONS.ABOUT];

   return (
        <SectionTemplate
                sectionName={ SECTIONS.ABOUT }
                sectionInnerClass="col-12">
                <div className="about__text-wrapper mb-5">
                    <h2 className="about__heading mb-5">{ `${sectionContent.heading}.` }</h2>
                    { sectionContent.content }
                </div>
                <a 
                    target="_blank" 
                    href="assets/cv.docx" 
                    className="about__download-link">
                    <span className="mr-3">cv</span>
                    <IoIosCloudDownload size="32" color="#000000" />
                </a>
        </SectionTemplate>
   );
};

export default About;

import _ from 'lodash';
import React, { useContext, useState } from 'react';

import Work from './Work';
import works from './works';
import WorksModal from './WorksModal';
import SECTIONS from '../../utils/types/section-types';
import { ThemeContext } from '../../context/ThemeContext';
import SectionTemplate from '../Common/SectionTemplate/SectionTemplate';
import './Works.scss';

const Works = () => {
    const[isModalOpen, setIsModalOpen] = useState(false);
    const[activeWorkData, setActiveWorkData] = useState({});
    const { activeLang, content } = useContext(ThemeContext);
    const sectionContent = content[activeLang].sections[SECTIONS.WORKS];

    return (
        <SectionTemplate
            isFluid
            sectionName={ SECTIONS.WORKS }>
            <div className="slide" data-anchor="slide-gateway">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <div>
                        <h2 className="portfolio-secondary-heading">
                            { sectionContent.heading }
                        </h2>
                    </div>
                </div>
            </div>
            {
                _.map(works, (work, index) => (
                    <Work 
                        key={ index } // index: static values
                        work={ work }  
                        slide={ `slide-${index}` }
                        onInfoClick={ () => {
                            setActiveWorkData(work);
                            setIsModalOpen(true);
                        } } />
                ))
            }
            <WorksModal  
                isModalOpen={ isModalOpen }
                activeWorkData={ activeWorkData } 
                onToggle={ () => setIsModalOpen(!isModalOpen) } />
        </SectionTemplate>
    );
};

export default Works;

import ReactFullpage from '@fullpage/react-fullpage';
import React, { useContext } from 'react';
import FullPageContent from './FullpageContent';

import SECTIONS from '../../utils/types/section-types.js';
import { ThemeContext } from '../../context/ThemeContext';
import { LICENSE_KEY, COLORS, SCROLL_SPEED } from '../../utils/types/fullpage-types';

const Fullpage = () =>  {
    const  { HOME, ABOUT, SKILLS, WORKS, CONTACT } = SECTIONS;
    const contextType = useContext(ThemeContext);
    
    return (
        <ReactFullpage
            sectionsColor={ COLORS }
            licenseKey={ LICENSE_KEY }
            scrollingSpeed={ SCROLL_SPEED } 
            anchors={ [HOME, ABOUT, SKILLS, WORKS, CONTACT] }
            onLeave={ (origin, destination, direction) => contextType.updateActiveSection(destination.anchor) }
            render={ ({ state, fullpageApi }) => (
                <ReactFullpage.Wrapper>
                    <FullPageContent /> 
                </ReactFullpage.Wrapper>
            )} />
    );
};

export default Fullpage;

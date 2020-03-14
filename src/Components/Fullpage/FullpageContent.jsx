import React from 'react';

import Home from '../Home';
import About from '../About';
import Skills from '../Skills';
import Works from '../Works';
import Contact from '../Contact';

const FullpageContent = () => (
    <React.Fragment>
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
    </React.Fragment>
);

export default FullpageContent;

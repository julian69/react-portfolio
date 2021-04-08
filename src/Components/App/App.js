import React, { useContext } from 'react';
import Fullpage from '../Fullpage';

import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { isIOS, GA } from '../../utils/helpers';
import { ThemeContext } from '../../context/ThemeContext';

import '../../assets/styles/portfolio-theme.scss';
import './App.scss';

const App = () => {
    const { activeSection } = useContext(ThemeContext);
    GA(activeSection);
    return (
        <div className={ `app portfolio ${isIOS ? 'portfolio__ios' : ''}` }>
            <Header />
            <Fullpage />
            <Footer />
        </div>
    );
};

export default App;

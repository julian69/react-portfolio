import React from 'react';
import Fullpage from '../Fullpage';

import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { isIOS } from '../../utils/helpers';
import ThemeContextProvider from '../../context/ThemeContext';

import '../../assets/styles/portfolio-theme.scss';
import './App.scss';

const App = () => (
    <div className={ `app portfolio ${isIOS ? 'portfolio__ios' : ''}` }>
        <ThemeContextProvider>
            <Header />
            <Fullpage />
            <Footer />
        </ThemeContextProvider>
    </div>
);

export default App;

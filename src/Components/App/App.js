import React from 'react';
import Fullpage from '../Fullpage';

import Header from '../Common/Header';
import Footer from '../Common/Footer';
import ThemeContextProvider from '../../context/ThemeContext';

import '../../assets/styles/bootstrap-theme.scss';
import './App.scss';

const App = () => (
    <div className="App">
        <ThemeContextProvider>
            <Header />
            <Fullpage />
            <Footer />
        </ThemeContextProvider>
    </div>
);

export default App;

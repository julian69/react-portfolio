import ReactGA from 'react-ga';

export const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

export const GA = activeSection => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACK_ID,
        {
            titleCase: false,
            gaOptions: {
                userId: process.env.REACT_APP_GA_USER_ID,
            }
        });
    ReactGA.pageview(activeSection);    
};
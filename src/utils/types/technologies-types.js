import React from 'react';
import { 
    DiBootstrap, 
    DiPhp, 
    DiGulp, 
    DiAngularSimple, 
    DiReact, 
    DiHtml5, 
    DiCss3, 
    DiJqueryLogo, 
    DiJsBadge, 
    DiSass, 
    DiWordpress
} from "react-icons/di";

export default {
    redux: {
        name: 'redux',
        icon: <img className="mr-2" src={ require(`../../assets/imgs/redux-icon.svg`) } alt="redux icon" />
    },
    webpack: {
        name: 'webpack',
        icon: <img className="mr-1" src={ require(`../../assets/imgs/webpack-icon.svg`) } alt="webpack icon" />
    },
    wordpress: {
        name: 'wordpress',
        icon: <DiWordpress size="30" color="#B6B6B6" />
    },
    php: {
        name: 'php',
        icon: <DiPhp size="35" color="#B6B6B6" />
    },
    html: {
        name: 'html',
        icon: <DiHtml5 size="35" color="#B6B6B6" />
    },
    css: {
        name: 'css',
        icon: <DiCss3 size="35" color="#B6B6B6" />
    },
    js: {
        name: 'js',
        icon: <DiJsBadge size="20" color="#B6B6B6" />
    },
    gulp: {
        name: 'gulp',
        icon: <DiGulp size="25" color="#B6B6B6" />
    },
    bootstrap: {
        name: 'bootstrap',
        icon: <DiBootstrap size="35" color="#B6B6B6" />
    },
    jquery: {
        name: 'jquery',
        icon: <DiJqueryLogo size="35" color="#B6B6B6" />
    },
    angular: {
        name: 'angular',
        icon: <DiAngularSimple size="35" color="#B6B6B6" />
    },
    react: {
        name: 'react',
        icon: <DiReact size="35" color="#B6B6B6" />
    },
    sass: {
        name: 'sass',
        icon: <DiSass size="35" color="#B6B6B6" />
    },
}
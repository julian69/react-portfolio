import React, { useContext } from 'react';
import { AiFillGithub, AiOutlineCodepen, AiOutlineLinkedin, AiOutlineMobile } from "react-icons/ai";

import SECTIONS from '../../../utils/types/section-types.js';
import { ThemeContext } from '../../../context/ThemeContext';
import './Footer.scss';

const Footer = () => { 
    const { activeSection } = useContext(ThemeContext);
    return activeSection === SECTIONS.CONTACT 
        ? (
            <footer className="portfolio__footer container-fluid py-2 position-fixed">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center justify-content-md-start">
                        <a className="portfolio-footer__link mr-3" href="https://github.com/julian69" target="_blank" rel='noreferrer noopener'>
                            <AiFillGithub size="24" color="#000000" />
                        </a>
                        <a className="portfolio-footer__link mr-3" href="http://codepen.io/mistlav/" target="_blank" rel='noreferrer noopener'>
                            <AiOutlineCodepen size="24" color="#000000" />
                        </a>
                        <a className="portfolio-footer__link mr-3" href="https://www.linkedin.com/in/mistlav/" target="_blank" rel='noreferrer noopener'>
                            <AiOutlineLinkedin size="24" color="#000000" />
                        </a>
                        <a className="portfolio-footer__link mr-3" href="tel:+34623354909" target="_blank" rel='noreferrer noopener'>
                            <AiOutlineMobile size="24" color="#000000" />
                        </a>
                    </div>
                </div>
            </footer>
        )
        : null;
};

export default Footer;

import _ from 'lodash';
import React, { useContext, useState } from 'react';
import { Button } from 'reactstrap';
import {
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Collapse,
    NavbarBrand,
    NavbarToggler,
} from 'reactstrap';

import SECTIONS from '../../../utils/types/section-types.js';
import { ThemeContext } from '../../../context/ThemeContext';
import './Header.scss';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { activeLang, content, activeSection, updateActiveLang } = useContext(ThemeContext);
    const siteContent = content[activeLang];
    console.log(activeSection)
    const shouldHeaderHaveBg = activeSection !== SECTIONS.HOME || isMenuOpen;
    
    return (
        <header className={ `portfolio-header fixed-top` }>
            <Navbar 
                expand="md" 
                className={ `${shouldHeaderHaveBg ? 'navbar-dark bg-dark' : ''}` }>
                <NavbarBrand className="text-light" href="#home">
                    { `{Julian.Peña}` }
                </NavbarBrand>
                <NavbarToggler 
                    className="border-0" // TODO: change color
                    onClick={ () => setMenuOpen(!isMenuOpen) } />
                <Collapse 
                    navbar
                    className="mt-2 pt-2 mt-md-0 pt-md-0" 
                    isOpen={ isMenuOpen } >
                    <Nav className="ml-auto" navbar>
                        {   
                            _.map(siteContent.sections, (value, key) => value.name !== SECTIONS.HOME && (
                                <NavItem key={ key }>
                                    <NavLink 
                                        href={ `#${key}`}
                                        className={ `${activeSection === key ? 'active' : ''}` }>
                                        <span className="portfolio-header__crossed-out-line">{ value.name }</span>
                                    </NavLink>
                                </NavItem>
                            )) 
                        }
                        <NavItem className="portfolio-header__langs d-flex align-items-center">
                            <Button 
                                className="ml-0 ml-md-3 p-0 border-0 bg-transparent text-light font-weight-lighter"
                                onClick={ () => updateActiveLang('EN') }>EN</Button>
                            <span className="text-white">/</span>
                            <Button 
                                className="p-0 border-0 bg-transparent text-light font-weight-lighter"
                                onClick={ () => updateActiveLang('ES') }>ES</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    )
}

export default Header;

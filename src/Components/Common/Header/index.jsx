import _ from 'lodash';
import React, { useContext } from 'react';
import { Button } from 'reactstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import SECTIONS from '../../../utils/types/section-types.js';
import { ThemeContext } from '../../../context/ThemeContext';

const Header = () => {
    const { activeLang, content, activeSection, updateActiveLang } = useContext(ThemeContext);
    const siteContent = content[activeLang];
    
    return (
        <header className="fixed-top bg-dark">
            <Navbar expand="md">
                <NavbarBrand className="text-light" href="#home">{ `{Julian.Peña}` }</NavbarBrand>
                <NavbarToggler onClick={ () => {}} />
                <Collapse isOpen={ false } navbar>
                    <Nav className="ml-auto" navbar>
                        {   
                            _.map(siteContent.sections, (value, key) => value.name !== SECTIONS.HOME && (
                                <NavItem key={ key }>
                                    <NavLink 
                                        href={ `#${key}`}
                                        className={ `text-light ${activeSection === key ? 'active' : ''}` }>
                                        { value.name }
                                    </NavLink>
                                </NavItem>
                            )) 
                        }
                        {   
                            _.map(content, (value, key) => (
                                <NavItem key={ key }>
                                    <Button 
                                        className="text-light"
                                        onClick={ () => updateActiveLang(key) }>{ key }</Button>
                                </NavItem>
                            )) 
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    )
}

export default Header;

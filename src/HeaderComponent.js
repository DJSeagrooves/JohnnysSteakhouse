import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavItem, NavLink, Nav } from 'reactstrap';
import react from 'react';


const Header = ({ title }) => {

    return (
        <react.Fragment>
            <header className='siteHeader'>
                <h1>
                    {title}
                </h1>
            </header>
            <Navbar
                expand='md'
                className='navbar navbar-dark bg-dark sticky-top'
            >
                <NavbarToggler
                    className="me-2"
                    onClick={function noRefCheck(){}}
                />
                <Collapse navbar>
                    <Nav>
                        <NavItem>
                            <NavLink href='/home/'>
                                <p className='link-light'>
                                    Home
                                </p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/menu/'>
                                <p className='link-light'>
                                    Menu
                                </p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/aboutus/'>
                                <p className='link-light'>
                                    About Us
                                </p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/contactus/'>
                                <p className='link-light'>
                                    Contact Us
                                </p>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </react.Fragment>
    )
}

export default Header;
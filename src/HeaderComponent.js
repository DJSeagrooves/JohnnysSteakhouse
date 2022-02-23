import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const Header = ({ title }) => {

    return (
        <React.Fragment>
            <header className='siteHeader'>
                <h1>
                    {title}
                </h1>
            </header>
            <Navbar
                expand='md'
                className='navbar navbar-dark bg-dark'
                sticky='top'
            >
                <Navbar.Toggle
                    aria-controls='basic-navbar-nav'
                    className="me-2"
                    onClick={function noRefCheck(){}}
                />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href='/home'>
                            <p className='link-light'>
                                Home
                            </p>
                        </Nav.Link>
                        <Nav.Link href='/menu'>
                            <p className='link-light'>
                                Menu
                            </p>
                        </Nav.Link>
                        <Nav.Link href='/aboutus'>
                            <p className='link-light'>
                                About Us
                            </p>
                        </Nav.Link>
                        <Nav.Link href='/contactus'>
                            <p className='link-light'>
                                Contact Us
                            </p>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default Header;
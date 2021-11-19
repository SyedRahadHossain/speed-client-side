import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const { user, logout } = useAuth();

    return (

        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="danger"
                variant="dark"
                sticky="top"
            >
                <Container>
                    <Navbar.Brand className="fs-3" as={HashLink} to="/home#home">
                        <i className="fas fa-car"></i> Speed
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="text-white" to="/home#home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={HashLink} className="text-white" to="/moreProducts">
                            More Cars
                        </Nav.Link>

                        {user?.email &&

                            (
                                <Nav.Link as={Link} className="text-white" to="/dashBoard">
                                    Dashboard
                                </Nav.Link>
                            )}
                        {user?.email ? (
                            <Button
                                onClick={logout}
                                className="me-3 text-danger fw-bold"
                                variant="light"
                            >
                                <i className="fas fa-sign-out-alt"></i> Log Out
                            </Button>
                        ) : (
                            <Nav.Link as={Link} className="text-white" to="/login">
                                Login
                            </Nav.Link>
                        )}
                        {user.email && (
                            <Navbar.Text>
                                Welcome!{" "}
                                <Link className="text-decoration-none" to="/home">
                                    {" "}
                                    {user?.displayName}
                                </Link>
                            </Navbar.Text>
                        )}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
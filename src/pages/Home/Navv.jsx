import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Meta from '../../components/Images/Meta_Logo.png'

const Navv = () => {

    return (
    
    <>
            <Navbar>
                <Container id='navCon'>
                    <Navbar.Brand >
                        <Link to='/'>
                            <img id='Logo' src={Meta} alt="metaBnB Logo" />
                        </Link>
                    </Navbar.Brand>

                    <Nav id='navBar'>
                        <Nav.Item>
                            <Nav.Link id='locc'>
                            <Link className='locc' to='/'>
                                Home
                            </Link>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Link id='locc'>
                            <Link className='locc' to='/Place-To-Stay'>
                                Place To Stay
                            </Link>
                            </Nav.Link>

                        <Nav.Item>
                            <Nav.Link className='locc'  href="#">NFTs</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className='locc' href="#">Community</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <>
                        <Link to='/Connect'>
                            <Button id='NavBtn'>Connect Wallet</Button>
                        </Link>
                    </>
                </Container>      
            </Navbar>
    </>        
  );
}

export default Navv
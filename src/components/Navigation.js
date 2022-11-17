import React, { useState } from 'react'
import NavLogo from '../assets/navlogo.svg';
import BModal from './BModal';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {

  const [showModal, setShowModal] = useState(false);
 
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
    <nav>
      <div className='logo-menu'>
        <div className='nav-logo'>
            <img src={NavLogo} alt='nav-logo' />
          </div>
      </div>
      
        <ul className='nav-links'>
            <li><a href='/'>Home</a></li>
            <li><a href='/place_to_stay'>Place to stay</a></li>
            <li><a href='/'>NFTs</a></li>
            <li><a href='/'>Community</a></li>
        </ul>
        <button onClick={handleShow} id='connect__wallet'>Connect wallet</button>
    </nav>

    {/* Mobile/tab menu */}
    <Navbar collapseOnSelect expand="lg"  id='hide-this'>
      <Container>
        <Navbar.Brand href="home">
        <img src={NavLogo} alt='nav-logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='mobile_menu'>
            <span className='bars'></span>
            <span className='bars'></span>
            <span className='bars'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="place_to_stay">Place to stay</Nav.Link>
            <Nav.Link href="/">NFTs</Nav.Link>
            <Nav.Link href="/">Community</Nav.Link>
            <Nav.Link href="/" onClick={handleShow} id='connect__wallet'>
              Connect wallet
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <BModal show={showModal} onHide={handleClose} /> 
    </>
  )
}

export default Navigation
import React, { useState } from 'react'
import NavLogo from '../assets/navlogo.svg';
import BModal from './BModal';

const Nav = () => {

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
        <a href='/' className='mobile_menu'>
          <span className='bars'></span>
          <span className='bars'></span>
          <span className='bars'></span>
        </a>
      </div>
      
        <ul className='nav-links'>
            <li><a href='/'>Home</a></li>
            <li><a href='/place_to_stay'>Place to stay</a></li>
            <li><a href='/'>NFTs</a></li>
            <li><a href='/'>Community</a></li>
        </ul>
        <button onClick={handleShow} id='connect__wallet'>Connect wallet</button>
    </nav>
    
    <BModal show={showModal} onHide={handleClose} /> 
    </>
  )
}

export default Nav
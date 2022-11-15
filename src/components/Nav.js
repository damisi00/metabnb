import React from 'react'
import NavLogo from '../assets/navlogo.svg';
// import Modal from './Modal';

const Nav = () => {
  // const [showModal, setShowModal] = useState(false);

  return (
    <header>
    <nav>
        <div className='nav-logo'>
          <img src={NavLogo} alt='nav-logo' />
        </div>
        <ul className='nav-links'>
            <li><a href='/'>Home</a></li>
            <li><a href='/place_to_stay'>Place to stay</a></li>
            <li><a href='/'>NFTs</a></li>
            <li><a href='/'>Community</a></li>
        </ul>
        <button   id='connect__wallet'>Connect wallet</button>
    </nav>
    <div className='mobile_menu'>
      <span className='bars'></span>
      <span className='bars'></span>
      <span className='bars'></span>
    </div>
    {/* <Modal show={showModal} onClick={() => setShowModal(false)} /> */}
    </header>
  )
}

export default Nav
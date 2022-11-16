import React from 'react'
import Metamask from '../assets/fox.svg';
import WalletConnect from '../assets/walletconnect.svg';
import Modal from 'react-bootstrap/Modal';

const BModal = (props) => {
    
  return (
    <section className='true-center'>
        <Modal className='modal-container' {...props} aria-labelledby='c' centered>
            <Modal.Header className='modal-header' id='c'>
                <h4>Connect Wallet</h4>
                <a href='/'  aria-hidden='true' closeButton>&times;</a>
            </Modal.Header>
            <Modal.Body className='modal-body'>
                <h6>Choose your preferred wallet:</h6>
                <a href='/' className='wallet-btn'>
                    <div className='wallet_link'>
                        <img src={Metamask} alt='Metamask logo' />
                        <span>Metamask</span>
                    </div>
                    <span className='right-btn'>&gt;</span>
                </a> 
                <a href='/' className='wallet-btn'>
                    <div className='wallet_link'>
                        <img src={WalletConnect} alt='WalletConnect logo' />
                        <span>WalletConnect</span>
                    </div>
                    <span className='right-btn'>&gt;</span>
                </a> 
            </Modal.Body>
        </Modal>
    </section>
  )
}

export default BModal
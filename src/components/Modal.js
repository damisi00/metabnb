import React from 'react'
import Metamask from '../assets/fox.svg';
import WalletConnect from '../assets/walletconnect.svg';

const Modal = () => {
    
  return (
    <section className='modal'>
        <div className='modal-container'>
            <div className='modal-header'>
                <h4>Connect Wallet</h4>
                <a href='/'  aria-hidden='true'>&times;</a>
            </div>
            <div className='modal-body'>
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
            </div>
        </div>
    </section>
  )
}

export default Modal
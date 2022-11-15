import React from 'react'
import FooterLogo from '../assets/footerlogo.svg';
import Twitter from '../assets/twitter-icon.svg';
import Instagram from '../assets/instagram-icon.svg';
import Facebook from '../assets/facebook-icon.svg';

const Footer = () => {
  return (
    <footer>
        <div className='ft-wrapper'>
            <div className='logo_socials'>
                <div className='ft-logo'>
                    <img src={FooterLogo} alt='footer logo' />
                </div>
                <div className='socials'>
                    <img src={Facebook} alt='facebook' />
                    <img src={Instagram} alt='instagram' />
                    <img src={Twitter} alt='twitter' />
                </div>
            </div>
            <div className='ft-links'>
                <ul>
                    Community
                    {/* <li><a href='/'>Community</a></li> */}
                    <li><a href='/'>NFT</a></li>
                    <li><a href='/'>Tokens</a></li>
                    <li><a href='/'>Landlords</a></li>
                    <li><a href='/'>Discord</a></li>
                </ul>
                <ul>
                    Places
                    <li><a href='/'>Castle</a></li>
                    <li><a href='/'>Farms</a></li>
                    <li><a href='/'>Beach</a></li>
                    <li><a href='/'>Learn more</a></li>
                </ul>
                <ul>
                    About us
                    <li><a href='/'>Road map</a></li>
                    <li><a href='/'>Creators</a></li>
                    <li><a href='/'>Career</a></li>
                    <li><a href='/'>Contact us</a></li>
                </ul>
            </div>
        </div>
        <p>&copy; 2022 Metabnb</p>   
    </footer>
  )
}

export default Footer
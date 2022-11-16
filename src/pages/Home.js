import React from 'react';
import HeroImg1 from '../assets/t1.svg';
import HeroImg2 from '../assets/t2.svg';
import HeroImg3 from '../assets/b3.svg';
import HeroImg4 from '../assets/b4.svg';
import Mbtoken from '../assets/mbtoken.svg';
import Metamask from '../assets/metamask_clear.svg';
import Opensea from '../assets/opensea.svg';
import InclinedImgs from '../assets/nfts_inclined.png';
import HomeCards from '../components/HomeCards';

const Home = () => {
  return (
    <>
    <section className='hero'>
        <div className='hero-text'>
            <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
            <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <form className='search_box'>
                <input type='search' id='search' placeholder='Search for location' />
                <button type='button'>Search</button>
            </form>
        </div>
        <div className='hero_imgs'>
            <img src={HeroImg1} alt='nft' className='side-h1'/>
            <img src={HeroImg2} alt='nft' className='side-h2'/>
            <img src={HeroImg3} alt='nft' className='side-h3'/>
            <img src={HeroImg4} alt='nft' className='side-h4'/>
        </div>
    </section>
    <section className='market-brands'>
        <img src={Mbtoken} alt='mbtoken' />
        <img src={Metamask} alt='metamask' />
        <img src={Opensea} alt='opensea' />
    </section>
    <section className='inspiration'>
        <h2>Inspiration for your next adventure</h2>
        <HomeCards />
    </section>
    <section className='fourth'>
        <div className='additional-info'>
            <div className='nft-text'>
                <h2>Metabnb NFTs</h2>
                <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <button type='button' id='learn_more'>Learn more</button>
            </div>
            <div className='nft-img'>
                <img src={InclinedImgs} alt='nfts' />
            </div>
        </div>
    </section>
    </>
  )
}

export default Home
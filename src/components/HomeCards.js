import React from 'react'
import Img1 from '../assets/img5.svg';
import Img2 from '../assets/img6.svg';
import Img3 from '../assets/img7.svg';
import Img4 from '../assets/img8.svg';
import Img5 from '../assets/img1.svg';
import Img6 from '../assets/img2.svg';
import Img7 from '../assets/img3.svg';
import Img8 from '../assets/img4.svg';
import Stars from '../assets/stars.svg';

const cardImages = [
    {
        no: 1,
        title: Img1
    },
    {
        no: 2,
        title: Img2
    },
    {
        no: 3,
        title: Img3
    },
    {
        no: 4,
        title: Img4
    },
    {
        no: 5,
        title: Img5
    },
    {
        no: 6,
        title: Img6
    },
    {
        no: 7,
        title: Img7
    },
    {
        no: 8,
        title: Img8
    }
]

const HomeCards = () => {
  return (
    <section className='card-wrapper'>
        {cardImages.map((cardImage, no) => 
        <div className='card' key={no}>
            <div className='card-img'>
                <img src={cardImage.title} alt='nft' />
            </div>
            <div className='card-description'>
                <p>Desert king</p>
                <h6>1MBT per night</h6>
            </div>
            <div className='distance'>
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
            </div>
            <img src={Stars} alt='rating' className='rating'/>
        </div>
        )}
    </section>
  )
}

export default HomeCards
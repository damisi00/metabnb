import React from 'react'
import Img1 from '../assets/img1.jpg';
import Img2 from '../assets/img2.jpg';
import Img3 from '../assets/img3.jpg';
import Img4 from '../assets/img4.jpg';
import Img5 from '../assets/img5.jpg';
import Img6 from '../assets/img6.jpg';
import Img7 from '../assets/img7.jpg';
import Img8 from '../assets/img8.jpg';
import Img9 from '../assets/img9.jpg';
import Img10 from '../assets/img10.jpg';
import Img11 from '../assets/img11.jpg';
import Img12 from '../assets/img12.jpg';
import Img13 from '../assets/img13.jpg';
import Img14 from '../assets/img14.jpg';
import Img15 from '../assets/img15.jpg';
import Img16 from '../assets/img16.jpg';
import Stars from '../assets/stars.svg';

const cards = [
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
    },
    {
        no: 9,
        title: Img9
    },
    {
        no: 10,
        title: Img10
    },
    {
        no: 11,
        title: Img11
    },
    {
        no: 12,
        title: Img12
    },
    {
        no: 13,
        title: Img13
    },
    {
        no: 14,
        title: Img14
    },
    {
        no: 15,
        title: Img15
    },
    {
        no: 16,
        title: Img16
    }
]

const Cards = () => {
  return (
    <section className='card-wrapper'>
        {cards.map((card, no) => 
        <div className='card' key={no}>
            <div className='card-img'>
                <img src={card.title} alt='nft' />
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

export default Cards
import React from 'react'
import SliderIcon from '../assets/sliders.svg';

const Categories = () => {
  return (
    <div className='cat-locat'>
        <div className='category'>
            <a href='/'>Restaurant</a>
            <a href='/'>Cottage</a>
            <a href='/'>Castle</a>
            <a href='/'>Fantasy City</a>
            <a href='/'>Beach</a>
            <a href='/'>Cabin</a>
            <a href='/'>Off-grid</a>
            <a href='/'>Farm</a>
        </div>
        <div className='location'>
            <span>Location</span>
            <a href='/'>
                <img src={SliderIcon} alt='slider icon' />
            </a>
        </div>
    </div>
  )
}

export default Categories
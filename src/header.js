import React from 'react'
import image from './images/gallery-1.jpg'
const header = () => {
  return (
    <div className='container-2'>
        <div className='row-2'>
            <div className='col'>
                 <img src={image}></img>
            </div>
            <div className='col'>
                <img src={image}></img>
            </div>
            <div className='col'>
                 <img src={image}></img>
            </div>
            <div className='col'>
                <img src={image}></img>
            </div>
            <div className='col'>
                <img src={image}></img>
            </div>
            <div className='col'>
                <img src={image}></img>
            </div>
            <div className='col'>
                 <img src={image}></img>
            </div>
                 <div className='col'>
                <img src={image}></img>
            </div>
        </div>
    </div>

  )
}

export default header
import React from 'react'
import image from './images/web-image.jpg'
function Table(props){
    console.log('props',props);
    return (
        <div className='container'>
            <div className='row'>
                <h1>UI/UX Design</h1>
                <p>It’s easy – just install the Microsoft Rewards extension and earn free gift cards.It’s easy – just install the Microsoft Rewards extension and earn free gift cards.</p>
                 <button>Click here</button>
            </div>
            <div className='row'>
                <img src={image}></img>
            </div>
        </div>
    )
} 

export default Table
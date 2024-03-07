import React from 'react'
import Brick_Matrix from "../images/Brick_Matrix.png"

const Introduction = () => {
    return (
        <div className='intro-section flex justify-evenly m-4 '>
            <div className='p=6 w-80 m-36'>
                <h1 className='header-text text-red-600  '>Introduction</h1>
                <p className='savior text-left'>We've all been in the mud once, and now we've decided to fight it out. Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future! Our mission is to empower everyone to share wealth and succeed <br /> <span className='text-gray-400'>read more...</span></p>
            </div>
            <div className=''>
                <img src={Brick_Matrix} alt="" className='matrix' />
            </div>
        </div>
    )
}

export default Introduction

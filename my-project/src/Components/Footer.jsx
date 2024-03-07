import React from 'react'
import Logo_savior from "../images/Logo_savior.png"
import telegram from "../images/icon-telegram.png"
import twitter from "../images/icon-twitter.png"
import email from "../images/icon-email.png"

const Footer = () => {
    return (
        <div className='m-10 justify-center'>
            <img src={Logo_savior} alt="" className='m-10 ml-[45%]' />
            <p className='site m-5'>S I T E M A P</p>
            <div className='m-10'>
                <ul className='flex gap-10 font-semibold ml-40'>
                    <li>Home</li>
                    <li>IDO</li>
                    <li>Tokenomics</li>
                    <li>Road Map</li>
                    <li>Whitepaper</li>
                    <li>Pledge</li>
                    <li>NFT</li>
                    <li>Games</li>
                </ul>
            </div>
            <div className='flex gap-5 ml-[45%]'>
                <img src={twitter} alt="" />
                <img src={telegram} alt="" />
                <img src={email} alt="" />
            </div>
        </div>
    )
}

export default Footer

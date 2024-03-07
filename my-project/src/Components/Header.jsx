import React from 'react'
import Logo_savior from "../images/Logo_savior.png"
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
    return (
        <div className='header'>


            <div className='p-12 flex justify-between'>
                <div className='savior flex items-center text-2xl'>
                    <AiOutlineMenu className='text-white text-2xl md:hidden block' id='menu' />
                    <img src={Logo_savior} alt="" />
                    Savior
                </div>
                <div>

                    <ul className='savior flex gap-4 text-white font-normal bg-black p-3 rounded-2xl text-xl' id='menu-list'>
                        <li>Home</li>
                        <li>IDO</li>
                        <li>Tokenomics</li>
                        <li>Roadmap</li>
                        <li>Coming Soon</li>
                    </ul>
                </div>
                <div>
                    <button className='text-white font-normal bg-red-500 p-2 rounded-xl'>Connect Wallet</button>
                </div>
            </div>
            <div className='ml-20 mt-20'>
                <p className='header-text text-white'>Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.</p>
            </div>
        </div>
    )
}

export default Header

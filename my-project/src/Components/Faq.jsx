import React from 'react'
import image from "../images/image.png"
import { IoIosArrowDown } from "react-icons/io";
const Faq = () => {
    return (
        <div className='faq-div flex justify-between p=6 m-26 p-20'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className='w-[50%]'>
                <h1 className='header-text text-red-500 p-20'>FAQ</h1>
                <div>
                    <div className='event-text flex justify-between p-2 w-100 border-solid border-2 border-red-500 rounded-xl m-3 bg-gray-900' id='faq-list'><p>1</p><p>Why choose "Savior"?</p> <IoIosArrowDown /></div>
                    <div className='event-text flex justify-between p-2 w-100 border-solid border-2 border-red-500 rounded-xl m-3 bg-gray-900' id='faq-list'><p>2</p>
                        <p>Why is the IDO duration so long?</p> <IoIosArrowDown /></div>
                    <div className='event-text flex justify-between p-2 w-100 border-solid border-2 border-red-500 rounded-xl m-3 bg-gray-900' id='faq-list'><p>3</p>
                        <p>When will trading go live?</p><IoIosArrowDown /></div>
                    <div className='border-solid border-2 border-red-500 rounded-xl m-3 bg-gray-900' id='faq-list'>
                        <div className='event-text flex justify-between p-2 w-100'><p>4</p>
                            <p>When can we claim the tokens?</p><IoIosArrowDown />
                        </div>
                        <p className='generate-text bg-gray-800 p-1 m-2'>After the IDO concludes, you can claim the tokens on our official website.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq

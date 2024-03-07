import React from 'react'

const EventDiv = () => {
    return (
        <div className='event-div'>
            <div>
                <h1 className='header-text text-red-600 p-20'>Participate in our IDO Event!</h1>
            </div>
            <div className='flex justify-evenly p-5 w-50' id='event-div'>
                <div className='inner-event-div'>
                    <p className='savior w-[80%]' id='event-sec'>During our IDO event, you will gain early access to our revolutionary ecosystem, designed to empower everyone to share wealth and achieve success.</p>
                    <h4 className='event-text text-sm text-white bg-red-600 p-3 w-40 ml-32 rounded-xl mt-4 overflow-auto'>Token Info</h4>
                    <div className='border-solid border-2 border-red-500 rounded-2xl items-center' id='token-info'>

                        {/* </div>
                    <div > */}
                        <div className='flex justify-evenly p-4 w-[6]'>Total Token Supply <p>20%</p> </div>
                        <div className='savior flex justify-evenly p-3 w-[1]'>Soft Cap <p>200 BNB</p></div>
                        <div className='flex justify-evenly p-4 w-[1]'>Initial exchange rate <p>1 BNB</p></div>
                        <div className='savior'>Recommended Referral Commission</div>
                        <div className='savior flex justify-evenly p-4 w-[1]'>1st Generation <p>5%</p></div>
                        <div className='savior flex justify-evenly p-4 w-[1]'>2nd Generation <p>2%</p></div>
                    </div>
                    <button className='text-white font-normal bg-red-500 p-2 rounded-xl mt-10'>Connect Wallet</button>
                    <h4 className='event-text text-red-600 m-3'>Become an affiliate & Earn 7% as Commission!</h4>
                    <div className='generate-text border-solid border-2 border-red-400 p-1 rounded-2xl m-2 flex justify-between'><p className='p-1'>Generate a unique referral link</p> <button className='text-white font-normal bg-red-500 rounded-xl p-1'>Generate</button></div>
                </div>
                <div>

                    <div className='savior border-solid border-2 border-red-500 rounded-2xl p-20 m-20 ' id='second-event'>
                        <h2 className='header-text text-red-500'>PRESALE 1</h2>
                        <p className='p-2'>1 Saviour  =  0.657 USDT</p>
                        <p className='p-2'>Next Stage Price  =  0.723 USDT</p>
                        <p className='p-2'>Sold  -  $34,56,56,764/$50,00,00,000</p>
                        <p className='p-2'>Raised  -  $34,56,56,764/$40,00,00,000</p>
                        <p className='border-solid border-2 border-red-400 p-1 rounded-xl m-2'>
                            Enter the amount (BNB)
                        </p>
                        <p className='border-solid border-2 border-red-400 p-1 rounded-xl m-2'>Minimum Quantity to Buy</p>
                        <p className='border-solid border-2 border-red-400 p-1 rounded-xl m-2'>Maximum Quantity of Tokens</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EventDiv

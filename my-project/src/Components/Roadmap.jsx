import React from 'react'

const Roadmap = () => {

    const card = [
        {
            phase: "1",
            desc: "Technical Readiness and Smart Contract Audit"
        },
        {
            phase: "2",
            desc: "Increase Liquidity and Trading Volume"
        },
        {
            phase: "3",
            desc: "Community Building and Marketing"
        },
        {
            phase: "4",
            desc: "Ecosystem Expansion and Partnerships"
        }
    ]

    return (
        <div className='roadmap'>
            <h1 className='header-text text-red-500 p-20'>Road Map</h1>
            <div className='flex justify-evenly ' id='wrapper'>
                {card.map((el) => (
                    <div className='div-wrapper border-solid border-2 border-red-500 rounded-xl ' >
                        <div className='roadmap-card '>
                            <h4 className='text-xl font-bold text-start ml-4'>Phase-{el.phase}</h4>
                            <p className='font-thin text-gray-400 text-sm text-start m-4'>{el.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Roadmap

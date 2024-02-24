import React from 'react'
//icons
import { ImCross } from 'react-icons/im'

const FixedInstructions = ({ instructions, setMore }) => {
    return (
        <div className='fixed bg-navbar-main inset-0 flex justify-center items-center'>
            <div className='bg-[#fff] p-6 max-w-[65%] rounded max-h-[80%] overflow-y-scroll'>
                <h1 className='text-3xl font-bold text-center mb-4 text-custom-red'>Instructions</h1>
                {instructions}
            </div>
            <div className='absolute top-5 right-5'>
                <ImCross className='size-7 cursor-pointer'
                    onClick={() => setMore(false)}
                />
            </div>
        </div>
    )
}

export default FixedInstructions

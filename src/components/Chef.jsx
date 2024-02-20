import React, { useState } from 'react'
import { FaSquareXTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6"

const Chef = ({ name, job, image }) => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div className='relative text-white' onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            <img src={image} alt={name} className='max-w-96 w-full h-auto shadow-lg shadow-black overflow-hidden' />
            <div className={`transition duration-200 absolute w-full h-full bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-t from-black to-transparent p-8 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`transition duration-200 h-full flex flex-col justify-end items-center gap-2 ${isVisible ? 'translate-y-0' : 'translate-y-8'}`}>
                    <h3 className='text-center text-xl capitalize'>{name}</h3>
                    <p className='text-center italic capitalize'>{job}</p>
                    <div className='flex gap-4 mt-4'>
                        <FaSquareXTwitter className='size-6 cursor-pointer hover:text-custom-red' />
                        <FaFacebook className='size-6 cursor-pointer hover:text-custom-red' />
                        <FaInstagram className='size-6 cursor-pointer hover:text-custom-red' />
                        <FaLinkedin className='size-6 cursor-pointer hover:text-custom-red' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chef

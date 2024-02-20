import React from 'react'
import aboutPic from '../images/about.jpg'
import { CiCircleCheck } from 'react-icons/ci';

const About = () => {
    return (
        <div className='w-full bg-about-bg bg-cover bg-fixed bg-no-repeat z-10 py-[5.53rem] px-32 max-lg:px-10 relative flex justify-between items-center gap-4 max-lg:flex-col' id='about'>
            <div className='text-white flex flex-col gap-4 w-1/2 mt-6 max-lg:w-full'>
                <h2 className='font-semibold text-3xl text-center'>About Us</h2>
                <p className='text-lg max-lg:text-center'>Welcome to Tasty Bites, where flavors come alive.<br /> Our mission is simple: to delight your senses with every dish we serve.</p>
                <ul className='flex flex-col gap-2'>
                    <li className='flex items-center gap-2'>
                        <CiCircleCheck className='size-6 text-main-color' /> Fresh Ingredients
                    </li>
                    <li className='flex items-center gap-2'>
                        <CiCircleCheck className='size-6 text-main-color' /> Exceptional Taste
                    </li>
                    <li className='flex items-center gap-2'>
                        <CiCircleCheck className='size-6 text-main-color' /> Warm Hospitality
                    </li>
                </ul>
                <p className='text-base max-lg:text-center'>Join us and immerse yourself in a world of culinary delights, where each bite tells a story of passion, creativity, and dedication. Whether you're a food enthusiast or a casual diner, our diverse menu and attentive service ensure a memorable experience that will keep you coming back for more.</p>
            </div>
            <div className='w-1/2 max-lg:w-full max-lg:max-w-[30rem]'>
                <div className='relative about-img-container hover:before:top-3 hover:before:left-3 hover:after:bottom-3 hover:after:right-3 transition duration-500 hover:scale-105 max-sm:before:top-4 max-sm:before:left-4 max-sm:after:bottom-4 max-sm:after:right-4'>
                    <img src={aboutPic} alt='about' className='w-full h-auto border-[4px] border-slate-700 about-img' />
                </div>
            </div>
            <div className='absolute inset-0 bg-about-bg-color -z-10' />
        </div>
    )
}

export default About

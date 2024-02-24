import React from 'react'
import { logo } from '../images'
import { navLinks } from './Navbar'
//icons
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            const offsetTop = element.offsetTop
            const scrollPosition = offsetTop - (window.innerHeight * 0.1)
            window.scrollTo({ top: scrollPosition })
        }
    }
    return (
        <footer className='bg-custom-red py-6'>
            <div className='flex justify-between flex-wrap gap-12 py-12 px-32 max-lg:px-10'>
                <div className='flex items-center gap-3 max-sm:mx-auto'>
                    <img src={logo} alt='logo' />
                    <h3 className='uppercase text-3xl max-w-24 font-bold text-white text-center'>Tasty Bites</h3>
                </div>
                <div className='flex flex-col text-white gap-1'>
                    <h4 className='mb-3 uppercase text-main-color font-semibold'>Useful Links</h4>
                    {navLinks.map(link => {
                        const { id, text } = link
                        return (
                            <p key={id} className='hover:text-main-color transition-colors duration-300 cursor-pointer'
                                onClick={() => scrollToSection(id)}
                            >
                                {text}
                            </p>
                        )
                    })}
                </div>
                <div className='flex flex-col text-white gap-1'>
                    <h4 className='mb-3 uppercase text-main-color font-semibold'>Service</h4>
                    <p>Pure</p>
                    <p>High Quality</p>
                    <p>Excellent</p>
                    <p>Awesome</p>
                </div>
                <div>
                    <h4 className='mb-4 uppercase text-main-color font-semibold'>Social</h4>
                    <div className='flex items-center gap-2'>
                        <FaFacebook className='text-white hover:text-main-color size-7 cursor-pointer' />
                        <FaTwitter className='text-white hover:text-main-color size-7 cursor-pointer' />
                        <FaInstagram className='text-white hover:text-main-color size-7 cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className='border-t border-zinc-300 flex justify-between items-center flex-wrap gap-6 pt-6 px-32 max-lg:px-10 text-white text-sm max-md:text-xs max-sm:justify-center'>
                <p className='text-center'>Copyright &copy; {new Date().getFullYear()} Tasty Bites. All Rights Reserved.</p>
                <div className='flex justify-between items-center gap-8'>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

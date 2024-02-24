import React from 'react'
import { useGlobalContext } from '../context'
//icons
import { SlScreenSmartphone } from 'react-icons/sl'
import { IoMdTime } from 'react-icons/io'

const Topbar = () => {
    const { scrolled } = useGlobalContext()
    return (
        <div className={`fixed z-10 left-0 right-0 h-10 flex justify-between max-sm:justify-center items-center px-32 max-lg:px-10 text-sm transition-all duration-500 ${scrolled ? '-top-10' : 'top-0'}`}>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1 text-white'>
                    <SlScreenSmartphone className='h-4 w-4 text-main-color' />
                    <p className='max-sm:text-[0.75rem]'>(+20) 101 234 5678</p>
                </div>
                <div className='flex items-center gap-1 text-white'>
                    <IoMdTime className='h-4 w-4 text-main-color' />
                    <p className='max-sm:text-[0.75rem]'>Sat-Thu: 10AM-10PM</p>
                </div>
            </div>
            <div className='flex items-center gap-2 font-semibold text-white max-sm:hidden'>
                <p>En</p>
                <span className='text-gray-200'>/</span>
                <p>Ar</p>
            </div>
        </div>
    )
}

export default Topbar

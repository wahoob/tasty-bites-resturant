import React, { useEffect, useRef, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { FiMenu } from 'react-icons/fi'
import logo from '../images/logo.png'
import { useGlobalContext } from '../context'

const navLinks = [
    { ref: '#home', text: 'home' }, { ref: '#about', text: 'about' },
    { ref: '#menu', text: 'menu' }, { ref: '#chefs', text: 'chefs' },
    { ref: '#contact', text: 'contact' }
]

const Navbar = () => {
    const [isOpenSearch, setIsOpenSearch] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const inputRef = useRef(null)
    const { scrolled } = useGlobalContext()
    const handleSearchClick = (e) => {
        setIsOpenSearch(!isOpenSearch)
        e.target.classList.toggle('scale-animation')
    }
    useEffect(() => {
        const handler = (e) => {
            if (!inputRef.current.contains(e.target)) setIsOpenSearch(false)
        }
        document.addEventListener('mousedown', handler)
    })
    return (
        <div className={`fixed z-[9999] left-0 right-0 px-32 max-lg:px-10 h-[10vh] flex items-center justify-between transition-all duration-500 ${scrolled ? 'top-0 bg-navbar-scroll' : 'top-10 bg-navbar-main'} border-b border-neutral-800`}>
            <div className={`flex items-center gap-2 text-white flex-shrink-0 ${isOpenSearch && 'max-[520px]:opacity-0'}`}>
                <img src={logo} alt='logo' className='h-14 w-14' />
                <h1 className='text-2xl font-semibold'>Tasty Bites</h1>
            </div>
            <nav className={`flex items-center gap-4 text-white max-md:hidden ${isOpenSearch && 'hidden'}`}>
                {navLinks.map((link, index) => {
                    const { ref, text } = link
                    return <a key={index} href={ref} className='capitalize max-lg:text-sm'>{text}</a>
                })}
            </nav>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2 relative' ref={inputRef}>
                    <input type='text' className={`absolute right-10 bg-transparent outline-none text-white h-9 border-2 border-x-0 transition-all ease-in ${!isOpenSearch ? 'w-0' : 'w-[18rem] max-sm:w-[10rem]'}`} />
                    <IoIosSearch className='size-6 cursor-pointer text-white hover:text-main-color' onClick={handleSearchClick} />
                </div>
                <button className='text-white border-2 border-main-color px-4 py-2 rounded-3xl font-medium uppercase text-sm hover:-translate-y-[2px] transition-all max-md:hidden shrink-0'><a href='#book-a-table'>book a table</a></button>
                <div className='relative md:hidden ml-auto'>
                    <FiMenu className='size-6 text-white cursor-pointer hover:text-main-color' onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                    <nav className={`absolute bg-white flex-col right-0 top-9 py-5 px-8 rounded gap-2 ${isSidebarOpen ? 'flex' : 'hidden'}`}>
                        {navLinks.map((link, index) => {
                            const { ref, text } = link
                            return <a key={index} href={ref} className='capitalize'>{text}</a>
                        })}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar

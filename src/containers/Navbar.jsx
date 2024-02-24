import React, { useEffect, useState } from 'react'
import { logo } from '../images'
import { Search } from '../components'
import { useGlobalContext } from '../context'
//icons
import { FiMenu } from 'react-icons/fi'

export const navLinks = [
    { id: 'home', text: 'home' },
    { id: 'about', text: 'about' },
    { id: 'menu', text: 'menu' },
    { id: 'chefs', text: 'chefs' },
    { id: 'contact', text: 'contact' }
]

const Navbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('home')
    const { scrolled } = useGlobalContext()
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            const offsetTop = element.offsetTop
            const scrollPosition = offsetTop - (window.innerHeight * 0.1)
            window.scrollTo({ top: scrollPosition })
        }
    }
    const scrollToBookATable = () => {
        const element = document.getElementById('book-a-table')
        if (element) {
            const offsetTop = element.offsetTop
            const scrollPosition = offsetTop + (window.innerHeight * 0.9)
            window.scrollTo({ top: scrollPosition })
        }
    }
    useEffect(() => {
        const handleScroll = () => {
            let foundActive = false
            navLinks.forEach(link => {
                const element = document.getElementById(link.id)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        setActiveLink(link.id)
                        foundActive = true
                    }
                }
            })

            if (!foundActive) {
                setActiveLink('')
            }
        }
        window.addEventListener('scroll', handleScroll)
    }, [])
    return (
        <div className={`fixed z-[9999] left-0 right-0 px-32 max-lg:px-10 h-[10vh] flex items-center justify-between transition-all duration-500 ${scrolled ? 'top-0 bg-navbar-scroll' : 'top-10 bg-navbar-main'} border-b border-neutral-800`}>
            <div className={`flex items-center gap-2 text-white flex-shrink-0 cursor-pointer ${isSearchOpen && 'max-[520px]:opacity-0'}`}
                onClick={() => scrollToSection('home')}
            >
                <img src={logo} alt='logo' className='h-14 w-14' />
                <h1 className='text-2xl font-semibold'>Tasty Bites</h1>
            </div>
            <nav className={`flex items-center gap-4 text-white max-md:hidden ${isSearchOpen && 'hidden'}`}>
                {navLinks.map(link => {
                    const { id, text } = link
                    return (
                        <p key={id} className={`capitalize max-lg:text-sm transition-colors duration-500 hover:text-main-color cursor-pointer ${text === activeLink && 'text-main-color'}`}
                            onClick={() => scrollToSection(id)}
                        >
                            {text}
                        </p>
                    )
                })}
            </nav>
            <div className='flex items-center gap-4'>
                <Search setIsSearchOpen={setIsSearchOpen} isSearchOpen={isSearchOpen} />
                <button className='text-white border-2 border-main-color px-4 py-2 rounded-3xl font-medium uppercase text-sm hover:-translate-y-[2px] transition-all max-md:hidden shrink-0'
                    onClick={() => scrollToBookATable()}
                >
                    book a table
                </button>
                <div className='relative md:hidden ml-auto'>
                    <FiMenu className='size-6 text-white cursor-pointer hover:text-main-color' onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                    <nav className={`absolute bg-white flex-col right-0 top-9 py-5 px-8 rounded gap-2 ${isSidebarOpen ? 'flex' : 'hidden'}`}>
                        {navLinks.map(link => {
                            const { id, text } = link
                            return <p key={id} className={`capitalize cursor-pointer transition-colors duration-500 hover:text-main-color ${text === activeLink && 'text-main-color'}`}
                                onClick={() => scrollToSection(id)}
                            >
                                {text}
                            </p>
                        })}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar

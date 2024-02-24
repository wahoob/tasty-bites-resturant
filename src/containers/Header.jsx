import React from 'react'

const Header = () => {
    const scrollToBookATable = (id) => {
        const element = document.getElementById(id || 'book-a-table')
        if (element) {
            const offsetTop = element.offsetTop
            const scrollPosition = id ? offsetTop - (window.innerHeight * 0.1) : offsetTop + (window.innerHeight * 0.9)
            window.scrollTo({ top: scrollPosition })
        }
    }
    return (
        <div className='relative h-screen w-full bg-header-bg bg-cover bg-center bg-no-repeat bg-fixed flex gap-8 justify-between items-center px-32 max-lg:px-10 pt-24 max-sm:flex-col max-sm:justify-center' id='home'>
            <div className='text-white flex flex-col max-sm:items-center max-sm:text-center'>
                <h1 className='text-5xl font-bold max-md:text-4xl'>Welcome to <span className='text-main-color'>Tasty Bites</span></h1>
                <h3 className='text-[1.3rem] max-md:text-base'>Delivering great food for more than 5 years!</h3>
                <div className='flex mt-8 max-md:mt-4 gap-6'>
                    <button className='border-2 border-main-color px-4 py-2 rounded-3xl font-medium uppercase text-sm hover:-translate-y-[2.5px] hover:bg-navbar-main transition-all'
                        onClick={() => scrollToBookATable('menu')}
                    >
                        our menu
                    </button>
                    <button className='border-2 border-main-color px-4 py-2 rounded-3xl font-medium uppercase text-sm hover:-translate-y-[2.5px] hover:bg-navbar-main transition-all'
                        onClick={() => scrollToBookATable()}
                    >
                        book a table
                    </button>
                </div>
            </div>
            <div className='video-btn shrink-0' />
        </div>
    )
}

export default Header

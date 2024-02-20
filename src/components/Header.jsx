import React from 'react'

const Header = () => {
    return (
        <div className='relative h-screen w-full bg-header-bg bg-cover bg-center bg-no-repeat bg-fixed flex gap-8 justify-between items-center px-32 max-lg:px-10 pt-24 max-sm:flex-col max-sm:justify-center' id='home'>
            <div className='text-white flex flex-col max-sm:items-center max-sm:text-center'>
                <h1 className='text-5xl font-bold max-md:text-4xl'>Welcome to <span className='text-main-color'>Tasty Bites</span></h1>
                <h3 className='text-[1.3rem] max-md:text-base'>Delivering great food for more than 5 years!</h3>
                <div className='flex mt-8 max-md:mt-4 gap-6'>
                    <button className='border-2 border-main-color px-4 py-2 rounded-3xl font-medium uppercase text-sm hover:-translate-y-[2.5px] hover:bg-navbar-main transition-all'><a href='#menu'>our menu</a></button>
                    <button className='border-2 border-main-color px-4 py-2 rounded-3xl font-medium uppercase text-sm hover:-translate-y-[2.5px] hover:bg-navbar-main transition-all'><a href='#book-a-table'>book a table</a></button>
                </div>
            </div>
            <div className='video-btn shrink-0' />
        </div>
    )
}

export default Header

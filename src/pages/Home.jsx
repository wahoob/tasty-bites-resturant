import React from 'react'
import { Navbar, Header, Topbar, About, RotatingPlat, Menu, Chefs, BookTable, Footer, Contact } from '../containers'

const Home = () => {
    return (
        <div>
            <Topbar />
            <Navbar />
            <Header />
            <About />
            <Menu />
            <div className='flex justify-center bg-custom-bg py-12'>
                <hr className='border-dotted border-0 border-b-[10px] border-[#BB7770] w-1/4 hover:border-[#874239]' />
            </div>
            <RotatingPlat />
            <Chefs />
            <BookTable />
            <div className='flex justify-center bg-custom-bg py-20'>
                <hr className='border-dotted border-0 border-b-[10px] border-[#BB7770] w-1/4 hover:border-[#874239]' />
            </div>
            <Contact />
            <Footer />
        </div>
    )
}

export default Home

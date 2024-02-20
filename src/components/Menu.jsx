import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../context'
import { FaAnglesLeft, FaAnglesRight, FaArrowDown, FaArrowUp } from 'react-icons/fa6'
import SectionHeader from './SectionHeader'
import DropDown from './DropDown'
import assest2 from '../images/assest-2.png'
import assest1 from '../images/assest-1.png'
import plat2 from '../images/plat-2.png'

const TRANSLATE_AMOUNT = 100

const Menu = () => {
    const { categories, currentCategory, setCurrentCategory, currentList, currentPage, setCurrentPage, pages, loading } = useGlobalContext()
    const [isLeftVisible, setIsLeftVisible] = useState(false)
    const [isRightVisible, setIsRightVisible] = useState(false)
    const [translate, setTranslate] = useState(0)
    const containerRef = useRef()
    useEffect(() => {
        if (containerRef.current === null) return
        const observer = new ResizeObserver(entries => {
            const container = entries[0]?.target
            setIsLeftVisible(translate > 0)
            setIsRightVisible(translate + container.clientWidth < container.scrollWidth)
        })
        observer.observe(containerRef.current)

        return () => observer.disconnect()
    }, [pages, translate])
    return (
        <div className='bg-custom-bg py-8 px-32 max-lg:px-10 relative' id='menu'>
            <img src={assest1} alt='assest' className='absolute left-1/2 -translate-x-1/3 bottom-72 size-52' />
            <img src={plat2} alt='assest' className='absolute -right-32 -top-10 -translate-x-1/2 w-64 max-sm:w-48 max-sm:-right-24 max-sm:-top-32' />
            <img src={assest2} alt='assest' className='absolute -right-10 -left-10 top-24 size-32' />
            <SectionHeader title='menu' header='check our tasty menu' />
            {/* <DropDown array={categories} currentText={currentCategory} setCurrent={setCurrentCategory} />
            <DropDown array={areas} currentText={currentArea} setCurrent={setCurrentArea} /> */}
            <div className='mt-8'>
                <div className='flex items-center gap-4 pl-4'>
                    {/* <div className='flex items-center gap-4'> */}
                    {/* <div className='flex flex-col gap-2'>
                            <button className='bg-white px-1 py-1 rounded-full hover:bg-gray-300'>
                                <FaArrowUp className='size-3'
                                    onClick={() => setIndex(prev => prev + 1)}
                                />
                            </button>
                            <button className='bg-white px-1 py-1 rounded-full hover:bg-gray-300'>
                                <FaArrowDown className='size-3'
                                    onClick={() => setIndex(prev => prev - 1)}
                                />
                            </button>
                        </div> */}
                    {/* <div className='relative w-24 h-12 flex justify-center items-center overflow-hidden'>
                            {FILTER_OPTIONS.map((option, index) => <p key={index}
                                className={`text-[#874239] uppercase text-lg max-sm:text-sm font-semibold translate-y-0 transition duration-200 absolute ${option !== filterBy && 'translate-y-14 opacity-0'}`}
                            >
                                {option}
                            </p>)}
                        </div> */}
                    {/* </div> */}
                    <p className='text-[#874239] uppercase text-lg max-sm:text-sm font-semibold'>category</p>
                    <DropDown className='w-[12rem] max-sm:w-[9rem]' backgroundColor='bg-[#fff]' innerPaddingY='py-2' hover='bg-gray-100' top='top-14' arrowSize='size-6' array={categories} currentText={currentCategory} setCurrent={setCurrentCategory} />
                </div>
                <div className='mt-8 grid grid-cols-auto-14 max-sm:grid-cols-auto-8 gap-x-8 gap-y-12'>
                    {currentList.map(meal => {
                        const { idMeal, strMeal, strMealThumb } = meal
                        return (
                            <div className='flex flex-col justify-center items-center cursor-pointer transition hover:scale-105 z-10' key={idMeal}>
                                <img src={strMealThumb} alt={strMeal} className='size-32 rounded-full border-[3px] border-custom-red' />
                                <h3 className='text-lg max-sm:text-xs mt-4 font-semibold text-custom-red text-center'>{strMeal.length < 20 ? strMeal : `${strMeal.slice(0, 20)}...`}</h3>
                                <button className='mt-2 text-xs max-sm:text-[0.5rem] bg-gray-50 px-2 py-1 rounded text-custom-red font-medium hover:bg-gray-100'>Read More</button>
                            </div>
                        )
                    })}
                </div>
                <div className='flex justify-center'>
                    <div className={`flex mt-12 text-custom-red overflow-x-hidden max-md:text-sm relative`}
                        ref={containerRef}
                    >
                        {isLeftVisible && (
                            <button className='flex items-center pl-1 absolute bg-gradient-to-r from-custom-bg from-50% to-transparent w-14 h-full rounded z-10'
                                onClick={() => {
                                    setTranslate(prev => {
                                        const newTranslate = prev - TRANSLATE_AMOUNT
                                        if (newTranslate <= 0) return 0
                                        return newTranslate
                                    })
                                }}
                            >
                                <FaAnglesLeft />
                            </button>
                        )}
                        <div className={`flex items-center gap-3 transition`} style={{ transform: `translateX(-${translate}px)` }}>
                            {Array.from(Array(pages).keys()).map(page =>
                                <div
                                    key={page}
                                    className={`cursor-pointer hover:text-[#A97787] ${page + 1 === currentPage && 'underline font-bold hover:text-custom-red'}`}
                                    onClick={() => setCurrentPage(page + 1)}
                                >
                                    {page + 1}
                                </div>
                            )}
                        </div>
                        {isRightVisible && (
                            <button className='flex items-center justify-end pr-1 absolute right-0 bg-gradient-to-l from-custom-bg from-50% to-transparent w-14 h-full rounded z-10'
                                onClick={() => {
                                    setTranslate(prev => {
                                        if (!containerRef.current) return prev
                                        const fullWidth = containerRef.current.scrollWidth
                                        const shownWidth = containerRef.current.clientWidth
                                        const newTranslate = prev + TRANSLATE_AMOUNT
                                        if (newTranslate + shownWidth >= fullWidth) {
                                            return fullWidth - shownWidth
                                        } else {
                                            return newTranslate
                                        }
                                    })
                                }}
                            >
                                <FaAnglesRight />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Menu

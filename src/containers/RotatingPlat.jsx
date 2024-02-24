import React, { useEffect, useState } from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { plat, testimonials1, testimonials2, testimonials3, assest4, assest3 } from '../images'
import { SectionHeader } from '../components'
//icons
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

const testimonials = [
    { image: testimonials1, name: 'John D', text: 'Delicious dishes, outstanding service. A culinary gem! Will definitely return for more delightful experiences.' },
    { image: testimonials2, name: 'Michael S', text: 'Fantastic meals, inviting atmosphere. Highly recommend! Perfect for gatherings or intimate dinners. Truly enjoyable dining.' },
    { image: testimonials3, name: 'David R', text: 'Incredible experience, top-notch dishes. Absolutely loved it! A must-visit for food enthusiasts. Memorable flavors and impeccable service.' },
]


const RotatingPlat = () => {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        if (index > testimonials.length - 1) setIndex(0)
    }, [index])
    useEffect(() => {
        const timeout = setInterval(() => {
            setIndex(prev => prev + 1)
        }, 5000)
        return () => clearInterval(timeout)
    }, [index])
    return (
        <ParallaxProvider>
            <div className='w-full py-8 px-32 max-lg:px-10 bg-custom-bg relative'>
                <img src={assest3} alt='assest' className='absolute -left-5 -top-16 size-52' />
                <img src={assest4} alt='assest' className='absolute -right-0 -top-36 size-32' />
                <SectionHeader title='why us' header='why choose our restaurant' />
                <div className='max-lg:flex-col flex justify-between items-center mt-4 overflow-hidden'>
                    <div className='w-1/2 h-[20rem] max-sm:h-[33rem] overflow-hidden relative pt-3 pl-3 max-lg:w-full'>
                        {testimonials.map((rate, idx) => {
                            const { image, name, text } = rate
                            if (idx === index + 1) {
                                return <Testimonials key={idx} image={image} name={name} text={text} customStyle={'translate-x-[40rem] opacity-0'} />
                            }
                            if (index === idx) {
                                return <Testimonials key={idx} image={image} name={name} text={text} customStyle={'translate-x-0 opacity-1'} />
                            }
                            return (
                                <Testimonials key={idx} image={image} name={name} text={text} customStyle={'-translate-x-[40rem] opacity-0'} />
                            )
                        })}
                        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4 z-50'>
                            {testimonials.map((_, idx) => {
                                return (
                                    <div key={idx} className={`size-3 rounded-full bg-[#F9D6AC] cursor-pointer ${idx === index && 'bg-[#f3ad59]'}`}
                                        onClick={() => setIndex(idx)}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <Parallax
                        className='overflow-x-hidden'
                        rotate={[
                            '360deg',
                            '0deg'
                        ]}>
                        <img src={plat} alt='plat' className='w-full max-w-[25rem] h-auto' />
                    </Parallax>
                </div>
            </div>
        </ParallaxProvider>
    )
}

const Testimonials = ({ image, name, text, customStyle }) => {
    return (
        <div className={`max-sm:flex-col flex gap-6 max-sm:items-center absolute transition-all duration-500 ${customStyle}`}>
            <div className='relative rotate-image max-w-[14rem]'>
                <img src={image} alt={name} className='border-[3px] border-[#f9d6ac] h-auto lg:h-full object-cover w-full' />
            </div>
            <div className='pt-6 w-full text-custom-red'>
                <h2 className='text-2xl font-bold mb-3 max-sm:text-center'>{name}</h2>
                <p className='relative italic min-w-52'>
                    <ImQuotesLeft className='inline-block mr-2 relative -top-0.5 text-[#F9D6AC]' />
                    {text}
                    <ImQuotesRight className='inline-block ml-2 relative -top-0.5 text-[#F9D6AC]' />
                </p>
            </div>
        </div>
    )
}

export default RotatingPlat

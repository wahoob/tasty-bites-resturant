import React, { useState } from 'react'
import { food } from '../images'
import { DropDown } from '../components'
import { getDates, getTimes } from '../util'
//icons
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

const peopleArray = [
    { text: '1 PERSON' }, { text: '2 PERSON' }, { text: '3 PERSON' }, { text: '4 PERSON' }, { text: '5 PERSON' },
]

const BookTable = () => {
    const [currentPerson, setCurrentPerson] = useState(peopleArray[0].text)
    const [currentDate, setCurrentDate] = useState(getDates(7)[0].text)
    const [currentTime, setCurrentTime] = useState(getTimes(10, 22)[0].text)

    return (
        <div className='bg-custom-bg pt-24 px-10' id='book-a-table'>
            <div className='flex flex-col gap-24 items-center'>
                <div className='relative max-w-[25%] max-md:max-w-full'>
                    <ImQuotesLeft className='text-main-color size-5 max-md:size-4 absolute -top-8 -left-8' />
                    <h1 className='text-center uppercase text-3xl max-md:text-xl text-custom-red font-bold'>you have no idea what's at steak here!</h1>
                    <ImQuotesRight className='text-main-color size-5 max-md:size-4 absolute -bottom-8 -right-8' />
                </div>
                <img src={food} alt='food' className='max-w-[80%] w-full h-auto max-md:max-w-full' />
            </div>
            <div className='mt-24 flex flex-col gap-12'>
                <h1 className='text-center uppercase text-3xl max-md:text-xl text-custom-red font-bold'>book a table</h1>
                <div className='flex gap-4 flex-wrap'>
                    <DropDown backgroundColor='bg-custom-red' className='text-white text-xl flex-1' innerPaddingY='py-4' hover='bg-[#BB7770]' top='top-20 max-sm:top-16' arrowSize='size-8' optionsBackgroundColor='bg-[#782a20]' array={peopleArray} currentText={currentPerson} setCurrent={setCurrentPerson} />
                    <DropDown backgroundColor='bg-custom-red' className='text-white text-xl flex-1' innerPaddingY='py-4' hover='bg-[#BB7770]' top='top-20 max-sm:top-16' arrowSize='size-8' optionsBackgroundColor='bg-[#782a20]' array={getDates(7)} currentText={currentDate} setCurrent={setCurrentDate} />
                    <DropDown backgroundColor='bg-custom-red' className='text-white text-xl flex-1' innerPaddingY='py-4' hover='bg-[#BB7770]' top='top-20 max-sm:top-16' arrowSize='size-8' optionsBackgroundColor='bg-[#782a20]' array={getTimes(10, 22)} currentText={currentTime} setCurrent={setCurrentTime} />
                    <button className='bg-custom-red text-white py-2 rounded-md text-lg flex-1 min-w-max font-semibold hover:bg-[#BB7770]'>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default BookTable

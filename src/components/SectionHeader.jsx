import React from 'react'

const SectionHeader = ({ title, header }) => {
    return (
        <div>
            <div className='flex items-center gap-2 mb-2'>
                <h3 className='text-[#a97770] uppercase'>{title}</h3>
                <div className='w-32 h-[1.5px] bg-[#a97770]' />
            </div>
            <h1 className='text-4xl font-bold text-custom-red max-sm:text-2xl capitalize'>{header}</h1>
        </div>
    )
}

export default SectionHeader

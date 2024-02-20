import React, { useEffect, useRef, useState } from 'react'
import { RiArrowDropUpLine } from 'react-icons/ri'

const DropDown = ({ array, currentText, setCurrent, className, backgroundColor, innerPaddingY, hover, top, arrowSize, optionsBackgroundColor }) => {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef(null)
    const handleClick = (text) => {
        setCurrent(text)
        setIsOpen(false)
    }
    useEffect(() => {
        const handler = (e) => {
            if (!containerRef.current.contains(e.target)) setIsOpen(false)
        }
        document.addEventListener('mousedown', handler)
    }, [])
    return (
        <div ref={containerRef} className={`relative font-medium max-sm:text-sm min-w-max ${className}`}>
            <div className={`px-2 ${innerPaddingY} flex justify-between rounded-md shadow-md cursor-pointer ${backgroundColor}`} onClick={() => setIsOpen(!isOpen)}>
                <div className='px-2'>
                    {currentText}
                </div>
                <div>
                    <RiArrowDropUpLine className={`${arrowSize} max-sm:size-5 transition ${isOpen && 'rotate-180'}`} />
                </div>
            </div>
            <div className={`rounded-md shadow-lg px-2 py-2 max-sm:px-0 max-sm:py-0 w-full max-h-72 overflow-y-scroll absolute ${top} z-[999] ${optionsBackgroundColor || backgroundColor} ${!isOpen && 'hidden'}`}>
                <ul>
                    {array.map((element, index) => {
                        const { id, text, image } = element
                        if (text !== currentText) {
                            return (
                                <li key={id || index} className={`py-2 px-2 rounded-md flex gap-3 max-sm:gap-1 cursor-pointer hover:${hover}`}
                                    onClick={() => handleClick(text)}
                                >
                                    {image && <img src={image} alt={text} className='size-6' />}
                                    <div>
                                        {text}
                                    </div>
                                </li>
                            )
                        } else return null
                    })}
                </ul>
            </div>
        </div>
    )
}

export default DropDown

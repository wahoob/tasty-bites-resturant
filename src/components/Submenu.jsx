import React from 'react'
import { useGlobalContext } from '../context'

const Submenu = () => {
    const { location: { top, center }, submenuText } = useGlobalContext()
    console.log('top is ' + top)
    console.log('center is ' + center)
    return (
        <aside className='absolute -translate-x-1/2 -translate-y-1/2 top-0 left-0 transition' style={{ top: `${top - 20}px`, left: `${center}px`, transition: 'all 0.3s ease 0s' }}>
            <div className='h-fit bg-white px-3 py-1.5 rounded max-sm:text-xs'>
                {submenuText}
            </div>
        </aside>
    )
}

export default Submenu

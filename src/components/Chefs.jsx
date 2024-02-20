import React from 'react'
import chef1 from '../images/chef-1.jpg'
import chef2 from '../images/chef-2.jpg'
import chef3 from '../images/chef-3.jpg'
import Chef from './Chef'

const chefs = [
    { id: 0, name: 'Gordon Ramsay', job: 'Executive Chef', image: chef3 },
    { id: 1, name: 'Julia Child', job: 'Head Chef', image: chef2 },
    { id: 2, name: 'Thomas Keller', job: 'Sous Chef', image: chef1 },
]

const Chefs = () => {
    return (
        <div className='bg-chefs-bg bg-fixed bg-cover bg-bottom bg-no-repeat relative z-10 py-[5.53rem] px-32 max-lg:px-10' id='chefs'>
            <h2 className='font-semibold text-5xl max-sm:text-3xl text-center text-white mb-12'>Our Proffesional Chefs</h2>
            <div className='flex justify-between items-center gap-8 max-md:flex-col'>
                {chefs.map(chef => {
                    const { id, name, job, image } = chef
                    return <Chef key={id} name={name} job={job} image={image} />
                })}
            </div>
            <div className='absolute inset-0 bg-navbar-main -z-10' />
        </div>
    )
}

export default Chefs

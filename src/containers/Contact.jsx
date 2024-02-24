import React from 'react'
//icons
import { FaLocationDot } from 'react-icons/fa6'
import { IoMdTime } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'
import { SlScreenSmartphone } from 'react-icons/sl'

const contactInfo = [
    { icon: FaLocationDot, header: 'Location', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { icon: IoMdTime, header: 'Open Hours', text: 'Saturday-Thursday: 10 AM - 10 PM' },
    { icon: MdOutlineEmail, header: 'Email', text: 'info@example.com' },
    { icon: SlScreenSmartphone, header: 'Call', text: '+20 101 234 5678' },
]

const Info = ({ Icon, header, text }) => {
    return (
        <div className='flex items-start gap-3'>
            <div className='bg-[#F3AD59] p-3 rounded-full'>
                <Icon className='size-5 text-[#fff]' />
            </div>
            <div>
                <h4 className='font-semibold text-custom-red'>{header}</h4>
                <p className='md:max-w-[18rem] text-zinc-600'>{text}</p>
            </div>
        </div>
    )
}

const CustomInput = ({ placeholder, className }) => {
    return (
        <div className={`${className} relative`}>
            <input placeholder={placeholder} className={`w-full p-2 bg-transparent border-2 border-zinc-500 placeholder:text-sm placeholder:text-zinc-500 outline-none input-effect`} />
            <span className='border-y'>
                <div className='border-x'></div>
            </span>
        </div>
    )
}

const Contact = () => {
    return (
        <div id='contact'>
            <iframe className='w-full h-80' title='random loc' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d217902.48592329837!2d31.97668177178069!3d31.4216649973106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1708453987099!5m2!1sen!2seg" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className='py-[5.3rem] px-32 max-lg:px-10 flex justify-between bg-custom-bg gap-6 max-md:flex-col max-md:items-center'>
                <div className='flex flex-col gap-6'>
                    {contactInfo.map((contact, index) => {
                        const { icon, header, text } = contact
                        return <Info key={index} Icon={icon} header={header} text={text} />
                    })}
                </div>
                <div className='flex flex-col gap-8 flex-1'>
                    <div className='flex gap-8 w-full'>
                        <CustomInput placeholder='Your Name' className='flex-1' />
                        <CustomInput placeholder='Your Email' className='flex-1' />
                    </div>
                    <CustomInput placeholder='Subject' />
                    <textarea placeholder='Message' className='p-2 bg-transparent border-2 placeholder:text-sm placeholder:text-zinc-500 min-h-24 border-zinc-500 outline-none transition duration-200 focus:border-main-color' />
                    <button className='mx-auto bg-[#F3AD59] py-2 px-6 rounded-2xl text-[#fff] hover:-translate-y-[2.5px] hover:bg-main-color'>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact

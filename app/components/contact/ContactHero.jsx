
import {AiOutlineRight} from 'react-icons/ai'
import {ImHome} from 'react-icons/im'
import Image from "next/image"
import curve from '@/public/images/curve-5.png'

function ContactHero() {
    return (
        <div className='w-full bg-white pb-10'>
            <div className="flex justify-end">
                <span className="">
                    <Image src={curve} height={400} width={1000} />
                </span>
            </div>
            <div className='container flex flex-col gap-2 mt-5 md:-mt-5'>
                <h1 className=" md:ml-10 text-3xl md:text-6xl font-bold text-gray-800">Contact</h1>
                <div className=' md:ml-11 flex gap-1 items-center'>
                    <span className='text-lg text-gray-700'><ImHome/></span>
                    <p className='text-lg text-gray-800 font-medium'>Home</p>
                    <span className='text-lg text-gray-600'><AiOutlineRight/></span>
                    <span className='text-lg text-gray-600'>Contact</span>
                </div>
            </div>
        </div>
    )
}

export default ContactHero
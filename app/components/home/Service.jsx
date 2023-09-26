
import { SiMarketo } from 'react-icons/si'
import {AiOutlinePieChart} from 'react-icons/ai'
import {FaLaptopMedical} from 'react-icons/fa'
import {PiLightbulbBold} from 'react-icons/pi'
import {BsGraphUp} from 'react-icons/bs'
import {FaReact} from 'react-icons/fa'

function Service() {
    return (
        <div className='w-full bg-white'>
            <div className='container mx-auto'>
                <h1 className='text-2xl md:text-4xl  text-center font-bold text-gray-800 pb-5 md:pb-9'>Our Services</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-10'>
                    <div className='flex flex-col gap-5 group py-4 '>
                        <div className='flex justify-center'>
                            <span className='bg-sky-100 py-10 px-14 text-gray-800 radius group-hover:bg-blue-600 group-hover:text-white duration-300'><SiMarketo size={40} /></span>
                        </div>
                        <h3 className='group-hover:text-blue-500 duration-300 text-xl text-gray-950 font-medium text-center'>Marketing Consultancy</h3>
                        <p className='text-base text-gray-700 text-center'>Brand Awareness. Lead Generation. Marketing Strategies.</p>
                    </div>

                    <div className='flex flex-col gap-5 group py-4 '>
                        <div className='flex justify-center'>
                            <span className='bg-sky-100 py-10 px-14 text-gray-800 radius group-hover:bg-blue-600 group-hover:text-white duration-300'><AiOutlinePieChart size={40} /></span>
                        </div>
                        <h3 className='group-hover:text-blue-500 duration-300 text-xl text-gray-950 font-medium text-center'>Digital Marketing</h3>
                        <p className='text-base text-gray-700 text-center'>Search Engine Optimization,SociaI Media Marketing, Email Marketing.</p>
                    </div>

                    <div className='flex flex-col gap-5 group py-4 '>
                        <div className='flex justify-center'>
                            <span className='bg-sky-100 py-10 px-14 text-gray-800 radius group-hover:bg-blue-600 group-hover:text-white duration-300'><FaLaptopMedical size={40} /></span>
                        </div>
                        <h3 className='group-hover:text-blue-500 duration-300 text-xl text-gray-950 font-medium text-center'>Graphic/Motion Design</h3>
                        <p className='text-base text-gray-700 text-center'>Logos, Brochures, Social Media Posts, Motion Design Etc.</p>
                    </div>

                    <div className='flex flex-col gap-5 group py-4 '>
                        <div className='flex justify-center'>
                            <span className='bg-sky-100 py-10 px-14 text-gray-800 radius group-hover:bg-blue-600 group-hover:text-white duration-300'><PiLightbulbBold size={40} /></span>
                        </div>
                        <h3 className='group-hover:text-blue-500 duration-300 text-xl text-gray-950 font-medium text-center'>Photography/ Videography</h3>
                        <p className='text-base text-gray-700 text-center'>Product Photography, Portfolio Shoots, Commercial Ads & Much More</p>
                    </div>

                    <div className='flex flex-col gap-5 group py-4 '>
                        <div className='flex justify-center'>
                            <span className='bg-sky-100 py-10 px-14 text-gray-800 radius group-hover:bg-blue-600 group-hover:text-white duration-300'><BsGraphUp size={40} /></span>
                        </div>
                        <h3 className='group-hover:text-blue-500 duration-300 text-xl text-gray-950 font-medium text-center'>Traditional Marketing</h3>
                        <p className='text-base text-gray-700 text-center'>Tele Marketing. Media Marketing. Outdoor Marketing Etc</p>
                    </div>

                    <div className='flex flex-col gap-5 group py-4 '>
                        <div className='flex justify-center'>
                            <span className='bg-sky-100 py-10 px-14 text-gray-800 radius group-hover:bg-blue-600 group-hover:text-white duration-300'><FaReact size={40} /></span>
                        </div>
                        <h3 className='group-hover:text-blue-500 duration-300 text-xl text-gray-950 font-medium text-center'>Company Products Guide</h3>
                        {/* <p className='text-base text-gray-700 text-center'>Brand Awareness. Lead Generation. Marketing Strategies.</p> */}
                    </div>  

                </div>
            </div>
        </div>
    )
}

export default Service

import Image from "next/image"
import heroImg from '@/public/images/art.jpg'


function Hero() {
  return (
    <div className='w-full bg-white'>
        <div className='container h-screen flex flex-col md:flex-row justify-evenly items-center gap:20 md:gap-28 pt-14'>
            <div className='flex flex-col gap-5 md:gap-8 '>
                <div>
                    <h1 className='text-4xl text-gray-800 font-bold leading-[50px]'>Digital Marketing, <br /> <span className='text-blue-500'>Finance And More</span></h1>
                </div>
                <button className='px-5 py-3 shadow-lg bg-blue-600 rounded-full w-48 text-white font-medium text-lg hover:bg-white hover:text-blue-600 duration-300'>Start Exploring</button>
            </div>
            <div>
                <span>
                    <Image src={heroImg} width={530} height={500} alt="heroimg" />
                </span>
            </div>
        </div>
    </div>
  )
}

export default Hero
"use client"

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

import { AiFillStar } from 'react-icons/ai'
import quote from '@/public/images/quote.png'
import curve from '@/public/images/curve-3.png'

function Testimonial() {
  return (
    <div className='w-full bg-white'>
      <div className='absolute right-0 '>
        <span>
          <Image src={curve} height={600} width={300} alt='img'/>
        </span>
      </div>
      <div className='container mb-20 border border-b border-t-0'>
        <div className='flex flex-col justify-center items-center pb-6 md:pb-16'>
          <h1 className='text-2xl md:text-4xl  text-gray-800 font-bold '>Testimonials</h1>
        </div>
        <div>
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode, Autoplay]}
            className="mySwipe"
            loop={true}
            speed={2000}
            autoplay={{
              delay: 1000,
            }}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className='max-w-5xl mx-auto p-4 flex flex-col gap-2'>
                <div className='flex flex-col justify-start items-center'>
                  <p className='text-lg md:text-xl italic mb-5 text-gray-700'>“As a online coaching initiative we tied up with Grayscale Digitals for our
                    branding, logo design and go to market
                    strategy and we were not disappointed. They did a great job in segmenting our
                    audience and created an effective social
                    media strategy for us.”</p>
                </div>
                <div>
                  <span className='flex items-center gap-1 text-yellow-400 text-lg'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='flex items-center gap-2'>
                    <h3 className='text-lg md:text-xl font-normal text-gray-700'>Akshay</h3>
                    <p className='text-base text-gray-700'>- Data.A2P</p>
                  </span>
                  <span>
                    <Image src={quote} height={40} width={40} alt='img' />
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='max-w-5xl mx-auto p-4 flex flex-col gap-2'>
                <div className='flex flex-col justify-start items-center'>
                  <p className='text-lg md:text-xl italic mb-5 text-gray-700'>“Considering the Urgency of Brand Identity Design & Letterhead for our firm,
                    Team Grayscale Digitals were keen in
                    delivering the services way before their promised time and above that not
                    compromising over the quality & the design
                    aesthetics! It was an amazing purchase experience with the Grayscale Digitals.”</p>
                </div>
                <div>
                  <span className='flex items-center gap-1 text-yellow-400 text-lg'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='flex items-center gap-2'>
                    <h3 className='text-lg md:text-xl font-normal text-gray-700'>Parimal Borkar</h3>
                    <p className='text-base text-gray-700'>- PPB Constructions</p>
                  </span>
                  <span>
                    <Image src={quote} height={40} width={40} alt='img' />
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='max-w-5xl mx-auto p-4 flex flex-col gap-2'>
                <div className='flex flex-col justify-start items-center'>
                  <p className='text-lg md:text-xl italic mb-5 text-gray-700'>“Overall great experience working with grayscale digital, they value their
                    customers and ensures customer are satisfied
                    with their services.”</p>
                </div>
                <div>
                  <span className='flex items-center gap-1 text-yellow-400 text-lg'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='flex items-center gap-2'>
                    <h3 className='text-lg md:text-xl font-normal text-gray-700'>Ketan Patil</h3>
                    <p className='text-base text-gray-700'>- GEP</p>
                  </span>
                  <span>
                    <Image src={quote} height={40} width={40} alt='img' />
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='max-w-5xl mx-auto p-4 flex flex-col gap-2'>
                <div className='flex flex-col justify-start items-start'>
                  <p className='text-lg md:text-xl italic mb-5 text-gray-700'>“Was great experience with grayscale team genuine people top work.”</p>
                </div>
                <div>
                  <span className='flex items-center gap-1 text-yellow-400 text-lg'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='flex items-center gap-2'>
                    <h3 className='text-lg md:text-xl font-normal text-gray-700'>Kunal</h3>
                    <p className='text-base text-gray-700'></p>
                  </span>
                  <span>
                    <Image src={quote} height={40} width={40} alt='img' />
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='max-w-5xl mx-auto p-4 flex flex-col gap-2'>
                <div className='flex flex-col justify-start items-start'>
                  <p className='text-lg md:text-xl italic mb-5 text-gray-700'>“It was an amazing experience with grayscale.”</p>
                </div>
                <div>
                  <span className='flex items-center gap-1 text-yellow-400 text-lg'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                </div>
                <div className='flex justify-between items-start'>
                  <span className='flex items-center gap-2'>
                    <h3 className='text-lg md:text-xl font-normal text-gray-700'>Shadab Khan</h3>
                    <p className='text-base text-gray-700'></p>
                  </span>
                  <span>
                    <Image src={quote} height={40} width={40} alt='img' />
                  </span>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

      </div>
    </div>
  )
}

export default Testimonial
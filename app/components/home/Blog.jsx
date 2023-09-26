'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

import curve from '@/public/images/curve-4.png'
import { blogImg } from '@/public/data'

function Blog() {
    return (
        <div className='w-full bg-white'>
            <div className='absolute'>
                <Image src={curve} height={400} width={280} alt='img' />
            </div>
            <div className='container py-14'>
                <h1 className='text-2xl md:text-4xl font-bold text-gray-800 text-center'>Our Latest Blogs</h1>
                <div className='mt-14'>
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
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 5
                            },
                            580: {
                                slidesPerView: 2,
                                spaceBetween: 5
                            },
                            820: {
                                slidesPerView: 2,
                                spaceBetween: 5
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 5
                            }
                        }}
                    >
                        
                        {
                            blogImg?.map((img, val)=>(
                                <SwiperSlide key={val}>
                                    <div className='w-[320px] md:w-[380px]' >
                                        <Image src={img.img} height={200} width={380} alt='img' />
                                    </div>
                                </SwiperSlide>
                            ))
                        }


                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Blog
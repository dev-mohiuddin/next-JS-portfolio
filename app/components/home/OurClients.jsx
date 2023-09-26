"use client"

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

import { clientImg } from '@/public/data'

function OurClients() {
    return (
        <div className='w-full bg-white'>
            <div className='container'>
                <div className='flex flex-col gap-2 justify-center items-center py-2 md:py-6'>
                    <h1 className='text-2xl md:text-4xl  text-gray-800 font-bold '>Our Clientele</h1>
                    <p className='text-lg font-medium text-gray-700'>We stay on top of our industry by being experts in yours.</p>
                </div>
                <div className='mt-16'>

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
                                spaceBetween: 20
                            },
                            580: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            820: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            }
                        }}
                    >

                        {
                            clientImg?.map((img) => (
                                <SwiperSlide key={img.id}>
                                    <div>
                                        <Image src={img.img} width={300} height={300} alt='client' />
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

export default OurClients
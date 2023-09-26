'use client'

import {FaBars} from 'react-icons/fa'
import {AiOutlineArrowUp} from 'react-icons/ai'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

import MobileMenu from '../MobileMenu'
import logo from '@/public/images/logo.png'

function Navbar() {

    const [navbar, setNavbar] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(()=>{      
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                setNavbar(true)
            }else{
                setNavbar(false)
            }
        })
    },[])

    const scrollToTop = ()=>{
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    }

    const active = ()=>{
        setMobileMenu(true)
    }

    return (
        <div className={`${ navbar ? "bg-[#e0f2fe] " : '' } fixed z-50 w-full duration-300`}>
            <div className='fixed right-5 bottom-5 md:right-10 md:bottom-10'>
                <span onClick={scrollToTop} title='Scroll to top' className={`${navbar ? "flex" : 'hidden' } justify-center items-center h-10 w-10 bg-blue-600 rounded-full text-white cursor-pointer hover:bg-gray-950 duration-300`}><AiOutlineArrowUp size={25} /></span>
            </div>
            <div className='container'>
                <nav className='flex justify-between items-center h-[70px] md:h-24'>
                    <div className="flex w-36 md:w-60 justify-center items-center cursor-pointer">
                        <Link href="/" ><Image src={logo} height={100} width={220} alt="logo" /></Link>
                    </div>
                    <div className=' md:hidden'>
                        <span onClick={active} className='text-gray-800'><FaBars size={23} /></span>
                    </div>
                    {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
                    <div className="hidden md:flex gap-5 list-none text-lg font-medium">
                        <li className="text-gray-600 hover:text-blue-500 duration-200"><Link href="/">Home</Link></li>
                        <li className="text-gray-600 hover:text-blue-500 duration-200"><Link href="/services">Services</Link></li>
                        {/* <li className="text-gray-600 hover:text-blue-500 duration-200"><Link href="">Blog / Quotes</Link></li>
                        <li className="text-gray-600 hover:text-blue-500 duration-200"><Link href="">Clientele</Link></li>
                        <li className="text-gray-600 hover:text-blue-500 duration-200"><Link href="">Testimonials</Link></li>
                        <li className="text-gray-600 hover:text-blue-500 duration-200"><Link href="">Payment</Link></li>
                        <li className="text-gray-600 hover:text-blue-500 duration-200"><Link href="">About</Link></li> */}
                        <li className="text-gray-600 hover:text-blue-500 duration-200"><Link href="/contact">Contact</Link></li>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
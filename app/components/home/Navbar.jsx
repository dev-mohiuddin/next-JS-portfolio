'use client'

import {FaBars} from 'react-icons/fa'
import {AiOutlineArrowUp} from 'react-icons/ai'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation'

import MobileMenu from '../MobileMenu'
import { navLink } from '@/public/data'
import logo from '@/public/images/logo.png'

function Navbar() {

    const router = usePathname();
    const [navbar, setNavbar] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(()=>{      
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 80){
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
                        {
                            navLink?.map((link, val)=>(
                                <li key={val}  className={`${ router == link.path ? 'text-blue-600 border-2 border-b-blue-600 border-x-0 border-t-0' : '' } text-gray-600 hover:text-blue-500 duration-200`}><Link href={link.path} >{link.name}</Link></li>
                            ))
                        }
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
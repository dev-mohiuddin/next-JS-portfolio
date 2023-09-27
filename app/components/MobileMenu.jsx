
import { useParams } from 'next/navigation'
import Link from 'next/link'
import {RxCross2} from 'react-icons/rx'
import { navLink } from '@/public/data'

function MobileMenu({setMobileMenu}) {

  const router = useParams()

  return (
    <div className='absolute flex justify-end w-full h-screen bg-black/30 top-0  right-0'>
        <div className='w-[300px] bg-white h-screen'>
            <span onClick={()=>setMobileMenu(false)} className='text-gray-800 absolute right-5 top-5'><RxCross2 size={25} /></span>
            <div className='mt-14 px-8'>
              <div>
                {navLink?.map((link, val)=>(
                   <li  key={val}  className={`${ router == link.path ? 'text-blue-600 border-2 border-b-blue-600 border-x-0 border-t-0' : '' } text-gray-600 hover:text-blue-500 duration-200 list-none`}><Link onClick={()=> setMobileMenu(false)} className='py-1 flex flex-col text-lg font-medium text-gray-800' href={link.path} >{link.name}</Link></li>
                ))}
              </div>
            </div>
        </div>

    </div>
  )
}

export default MobileMenu

import {RxCross2} from 'react-icons/rx'

function MobileMenu({setMobileMenu}) {
  return (
    <div className='absolute flex justify-end w-full h-screen bg-black/30 top-0  right-0'>
        <div className='w-5/6 bg-white h-screen'>
            <span onClick={()=>setMobileMenu(false)} className='text-gray-800 absolute right-5 top-5'><RxCross2 size={25} /></span>
        </div>

    </div>
  )
}

export default MobileMenu
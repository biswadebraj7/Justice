import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Container from './Container';
import logo from "../../assets/image/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen]= useState(false)
  const closeModal=()=>{
    setIsModalOpen(false)
  }

  const Links=<>
  <li> <Link to={'/'} className=' font-normal text-base text-black text-center'>Home</Link> </li>
  <li> <Link to={'/'} className=' font-normal text-base text-black text-center'>Services  </Link> </li>
  <li> <Link to={'/'} className=' font-normal text-base text-black text-center'>Cases  </Link> </li>
  <li> <Link to={'/'} className=' font-normal text-base text-black text-center'>Blog</Link> </li>
  <li> <Link to={'/'} className=' font-normal text-base text-black text-center'>Contact Us</Link> </li>

  </>
  return (
  <div className='fixed w-full bg-white z-10 shadow-sm'>
    <div className='py-4  border-b-[1px]'>
      <Container >
      <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <NavLink to={'/'}><img src={logo} alt="" /></NavLink>
            {/* Dropdown Menu */}
            <div className='relative'>
              <div className='flex flex-row items-center gap-3 mx-auto'>
                {/* Become A Host btn */}
                <div className='hidden md:block mx-auto'>
                  {/* {user && ( */}
                  <ul className=' flex items-center justify-center mr-12 gap-6'>
{Links}
                  </ul>
                    
                  {/* // )} */}
                </div>
                {/* Dropdown btn */}
                
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                  <AiOutlineMenu />
                  <div className='hidden md:block'>
                    {/* Avatar */}
                    
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                  <div className='flex flex-col cursor-pointer'>
                    <Link
                      to='/'
                      className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                    >
                      Home
                    </Link>

                  
                      <>
                      
                   
                        <Link
                          to='/login'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Login
                        </Link>
                        <Link
                          to='/singup'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Sign Up
                        </Link>
                      </>
                 
                  </div>
                </div>
              )}
            </div>
          </div>
   
      </Container>
    </div>
  </div>
  )
}

export default Navbar
{/* <nav className=' flex w-full mx-auto items-center justify-between py-12'>
<div>
  <NavLink to={'/'}><img src={logo} alt="" /></NavLink>
</div>
<div>
  <ul className=' flex justify-center items-center gap-8'>
    {Links}
  </ul>

</div>
<div>
  <NavLink  className="font-semibold bg-[#B68C5A] px-6 py-4 text-lg text-[#FFFFFF] shadow-md rounded-md"> Free Consultation</NavLink> 
</div>

</nav> */}
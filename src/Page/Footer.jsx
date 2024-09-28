import React from 'react'
import Container from '../Component/Share/Container'
import logo from "../assets/image/logo.png"
import { Link } from 'react-router-dom'
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
<>
      <div className='bg-[#263238]'>
        <Container>
        <footer className="footer bg-[#263238] text-white w-full py-10 gap-4">
   <aside>
   <img src={logo} alt="logo" />
    <p className=' text-base font-normal  max-w-sm w-56 pt-3'>
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title font-extrabold text-2xl mb-4">Usefull Link</h6>
    <Link className="link link-hover font-normal text-base pb-2">Homes</Link>
    <Link className="link link-hover font-normal text-base pb-2">About Us</Link>
    <Link className="link link-hover font-normal text-base pb-2">Cases</Link>
    <Link className="link link-hover font-normal text-base pb-2">Blog</Link>
    <Link className="link link-hover font-normal text-base pb-2">Contact Us</Link>


  </nav>
  <nav>
    <h6 className="footer-title font-extrabold text-2xl mb-4">Contact Now</h6>
   <p className=' text-center text-white font-normal text-base'>555 4th 5t NW, Washington</p>
   <p className=' text-center text-white font-normal text-base'>DC 20530, United States</p>

   <p className=' text-center text-white font-normal text-base'>+88 01750 000 000</p>

   <p className=' text-center text-white font-normal text-base'>+88 01750 000 000</p>
   
   <p className=' text-center text-white font-normal text-base pt-2'>info@gmail.com</p>
   
   <p className=' text-center text-white font-normal text-base'>info@gmail.com</p>

  </nav>
  <form>
    <h6 className="footer-title font-extrabold text-2xl mb-4 ">Subscribe</h6>
    <p className=' text-base font-normal  max-w-sm w-56 pt-3'>Subscribe for our latest & Articles. We Won’t Give You Spam Mails</p>
    <fieldset className="form-control w-80">

      <div className="join">
        <input
          type="text"
          placeholder="Email Address"
          className="input input-bordered join-item" />
        <button className="btn bg-[#B68C5A] join-item"><FaTelegramPlane className=' text-white font-bold text-xl' /></button>
      </div>
    </fieldset>
  </form>
</footer>
        </Container>
      </div>
</>
  )
}

export default Footer

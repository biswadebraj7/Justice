import React from 'react'
import banner from "../../assets/image/banner.png"
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div
  className="hero min-h-[550px]"
  style={{
    backgroundImage: `url(https://i.ibb.co.com/58211dF/banner.png)`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className=" max-w-4xl mx-auto">
      <h1 className="mb-5 text-7xl font-extrabold">We Provide Effective </h1>
      <h1 className="mb-5 text-7xl font-extrabold"> Legal Solutions</h1>
    <div className=' max-w-xl mx-auto'>
    <p className="mb-5 font-normal text-center text-base text-white">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
      </p>
    </div>
     <div className=' flex justify-center gap-4 items-center'>
     <input type="text" placeholder="Search your services" className="input w-full max-w-xs  font-normal text-base" />
     <Link className="btn bg-[#B68C5A] btn-active text-white font-semibold text-xl px-8">Search</Link>

     </div>
    </div>
  </div>
</div>
  )
}

export default Banner

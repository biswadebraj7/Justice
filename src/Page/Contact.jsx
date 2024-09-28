import React, { useEffect, useState } from 'react'
import Title from '../Component/Share/Title'

const Contact = () => {
    const [cont, setCont]= useState([])
    useEffect(()=>{
        fetch("Contact.json")
        .then((res)=>res.json())
        .then((data)=>setCont(data))
    },[])
  return (
    <div>
      <Title heading={"Contact With Us"} paragrap={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."}></Title>

      <div className="hero  gap-6 min-h-screen -mb-4 -mt-4">
  <div className="hero-content flex-col lg:flex-row w-full ">
<div  className=' grid md:grid-cols-2 sm:grid-cols-2 gap-2 w-full'>

{
    cont.map((item)=><div className="card bg-[#F3F3F3]">
    <figure className="pt-8">
      <img
        src={item.image}
        alt="Shoes"
        className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title text-2xl font-extrabold text-[#464545]">{item.title}</h2>
      <p className=' text-base font-normal'>{item.name}</p>
      <p className=' text-base font-normal'>{item.times}</p>
      
    </div>
  </div>)
}




</div>
    <div className="card  w-full md:max-w-md   shrink-0 ">
      <form className="card-body">
        <div className="form-control w-full">
    
          <input type="text" placeholder="Your Name" className="input input-bordered p-3 font-normal text-base bg-[#F3F3F3]" required />
        </div>
        <div className="form-control mt-4  w-full">
    
          <input type="email" placeholder="Your Name" className="input  p-3 input-bordered font-normal text-base bg-[#F3F3F3]" required />
        </div>
        <div className="form-control mt-4 w-full">
    
          <input type="text" placeholder="Your Name" className="input p-3 input-bordered font-normal text-base bg-[#F3F3F3]" required />
        </div>
        <div className="form-control mt-4 w-full">
        <textarea
  placeholder="Your Message"
  className="textarea textarea-bordered  h-[162px] w-full  font-normal text-base bg-[#F3F3F3]"></textarea>
        </div>
        <div className="form-control mt-4">
          <button className="btn bg-[#B68C5A]  text-white font-semibold text-xl">Send Message</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Contact

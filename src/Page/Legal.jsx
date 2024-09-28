import React, { useEffect, useState } from 'react'
import Container from '../Component/Share/Container'
import Title from '../Component/Share/Title'

const Legal = () => {
  const [lows, setLows]= useState([]);
  useEffect(()=>{
      fetch("Low.json")
      .then((res)=>res.json())
      .then((data)=>setLows(data))
  },[])
  return (
    <div className=' '>
        <Container>
            <Title heading={"The Legal Practice Area"}  paragrap={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."}></Title>
        </Container>

        <div className='  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
          {
            lows.map((item)=><div className="card bg-base-100  hover:shadow-xl w-full hover:bg-[#E7E7E7] ">
            <figure className="px-10 pt-10">
              <img
              src={item.image}
                alt="photo"
                className="rounded-lg" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-extrabold text-3xl">{item.title}</h2>
              <p className=' text-base font-normal  text-center py-4'>{item.describe}</p>
              <div className="card-actions">
                <button className="btn"><img src={item.icon} alt="icon" /></button>
              </div>
            </div>
          </div>)
          }
 
        </div>
      
    </div>
  )
}

export default Legal

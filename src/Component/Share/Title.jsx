import React from 'react'

const Title = ({heading, paragrap}) => {
  return (
    <div className=' py-12'>
        
        <h1 className=' font-extrabold text-4xl  text-[#414040] text-center'>{heading}</h1>
        <p className=' text-center max-w-xl mx-auto  text-base mt-4 font-normal'>{paragrap}</p>
    </div>
  )
}

export default Title

import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[1170px] mx-auto w-full xl:px-20 md:px-10 sm:px-2 px-4'>
      {children}
      
    </div>
  )
}

export default Container

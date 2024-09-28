import React from 'react'
import Banner from '../Component/Banner/Banner'
import Container from '../Component/Share/Container'
import Legal from './Legal'
import Questions from '../Component/Questions'
import Contact from './Contact'


const Home = () => {
  return (
    <div >
      <Container>
        <Banner />
        <Legal />
        <Questions />
        <Contact />
      </Container>
     
      
    </div>
  )
}

export default Home

import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import MySkills from '../components/MySkills'
import Portfolio from '../components/Portfolio'

const Home = () => {
  return (
    <div className='max-w-5xl mx-auto p-3'>
      <Hero />
      <About />
      <MySkills />
      <Portfolio />
    </div>
  )
}

export default Home
import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'

const Home = () => {
  return (
    <div className='max-w-5xl mx-auto p-3'>
      <Hero />
      <About />
    </div>
  )
}

export default Home
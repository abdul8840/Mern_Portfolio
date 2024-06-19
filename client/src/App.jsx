import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SingIn from './pages/SingIn';
import Dashboard from './pages/Dashboard';


const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/sign-in' element={<SingIn />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
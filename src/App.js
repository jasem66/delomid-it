import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { Footer, Navbar } from './components'
import { Blog, Career, Contact, Home, OurServices } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/our services' element={<OurServices />} />
        <Route exact path='/career' element={<Career />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/blog' element={<Blog />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

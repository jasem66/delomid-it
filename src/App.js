import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux' 
import './App.scss'
import {
  BackToTopBtn,
  Error,
  Footer,
  Loading,
  Navbar,
  SingleJob,
} from './components'
import {
  Blog,
  Career,
  Contact,
  Home,
  OurServices,
  BusinessIntelligence,
  DigitalOnline,
} from './pages'

function App() {
  const [loading, setLoading] = useState(true)
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/our-services' element={<OurServices />} />
          <Route exact path='/career' element={<Career />} />
          {/* <Route exact path='/career/:id' element={<SingleJob />} /> */}
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/blog' element={<Blog />} />

          <Route
            exact
            path='/our-services/business-intelligence'
            element={<BusinessIntelligence />}
          />
          <Route
            exact
            path='/our-services/digital-online'
            element={<DigitalOnline />}
          />
          <Route exact path='*' element={<Error />} />
        </Routes>
        <BackToTopBtn />
        <Footer />{' '}
      </Provider>
    </BrowserRouter>
  )
}

export default App

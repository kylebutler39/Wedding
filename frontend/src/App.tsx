import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from "./layout/Navbar"
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { RSVP } from './pages/RSVP'
import { QnA } from './pages/QnA'
import Info from './pages/Info'
import { Footer } from './layout/Footer'
import { ScrollToTop } from './utils/Tools'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
          <Navbar />
          <main className='pt-16'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='/rsvp' element={<RSVP/>}/>
              <Route path='/qa' element={<QnA/>}/>
              <Route path='/info' element={<Info/>}/>
              <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
          </main>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

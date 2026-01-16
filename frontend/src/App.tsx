import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from "./layout/Navbar"
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className='pt-13'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App

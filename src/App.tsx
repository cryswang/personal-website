import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Portfolio } from './pages/Portfolio'
import { Contact } from './pages/Contact'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-svh flex flex-col text-foreground">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <div className="fixed inset-x-0 bottom-9 flex justify-center">
        <NavBar />
      </div>
    </div>
  )
}

export default App

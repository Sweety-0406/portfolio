import { BrowserRouter } from "react-router-dom"
import {About, Contact, Hero, Navbar, Tech, Works, StarsCanvas} from './components'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="relative z-10 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Tech />
          <Works />
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

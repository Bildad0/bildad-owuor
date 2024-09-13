import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, StarsCanvas } from "./components"


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Feedbacks /> */}
        <div className="z-0 relative">
          <Contact />
          <StarsCanvas />
        </div>
        <footer className="flex justify-center">
        <p>&copy; 2024 ICT & Network Solutions Manager. All rights reserved.</p>
    </footer>
      </div>
    </BrowserRouter>
  )
}

export default App;

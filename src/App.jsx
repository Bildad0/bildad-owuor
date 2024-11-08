import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, StarsCanvas } from "./components"
import Projects from "./components/Works";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";




const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <div className="z-0 relative">
          <Contact />
          <StarsCanvas />
        </div>
        <div className="flex justify-center p-10">
          <ul className="flex flex-row justify-between gap-8">
            <a href="https://www.instagram.com/iambildad/" target="blank"><AiFillInstagram size={40} /></a>
            <a href="https://x.com/Bildad0" target="blank"><BsTwitterX size={40}/></a>
            <a href="https://wa.me/c/254700524820" target="blank"><PiWhatsappLogoDuotone size={40} /></a>
            <a href="https://www.linkedin.com/in/bildad-owuor/" target="blank"><FaLinkedinIn size={40} /></a>
          </ul>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;

import { BrowserRouter } from "react-router-dom"; // used for routing

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
// getting the necessary details from the components folder in this file. 

const App = () => {
  return (
    // creating the layout by wrapping the code inside the browser component.
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Feedbacks/>
        <Tech/>
        <Works/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

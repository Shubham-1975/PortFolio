
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";

import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Skill from "./Pages/Skill";
import Education from "./Pages/Education";
import Footer from "./Pages/Footer";

function App() {
  return (
    <>
    <Navbar />
    <div id="home">
    <Home />
    </div>
    <div id='#about'>
      <About/>
    </div>
    <div id='#skill'>
      <Skill />
    </div>
    <div id='#project'>
      <Project/>
    </div>
    <div id='#education'>
      <Education />
    </div>
    <div id='#contact'>
      <Contact/>
    </div>
    <div className="my-3">
    <Footer />
    </div>
   
    </>
  );
}

export default App;

import "./App.css";
import "./App.css";
import { Skills } from "./components/skills/Skills";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Projects } from "./components/projects/Projects";
import { Hero } from "./components/hero/Hero";
import { TopNav, TopNavbar } from "./components/top-Nav/TopNavbar";
import Button from "react-bootstrap/esm/Button";

function App() {
  return (
    <div className="wrapper">
      {/* <!-- ============navbar============ --> */}
      <div className="top-nav" id="topNavBarSection">
        <TopNavbar />
        {/* <!-- ============hero section============ --> */}
        <Hero />
      </div>

      {/* <!-- =============skills section =============== --> */}
      <Skills />

      {/* <!-- =============project section =============== --> */}
      <Projects />

      {/* <!-- =============about me  =============== --> */}
      <About />
      {/* <!-- ============= contact me =============== --> */}

      <Contact />

      {/* <!-- =============footer =============== --> */}
      <Footer />
    </div>
  );
}

export default App;

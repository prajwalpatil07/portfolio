import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header/>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;

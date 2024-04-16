import "./index.css"
import AboutMe from "./components/aboutMeComponent/AboutMe"
import Navbar from "./components/navbarComponent/Navbar"
import AnimatedShapes from "./components/animatedShapes/AnimatedShapes"
import Projects from "./components/projectComponent/Projects"
import Skills from "./components/skillsComponent/Skills"
import Certificates from "./components/certificatesComponent/Certificates"
import Footer from "./components/footer/Footer"
import Recommendations from "./components/recommendationComponent/Recommendations"
import Quote from "./components/quoteComponent/Quote"


function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <Certificates />
      <Footer />
    </>

  )
}

export default App

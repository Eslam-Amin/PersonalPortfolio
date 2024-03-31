import "./index.css"
import AboutMe from "./components/aboutMeComponent/AboutMe"
import Navbar from "./components/navbarComponent/Navbar"
import AnimatedShapes from "./components/animatedShapes/AnimatedShapes"
import Projects from "./components/projectComponent/Projects"
import Skills from "./components/skillsComponent/Skills"
import Certificates from "./components/certificatesComponent/Certificates"
import Footer from "./components/footer/Footer"
import Recommendations from "./components/recommendationComponent/Recommendations"


function App() {
  return (
    <>
      <Navbar />
      <AnimatedShapes />
      <AboutMe />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />

      <Certificates />
      <hr />
      <Recommendations />
      <Footer />
    </>

  )
}

/*
 <Intro />
        <IntroShape />

<Feature />
        <FeatureShape />
*/

export default App

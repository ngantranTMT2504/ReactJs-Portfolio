
import './App.css'
import { Navigation } from './components/Navigation/Navigation.jsx'
import { Home } from './components/Home/Home.jsx'
import Summary from './components/Summary/Summary.jsx'
import Languages from './components/Languages/Languages.jsx'
import Projects from './components/Projects/Projects.jsx'
import Education from './components/Education/Education.jsx'
import Activities from './components/Activities/Activities.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import Visitors from './components/Visitors/Visitors.jsx'
import BackToTop from './components/BackToTop/BackToTop.jsx'

function App() {
  return (
    <>
      <BackToTop/>
      <div className='container'>
        <Navigation/>
        <Home/>
        <Summary/>
        <Languages/>
        <Projects/>
        <Education/>
        <Activities/>
        <Contact/>
        <Visitors/>
        <Footer/>
      </div>
    </>
  )
}

export default App

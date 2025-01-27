import { Toaster } from 'react-hot-toast'
import './App.css'
import AboutUs from './components/aboutUs/AboutUs'
import ContactUS from './components/contactUs/ContactUS'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero.Jsx'
import Recipes from './components/recipes/Recipes'
import Testymonials from './components/testymonials/Testymonials'
import Work from './components/work/Work'

function App() {
return (
    <>
     <Hero/>
     <Work/>
     <AboutUs/>
     <Recipes/>
     <Testymonials/>
     <ContactUS/>
     <Footer/>
     <Toaster />
    </>
  )
}

export default App

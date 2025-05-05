import React from 'react'
import './App.css'

import HeroSection from './sections/HeroSection'
import HowItWorksSection from './sections/HowItWorksSection'
import FeatureSection from './sections/FeatureSection'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="App">
      <HeroSection />
      <HowItWorksSection />
      <FeatureSection />
      <Footer />
    </div>
  )
}

export default App

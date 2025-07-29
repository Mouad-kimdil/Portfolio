import Navbar from './components/Navbar'
import Home from './components/Home'
import WhatIDo from './components/WhatIDo'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Navbar />
      <Home />
      <WhatIDo />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
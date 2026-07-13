import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import './styles/Header.css'
import './styles/Main.css'
import './styles/Footer.css'
import './styles/Contact.css'
import './styles/MainS.css'
import './styles/MainW.css'
import { Init } from './components/pages/inicio'
import { Cont } from './components/pages/contact'
import { Services } from './components/pages/services'
import { WhyChooseUs } from './components/pages/choose'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Init />}/>
      <Route path="/contact" element={<Cont />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/us" element={<WhyChooseUs />}/>
    </Routes>
  )
}

export default App

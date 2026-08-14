import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import './styles/Header.css'
import './styles/Main.css'
import './styles/Footer.css'
import './styles/Contact.css'
import './styles/MainS.css'
import './styles/MainW.css'
import './styles/MainRepairs.css'
import './styles/Policy.css'
import { Init } from './components/pages/inicio'
import { Cont } from './components/pages/contact'
import { Services } from './components/pages/services'
import { WhyChooseUs } from './components/pages/choose'
import { Privacy } from './components/pages/privacy-policy'
import { Sms } from './components/pages/sms'
import { WindowRepair } from './components/pages/window'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Init />}/>
      <Route path="/contact" element={<Cont />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/services/window-repair-south-florida" element={<WindowRepair />}/>
      <Route path="/us" element={<WhyChooseUs />}/>
      <Route path="/privacy-policy" element={<Privacy />}/>
      <Route path="/sms-terms" element={<Sms />}/>
    </Routes>
  )
}

export default App

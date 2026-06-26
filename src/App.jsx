import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import './styles/Header.css'
import './styles/Main.css'
import './styles/Footer.css'
import './styles/Contact.css'
import { Init } from './components/pages/inicio'
import { Cont } from './components/pages/contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Init />}/>
      <Route path="/contact" element={<Cont />}/>
    </Routes>
  )
}

export default App

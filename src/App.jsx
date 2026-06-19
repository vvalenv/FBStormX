import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import './styles/Header.css'
import './styles/Main.css'
import './styles/Footer.css'
import { Init } from './components/pages/inicio'
import { ContactM } from './components/pages/contact'

function App() {
  const params = new URLSearchParams(window.location.search);
  const source = params.get('utm_source');
  return (
    <Routes>
      <Route path="/" element={<Init />}/>
      <Route path="/contact" element={<ContactM utmSource={source}/>}/>
    </Routes>
  )
}

export default App

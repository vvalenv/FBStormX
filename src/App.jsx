import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Init } from './components/pages/inicio'
import { ContactM } from './components/pages/contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Init />}/>
      <Route path="/contact" element={<ContactM />}/>
    </Routes>
  )
}

export default App

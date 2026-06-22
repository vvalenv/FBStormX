import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import './styles/Header.css'
import './styles/Main.css'
import './styles/Footer.css'
import { Init } from './components/pages/inicio'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Init />}/>
    </Routes>
  )
}

export default App

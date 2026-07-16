import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddHackathon from './components/AddHackathon'
import ViewHackathon from './components/ViewHackathon'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddHackathon/>}/>
        <Route path='/view' element={<ViewHackathon/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

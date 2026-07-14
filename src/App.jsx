import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddHackathon from './components/AddHackathon'
import ViewHackathon from './components/ViewHackathon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ViewHackathon/>
    </>
  )
}

export default App

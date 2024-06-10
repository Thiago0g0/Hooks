import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Exemplo1 from './components/exemplo1'
import ListaTarefa from './components/listatarefa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListaTarefa />

    </>
  )
}

export default App

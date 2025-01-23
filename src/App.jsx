import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DropdownTable from './dropdownTable'

function App() {
  const [count, setCount] = useState(0)

  return (
  <DropdownTable/>
  )
}

export default App

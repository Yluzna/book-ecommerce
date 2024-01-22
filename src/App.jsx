import { useState } from 'react'
import './App.css'
import Admin from './components/admin'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Admin />
    </>

  )
}


export default App;

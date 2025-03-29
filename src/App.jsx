import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Books from './components/Books'
import BooksForm from './components/BooksForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BooksForm/>
        <Books/>
      </div>
    </>
  )
}

export default App

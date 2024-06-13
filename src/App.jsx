import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Bank/Home'
import News from './Bank/News'
import About from './Bank/About'
import Contact from './Bank/Contact'
import Loan from './Bank/Loan'
import Deposit from './Bank/Deposit'
import News1 from './Bank/News1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/News' exact element={<News />} />
      </Routes>
      <Routes>
        <Route path='/About' exact element={<About />} />
      </Routes>
      <Routes>
        <Route path='/Contact' exact element={<Contact />} />
      </Routes>
      <Routes>
        <Route path='/Loan' exact element={<Loan />} />
      </Routes>
      <Routes>
        <Route path='/Deposit' exact element={<Deposit />} />
      </Routes>
      <Routes>
        <Route path='/News1' exact element={<News1 />} />
      </Routes>
    </>
  )
}

export default App

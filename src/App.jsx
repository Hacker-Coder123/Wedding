import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Weeding from './Weeding'
import Bride_and_groom_entries from './Bride_and_groom_entries'
import Carnival_entry from './Carnival_entry'
import Corprate_show from './Corprate_show'
import About from './About'
import Contect from './Contect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="nevbar">
        <h2>Sansa innovaction</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/weeding">Weeding</Link></li>
          <li><Link to="/bride_and_groom_entries">Bride and groom entries</Link></li>
          <li><Link to="/carnival_entry">Carnival entry</Link></li>
          <li><Link to="/corprate_show">Corprate show</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contect">Contect</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/weeding" element={<Weeding />}></Route>
        <Route path="/bride_and_groom_entries" element={<Bride_and_groom_entries />}></Route>
        <Route path="/carnival_entry" element={<Carnival_entry />}></Route>
        <Route path="/corprate_show" element={<Corprate_show />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contect" element={<Contect />}></Route>
      </Routes>

    </>
  )
}

export default App

import logo from './logo.svg'
import './App.css'

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Hello from './components/Hello'
import World from './components/World'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />
        <Router>
          <Routes>
            <Route path="/world" element={<World />} />
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App

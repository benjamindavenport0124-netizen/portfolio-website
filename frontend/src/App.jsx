import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import WorkInProgress from './pages/WorkInProgress.jsx'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route 
        path="/about"
        element={<About />}
      />

      <Route
        path="/projects"
        element={<Projects />}
      />

      <Route 
        path="/projects/airanker"
        element={<WorkInProgress />}
      />

      <Route 
        path="/projects/voicecalculator"
        element={<WorkInProgress />}
      />

      <Route 
        path="/projects/aicoach"
        element={<WorkInProgress />}
      />

      <Route
        path="/resume"
        element={<Resume />}
      />
      
      <Route
        path="/ai-lab"
        element={<WorkInProgress />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

    </Routes>
  )
}

export default App
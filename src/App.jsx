import { AnimatePresence } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';
import First from './pages/first';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<First />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

function AppWrapper() {
  return (
    <Router>
      <ParticlesBackground />
      <App />
    </Router>
  )
}

export default AppWrapper;

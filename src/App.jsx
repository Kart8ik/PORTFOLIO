import { AnimatePresence } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';
import First from './pages/First';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import DesktopPrompt from './components/DesktopPrompt';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import useScreenHeight from './hooks/useScreenHeight';

function App() {
  useScreenHeight();
  const location = useLocation();
  return (
    <>
      <DesktopPrompt />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<First />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<Blogs />} />
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

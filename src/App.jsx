import ParticlesBackground from './components/ParticlesBackground';
import './App.css';
import First from './pages/First';
import Skills from './pages/Skills';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <ParticlesBackground />
      <Router>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;

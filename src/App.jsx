import ParticlesBackground from './components/ParticlesBackground';
import './App.css';
import First from './pages/First';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <ParticlesBackground />
      <Router>
        <Routes>
          <Route path="/" element={<First />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;

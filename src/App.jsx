import ParticlesBackground from './components/ParticlesBackground';
import './App.css';
import First from './pages/First';

function App() {
  return (
    <>
      <ParticlesBackground />
      <div className="content">
        <First />
      </div>
    </>
  )
}

export default App;

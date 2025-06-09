import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

function App() {
  return (
    <>
      <ParticlesBackground />
      <div className="content">
        <h1>Your Portfolio</h1>
        <div className="card">
          <p>
            Welcome to my portfolio.
          </p>
        </div>
        <p className="read-the-docs">
          Your portfolio content will go here.
        </p>
      </div>
    </>
  )
}

export default App;

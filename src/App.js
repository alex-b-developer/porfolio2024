import logo from './logo.svg';
import './App.css';
import Showcase from './components/showcase/showcase';
import Skills from './components/skills/skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          This is my beautiful website
        </p>

        <Showcase />
      </header>
      <div>
        <h1> My capabilities</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <main>
        <Skills />
      </main>
    </div>
  );
}

export default App;

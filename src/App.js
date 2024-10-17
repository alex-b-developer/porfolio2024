import logo from './logo.svg';
import './App.css';
/* import './index.css'; */
import Showcase from './components/showcase/showcase';
import Skills from './components/skills/skills';
import Portfolio from './components/portfolio/portfolio';
import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
<NextUIProvider>
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
        <Portfolio />
      </main>
    </div>
    </NextUIProvider>
  );
}

export default App;

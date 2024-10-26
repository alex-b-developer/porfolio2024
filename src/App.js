import logo from './logo.svg';
import './App.css';
import './index.css';
import Showcase from './components/showcase/showcase';
import Skills from './components/skills/skills';
import Portfolio from './components/portfolio/portfolio';
import About from './components/about/about'
import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
 <NextUIProvider>
    <div className="App">
      <header className="App-header">
        <p>This is my beautiful website</p>
        <Showcase />
      </header>
      <main>
        <h1 class="text-black font-medium text-2xl pt-10 pb-5">
          Recent Work
          </h1>
        <Portfolio />
        <Skills />
        <About />
      </main>
    </div>
  </NextUIProvider>
  );
}

export default App;

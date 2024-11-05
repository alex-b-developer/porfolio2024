import './App.css';
import './index.css';
import Showcase from './components/showcase/showcase';
import Skills from './components/skills/skills';
import Portfolio from './components/portfolio/portfolio';
import About from './components/about/about'
import {NextUIProvider} from "@nextui-org/react";
import { Helmet } from 'react-helmet';

function App() {
  return (
 <NextUIProvider>
    <Helmet>
      <title>Alexander B Developer</title>
      <meta name="description" content="Portafolio Web Profesional. Alexander Betancur, Web Developer, Front End Developer" />
      <meta name="keywords" content="Web Developer, Frontend Developer, React Developer, JavaScript Developer, NextJS Developer, TailwindCSS Expert, UX/UI Design, Responsive Web Design, Full Stack Development, Freelance Web Developer, HTML5, CSS3, Web Application Development, Mobile First Design, Custom Website Development, Creative Web Solutions, Web Portfolio, Software Development, WordPress Developer, Web Animation Expert, Medellín Web Developer, Colombian Web Developer, Alexander Betancur Developer" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-GWZCXE7MTJ"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GWZCXE7MTJ');
          `}
        </script>
    </Helmet>
    <div className="App">
      <header className="App-header">
      <a href="https://wa.me/573148734025" target="_blank" rel="noreferrer">
          DO YOU WANT TO GET A PROFESSIONAL WEBSITE? CONTACT ME NOW!</a>
      </header>
      <Showcase />
      <main>
        <h1 class="text-black font-medium text-2xl pt-10 pb-5">Work</h1>
        <Portfolio />
        <Skills />
        <About />
      </main>
    </div>
  </NextUIProvider>
  );
}

export default App;

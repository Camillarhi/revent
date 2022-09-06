import './App.css';
import { Header } from './components';
import About from './components/about';
import Contact from './components/contact';
import Landinpage from './components/landinpage';
import Portfolio from './components/portfolio';
import Resume from './components/resume';

function App() {
  return (
    <div className="App">
      <Header />
      <Landinpage />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

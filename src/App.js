import About from './about/about';
import './App.css';
import Header from './header/header';
import Navbar from './navbar/navbar';
import Resume from './resume/resume';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Resume />
    </div>
  );
}

export default App;

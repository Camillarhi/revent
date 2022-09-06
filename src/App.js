import About from './about/about';
import './App.css';
import Header from './header/header';
import Navbar from './navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;

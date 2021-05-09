import About from './components/About';
import Card from './components/Card';
import Education from './components/Education';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Services from './components/Services';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Services />
      <Card />
      <Education />
    </div>
  );
}

export default App;
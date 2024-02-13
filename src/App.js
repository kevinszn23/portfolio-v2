import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      <h1 className="name">KEVIN NG</h1>
        <About/>
      </header>
    </div>
  );
}
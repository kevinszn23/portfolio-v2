import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Navbar/>
        </h1>
        <h2>
          Hello World
        </h2>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import { Routes, Route, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Outlet/>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* // <About/>
          // <Work/>
          // <Contact/> */}

        </Routes>
      </header>
    </div>
  );
}

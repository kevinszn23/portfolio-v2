import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        {/* <li>
          <Link to="/contact">Contact</Link>
        </li> */}
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </div>
  );
}

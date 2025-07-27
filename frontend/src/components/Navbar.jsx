import logo from '../assets/logo.svg';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="#home">
          <img src={logo} alt="Portfolio Logo" />
        </a>
      </div>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}
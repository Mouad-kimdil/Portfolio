import './Home.scss';
import me from '../assets/me.png';

export default function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-image">
        <img src={me} alt="Mouad Kimdil" />
      </div>
      <div className="hero-content">
      <h1 className="gradient-text">Hi, I am Mouad <span className="highlight"></span></h1>
        <p>
          A passionate software developer and student at 1337 Coding School (42 Network) in Morocco, 
          with a focus on systems programming, algorithms, and modern technologies
        </p>
        <a href="#work" className="cta-button">View My Work</a>
      </div>
    </section>
  )
}

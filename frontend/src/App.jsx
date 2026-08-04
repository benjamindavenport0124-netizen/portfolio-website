import './App.css'
import earthImage from './assets/earth.png'
import moonImage from './assets/moon.png'
import marsImage from './assets/mars.png'


function App() {
  return (
    <>
      <nav className="panel panel-nav-container nav-bar">
        <div className="nav-top">
          <a className="panel panel-nav-control nav-name nav-link" href="/">Benjamin Davenport</a>
          <div className="panel panel-nav-control nav-top-links">
            <a className="nav-link" href="https://github.com/benjamindavenport0124-netizen">GitHub</a>
            <a className="nav-link" href="/linkedIn">LinkedIn</a>
            {/* Page saying I am under 18 and cant have a LinkedIn */}
          </div>
        </div>
        <div className="panel panel-nav-control nav-bot">
          <a className="nav-link" href="/about">About</a>
          <a className="nav-link" href="/projects">Projects</a>
          <a className="nav-link" href="/resume">Resume</a>
          <a className="nav-link" href="/ai-lab">AI Lab</a>
          <a className="nav-link" href="/contact">Contact</a>
        </div>
      </nav>
    
      <main>

        <section className="hero">
        
          <div className="panel-hero-control hero-left panel">
            <h1>Benjamin Davenport</h1>

            <h2>Aspiring Aerospace Engineer</h2>
            <h2>Software Developer</h2>

            <p>
              I enjoy building AI tools, software, and engineering projects that solve
              real problems.
            </p>

            <div className="hero-buttons">
            <button className="hero-buttons hero-button-primary">View Projects</button>
            <button className="hero-buttons hero-button-secondary">Resume</button>
            </div>

          </div>


          <div className="hero-right">
            <div className="solar-system">
              <div className="sun"></div>

              <div className="orbit earth-orbit">
                <div className="earth-system">
                  <img 
                    className="planet earth"
                    src={earthImage}
                    alt="Pixel-art Earth"
                  />
                  <div className="orbit moon-orbit">
                      <img 
                        className="planet moon"
                        src={moonImage}
                        alt="Pixel-art Moon"
                      />
                  </div>
                </div>
              </div>
              <div className="orbit mars-orbit">
                <img 
                  className="planet mars"
                  src={marsImage}
                  lt="Pixel-art Mars"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="feature-projects panel">
          <div className="featured-title">
            <h2>Featured Projects</h2>
          </div>
          <div className="feature-description">
            <a 
            href="/projects/voice-calculator" 
            className="feature-1 feature-panel panel">
              <h3>Voice Calculator </h3>
              <p>
                A Python calculator that converts spoken math problems into answers, supporting functions such as fractions, logarithms, and trigonometry. I built it to explore speech recognition and make complex calculations easier to enter.
              </p>
            </a>
            <p className="feature-divider"></p>
            <a 
            href="/projects/ai-video-ranker"
            className="feature-2 feature-panel panel">
              <h3>AI Video Ranker</h3>
              <p>
                A local AI pipeline that analyzes long Minecraft recordings, combines speech transcripts with game logs, and ranks important moments for video editing. It helps turn hours of footage into a useful list of highlights and timestamps.
              </p>
            </a>
          </div>
        </section>
      
        <section className="certifications panel">
          <h3 className="certification-title"> Certifications</h3>
          <div className="certification-pdf">
            <a
              href="/certifications/Python.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="certification-text panel"
            >
              View Python Certificate
            </a>
            <div className="certification-divider"></div>
            <a
              href="/certifications/Java.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="certification-text panel"
            >
              View Java Certificate
            </a>
            <div className="certification-divider"></div>
            <a
              href="/certifications/Javascript.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="certification-text panel"
            >
              View JavaScript Certificate
            </a>
          </div>
        </section>
      </main>

      <footer>
        <h4 className="footer-name">Benjamin Davenport</h4>
        <h4 className="footer-copyright">Copyright:@2026 Benjamin Davenport</h4>
        <h4 className="footer-contact">Contact</h4>
        <a 
          className="footer-link" href="https://github.com/benjamindavenport0124-netizen">
            GitHub
        </a>
        <a 
          className="footer-link" href="/contact">
            Contact
        </a>
      </footer>
    </>
  )
}

export default App
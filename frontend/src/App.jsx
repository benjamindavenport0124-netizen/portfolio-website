import './App.css'
import earthImage from './assets/earth.png'
import moonImage from './assets/moon.png'
import marsImage from './assets/mars.png'


function App() {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-content">
          <a className="nav-name nav-link" href="/">Benjamin Davenport</a>
          <div className="nav-links">
            <a className="nav-link" href="/about">About</a>
            <a className="nav-link" href="/projects">Projects</a>
            <a className="nav-link" href="/resume">Resume</a>
            <a className="nav-link" href="/ai-lab">AI Lab</a>
            <a className="nav-link" href="/contact">Contact</a>
            {/* Page saying I am under 18 and cant have a LinkedIn */}
          </div>
        </div>
      </nav>
    
      <main>

        <section className="hero">
        
          <div className="hero-left">
            <p className="hero-name">Benjamin Davenport</p>

            <h1>Aspiring Aerospace Engineer</h1>
            <p className="hero-role">Software Developer</p>

            <p className="hero-description">
              I enjoy building AI tools, software, and engineering projects that solve
              real problems.
            </p>

            <div className="hero-links">
              <a className="hero-link-primary" href="/projects">
                View Projects →
              </a>

              <a className="hero-link-secondary" href="/resume">
                Resume ⭳
              </a>
            </div>

          </div>


          <div className="hero-right">
            <div className="solar-system">
              <div className="sun"></div>
              <div className="decorative-orbit orbit-inner-one"></div>
              <div className="decorative-orbit orbit-inner-two"></div>
              <div className="orbit earth-orbit">
                <div className="earth-system">
                  <div className="earth-visual">
                    <img 
                      className="planet earth"
                      src={earthImage}
                      alt="Pixel-art Earth"
                    />
                  </div>
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
                <div className="mars-visual">
                  <img 
                  className="planet mars"
                  src={marsImage}
                  alt="Pixel-art Mars"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tech-stack">
          <p className="tech-title">Technologies & Tools</p>
          <div className="tech-list">
            <span>Python</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>Git</span>
            <span>VS Code</span>
            <span>AutoCAD</span>
            <span>Blender</span>
            <span>Revit</span>
            <span>Maya</span>
          </div>
        </section>

        <section className="projects-showcase">
          <article className="project-showcase">
            <div className="project-visual">
              <div className="voice-visual">
              <div className="voice-input">
                <div className="mic-circle">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="mic-icon"
                  >
                    <rect x="9" y="2" width="6" height="12" rx="3" />
                    <path d="M5 10a7 7 0 0 0 14 0" />
                    <path d="M12 17v5" />
                    <path d="M8 22h8" />
                  </svg>
                </div>

                <div className="waveform" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="voice-equations">
                <p className="equation-label">Recognized input</p>

                <p className="equation-text">
                  sin(30°) + log(100)
                </p>

                <p className="equation-spoken">
                  “Sine of open thirty close plus log of open one hundred close"
                </p>
              </div>

              <div className="voice-output">
                <p className="output-label">Calculated result</p>
                <output className="calculator-result">2.5</output>

                <div className="mini-keypad" aria-hidden="true">
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>÷</span>

                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>×</span>

                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                 <span>+</span>
                </div>
              </div>
              </div>
            </div>

            <div className="project-info">
              <p className="project-label">Featured Project</p>
              <h2 className="project-name">Voice Calculator</h2>

              <p className="project-description">
                A Python calculator that converts spoken math problems into answers, supporting functions such as fractions, logarithms, and trigonometry. I built it to explore speech recognition and make complex calculations easier to enter.
              </p>
              <div className="project-tags">
                <span>Python</span>
                <span>Speech Recognition</span>
                <span>Math Parsing</span>
              </div>
              <a className="project-link" href="/projects/voice-calculator">
                View Project →
              </a>
            </div>
          </article>
          <article className="project-showcase project-showcase-reverse">
            <div className="project-info">
              <p className="project-label">Featured Project</p>
              <h2 className="project-name">AI Video Ranker</h2>

              <p className="project-description">
                A local AI pipeline that analyzes long Minecraft recordings, combines speech transcripts with game logs, and ranks important moments for video editing. It turns hours of footage into a useful list of highlights and timestamps.
              </p>
              <div className="project-tags">
                <span>Python</span>
                <span>Whisper</span>
                <span>Ollama</span>
                <span>Game Log Parsing</span>
                <span>OCR</span>
              </div>
              <a className="project-link" href="/projects/ai-lab">
                View Project →
              </a>
            </div>
            <div className="project-visual">
              <div className="ranker-visual">
               <div className="pipeline-flow">
                 <div className="pipeline-step">
                   <span className="step-number">01</span>
                   <strong>Footage</strong>
                   <small>Video and audio</small>
                 </div>

                 <span className="pipeline-arrow">→</span>

                 <div className="pipeline-step">
                   <span className="step-number">02</span>
                   <strong>Extract Data</strong>
                   <small>Whisper, logs, and OCR</small>
                 </div>

                 <span className="pipeline-arrow">→</span>

                 <div className="pipeline-step">
                                <span className="step-number">03</span>
                   <strong>AI Analysis</strong>
                   <small>Score each moment</small>
                 </div>

                 <span className="pipeline-arrow">→</span>

                 <div className="pipeline-step">
                   <span className="step-number">04</span>
                   <strong>Highlights</strong>
                   <small>Ranks and timestamps</small>
                 </div>
               </div>
               <div className="ranking-preview">
                 <p className="ranking-title">Example ranked output</p>

                 <div className="ranking-row">
                   <span className="ranking-number">01</span>
                   <strong>Crazy Rare Drop</strong>
                   <span className="ranking-priority">High priority</span>
                 </div>

                 <div className="ranking-row">
                   <span className="ranking-number">02</span>
                   <strong>Level Up</strong>
                   <span className="ranking-priority">High priority</span>
                 </div>

                 <div className="ranking-row">
                   <span className="ranking-number">03</span>
                   <strong>Rare Chest Reward</strong>
                   <span className="ranking-priority">Review</span>
                 </div>
               </div>
             </div>
            </div>
            
          </article>
        </section>
      
        <section className="certifications">
          <h2 className="certification-title">Certifications</h2>

          <div className="certification-list">
            <a
              href="/certifications/Python.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="certification-card"
            >
              <span className="certificate-code">PY</span>

              <div className="certificate-info">
                <strong>Python</strong>
                <span>Certiport credential</span>
              </div>

              <span className="certificate-arrow">↗</span>
            </a>

            <a
              href="/certifications/Java.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="certification-card"
            >
              <span className="certificate-code">JAVA</span>
        
              <div className="certificate-info">
                <strong>Java</strong>
                <span>Certiport credential</span>
              </div>
        
              <span className="certificate-arrow">↗</span>
            </a>
        
            <a
              href="/certifications/Javascript.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="certification-card"
            >
              <span className="certificate-code">JS</span>
        
              <div className="certificate-info">
                <strong>JavaScript</strong>
                <span>Certiport credential</span>
              </div>

              <span className="certificate-arrow">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-identity">
            <h2>Benjamin Davenport</h2>
            <p>Aspiring Aerospace Engineer & Software Developer</p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <a
              href="https://github.com/benjamindavenport0124-netizen"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
      
            <a href="/resume">Resume</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      
        <p className="footer-copyright">
          © 2026 Benjamin Davenport. All rights reserved.
        </p>
      </footer>
    </>
  )
}

export default App
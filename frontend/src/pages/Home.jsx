
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import { Link } from 'react-router'

function Home() {
  return (
    <>

      <Navbar />
    
      <main>
        <Hero />


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
              <Link className="project-link" to="/projects/voice-calculator">
                View Project →
              </Link>
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
              <Link className="project-link" to="/projects/ai-lab">
                View Project →
              </Link>
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
                <span>CodeHS</span>
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
                <span>CodeHS</span>
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
                <span>CodeHS</span>
              </div>

              <span className="certificate-arrow">↗</span>
            </a>
            <a
              href="/certifications/AutoCAD.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="certification-card"
            >
              <span className="certificate-code">CAD</span>
        
              <div className="certificate-info">
                <strong>AutoCAD</strong>
                <span>Certiport credential</span>
              </div>

              <span className="certificate-arrow">↗</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home
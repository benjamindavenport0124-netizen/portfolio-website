import '../Projects.css'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { NavLink } from 'react-router'
import { SiGithub } from "react-icons/si";
import {
    Globe,
    Server,
    Box,
    Terminal,
    Rocket
} from "lucide-react";

function Projects() {
    return (
        <>
            <Navbar />

            <main>
                <section className="project-header">
                    <h2 className='project-headers'>Projects</h2>
                    <h1>Things I've Built</h1>
                    <p>
                        Every project started with a problem I wanted to solve. From AI-powered software to engineering tools, each one taught me something new and pushed my skills further.
                    </p>
                </section>
                <div className="section-title">
                    <h2>Featured Projects</h2>
                    <div className="section-line">
                        <span className="section-dot"></span>
                    </div>
                </div>
                <section className="project-showcase">
                    <article className="project-feature">
                        <div className="project-left project-left-1">
                            <div className="diagram-node">
                                <span className="diagram-icon">▶</span>
                                <p>Gameplay</p>
                                <p>Footage</p>
                            </div>

                            <span className="diagram-arrow">→</span>

                            <div className="diagram-node">
                                <div className="waveform">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <p>Whisper</p>
                                <p>Transcription</p>
                            </div>

                            <span className="diagram-arrow">→</span>

                            <div className="diagram-node">
                                <span className="diagram-icon">AI</span>
                                <p>Ollama</p>
                                <p>Local LLM</p>
                            </div>

                            <span className="diagram-arrow">→</span>

                            <div className="diagram-node diagram-output">
                                <p>Ranked Highlights</p>
                                <span>#1 &nbsp; 02:45</span>
                                <span>#2 &nbsp; 15:32</span>
                                <span>#3 &nbsp; 28:17</span>
                            </div>
                        </div>
                        <div className="project-right">
                            <h2 className='project-headers'>01</h2>
                            <h1>AI Video Ranker</h1>
                            <div className="project-tags">
                                <span>Python</span>
                                <span>Whisper</span>
                                <span>Ollama</span>
                                <span>Game Log Parsing</span>
                                <span>OCR</span>
                            </div>
                            <p>
                                Sorting through hours of gameplay footage by hand was painfully slow, so I built an AI pipeline that automatically identifies the most important moments. The system combines Whisper speech transcription with Minecraft game logs and a local language model to rank highlights and return timestamps ready for editing.
                            </p>
                            <ul className="project-highlights">
                                <li>Processes hours of footage completely offline</li>
                                <li>Combines multiple data sources for better accuracy</li>
                                <li>Produces ranked timestamps for fast video editing</li>
                            </ul>
                            <div className="project-buttons">
                                <NavLink className="project-link" to="/projects/airanker">View Details</NavLink>
                                <a 
                                    className='project-github'
                                    href="https://github.com/benjamindavenport0124-netizen/AIvideoprocessor"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SiGithub />
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article className="project-feature">
                        <div className="project-left project-left-2">

                            <div className="diagram-node">
                                <span className="diagram-icon">◉</span>
                                <p>Voice</p>
                                <p>Input</p>
                            </div>

                            <span className="diagram-arrow">→</span>

                            <div className="diagram-node">
                                <div className="waveform">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <p>Whisper</p>
                                <p>Transcription</p>
                            </div>
                        
                            <span className="diagram-arrow">→</span>
                        
                            <div className="diagram-node">
                                <span className="diagram-icon">Σ</span>
                                <p>Math</p>
                                <p>Parser</p>
                            </div>
                        
                            <span className="diagram-arrow">→</span>
                        
                            <div className="diagram-node diagram-result">
                                <p>Result</p>
                                <strong>42.718</strong>
                            </div>

                        </div>
                        <div className="project-right">
                            <h2 className='project-headers'>02</h2>
                            <h1>Voice Calculator</h1>
                            <div className="project-tags">
                                <span>Python</span>
                                <span>Whisper</span>
                                <span>Math Parsing</span>
                                <span>GUI</span>
                            </div>
                            <p>
                                Instead of typing equations, this calculator understands spoken mathematical expressions—including logarithms, trigonometry, fractions, and complex formulas—and converts them into accurate calculations through natural language processing.
                            </p>
                            <ul className="project-highlights">
                                <li>Voice-first interface</li>
                                <li>Supports advanced mathematical functions</li>
                                <li>Built custom parsing logic instead of relying on simple evaluation</li>
                            </ul>
                            <div className="project-buttons">
                                <NavLink className="project-link" to="/projects/voicecalculator">View Details</NavLink>
                                <a 
                                    className='project-github'
                                    href="https://github.com/benjamindavenport0124-netizen/voicecalculator"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SiGithub />
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article className="project-feature">
                        <div className="project-left project-left-3">

                            <div className="diagram-node">
                                <span className="diagram-icon">＋</span>
                                <p>Gameplay</p>
                                <p>Screenshot</p>
                            </div>

                            <span className="diagram-arrow">→</span>

                            <div className="diagram-node ai-node">
                                <div className="ai-grid">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <p>Vision</p>
                                <p>Model</p>
                            </div>
                        
                            <span className="diagram-arrow">→</span>

                            <div className="diagram-node diagram-feedback">
                                <p>AI Feedback</p>

                                <span>✓ Crosshair</span>
                                <span>△ Positioning</span>
                                <span>✓ Movement</span>
                            </div>

                        </div>
                        <div className="project-right">
                            <h2 className='project-headers'>03</h2>
                            <h1>AI FPS Coach</h1>
                            <div className="project-tags">
                                <span>Python</span>
                                <span>Computer Vision</span>
                                <span>Ollama</span>
                                <span>Image Analysis</span>
                            </div>
                            <p>
                                This project captures gameplay screenshots, analyzes them with a locally hosted vision-language model, and provides coaching on positioning, crosshair placement, and decision making. The goal was to explore practical applications of AI rather than simply automate gameplay.
                            </p>
                            <ul className="project-highlights">
                                <li>Fully local AI processing</li>
                                <li>Screenshot-based gameplay analysis</li>
                                <li>Actionable feedback instead of raw statistics</li>
                            </ul>
                            <div className="project-buttons">
                                <NavLink className="project-link" to="/projects/aicoach">View Details</NavLink>
                                <a 
                                    className='project-github'
                                    href="https://github.com/benjamindavenport0124-netizen"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SiGithub />
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                    </article>
                </section>
                <section className="project-other">

                    <div className="section-title">
                        <h2>Other Projects</h2>

                        <div className="section-line">
                            <span className="section-dot"></span>
                        </div>
                    </div>

                    <div className="project-other-grid">

                        <article className="project-card">
                            <Globe className="project-card-icon" />
                
                            <h3>Portfolio Website</h3>
                
                            <p>
                                Rather than using a template, I built this website in React to
                                reflect my interests in aerospace engineering and software
                                development. Every page, animation, and layout was designed to
                                present my work clearly while maintaining a mission-control
                                inspired aesthetic.
                            </p>
                
                            <NavLink className="project-view" to="/projects/website">
                                View Project →
                            </NavLink>
                        </article>

                        <article className="project-card">
                            <Server className="project-card-icon" />

                            <h3>Local AI Server</h3>

                            <p>
                                I assembled and configured a dedicated Ubuntu server with an
                                NVIDIA GPU for experimenting with local language models, AI
                                workflows, and automation projects.
                            </p>

                            <NavLink className="project-view" to="/projects/aiserver">
                                View Project →
                            </NavLink>
                        </article>

                        <article className="project-card">
                            <Box className="project-card-icon" />

                            <h3>3D Modeling</h3>

                            <p>
                                Engineering and architectural 3D models created in Blender,
                                AutoCAD, Revit, and Maya for various projects.
                            </p>

                            <NavLink className="project-view" to="/projects/3dmodeling">
                                View Project →
                            </NavLink>
                        </article>

                        <article className="project-card">
                            <Terminal className="project-card-icon" />

                            <h3>More to Come</h3>

                            <p>
                                I'm always working on new ideas and experiments. Stay tuned for
                                upcoming projects.
                            </p>

                            <NavLink className="project-view" to="/projects">
                                View Projects →
                            </NavLink>
                        </article>

                        <article className="project-card project-card-end">
                            <Rocket className="project-card-icon" />

                            <h3>Always Building</h3>

                            <p>
                                I enjoy turning ideas into real solutions through code, design,
                                and engineering.
                            </p>
                        </article>

                    </div>

                </section>
            </main>

            <Footer />
        </>
    );
}

export default Projects;
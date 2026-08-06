import { NavLink } from 'react-router'
import '../Resume.css'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import rocketimage from '../assets/b1b.png'
import OllamaIcon from "../assets/icons/ollama.svg?react"
import MayaIcon from "../assets/icons/Maya.svg?react"
import AutoCADIcon from "../assets/icons/AutoCAD.svg?react"
import RevitIcon from "../assets/icons/Revit.svg?react"
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  Clapperboard,
  GraduationCap,
  Mic,
  Crosshair,
  Globe,
  Server
} from "lucide-react";

function Resume() {
  return (
    <>
      <Navbar />
      <main>
        <section className='resume-header'>
            <div className='resume-header-text'>
               <h2 className='resume-headers'>Resume</h2>
               <h1>Benjamin Davenport</h1>
               <h2 className='header-sub'>Aspiring Aerospace Engineer & Software Developer</h2>
               <p className='resume-norm-text'>
                  I build AI tools and software that solve real problems. I'm driven by curiosity, a desire to learn, and a passion for engineering. 
               </p>
                <div className="resume-download">
                    <a
                        href="/src/assets/BTDResume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >⭳ Download Resume PDF</a>
                </div>
            </div>
            <div className='resume-header-image'>
              <img
                src={rocketimage}
                alt='Progression of crewed spacecraft'
              />
            </div>
        </section>
        <section className='resume-education'>
            <h2 className='resume-headers'>education</h2>
            <div className='resume-school-row'>
                <div className='resume-school-left'>
                    <GraduationCap className="education-icon"/>
                    <div className='resume-school'>
                        <h2>Magnolia High School</h2>
                        <h4>Magnolia, Texas</h4>
                    </div>
                </div>
                <h2 className='resume-class'>Class of 2027</h2>
            </div>
            <div className='resume-numbers'>
                <article>
                    <p className='resume-norm-text'> GPA (Weighted)</p>
                    <h2>5.0382</h2>
                </article>
                <article>
                    <p className='resume-norm-text'> GPA (Unweighted)</p>
                    <h2>3.8182</h2>
                </article>
                <article>
                    <p className='resume-norm-text'> Class Rank</p>
                    <h2>37/551</h2>
                </article>
                <article>
                    <p className='resume-norm-text'> SAT Scores</p>
                    <h2>1320 (610 RW / 710 M)</h2>
                    <h2>1300 (560 RW / 740 M)</h2>
                </article>
            </div>
        </section>
        <section className='resume-skills-projects'>
            <section className='resume-skills'>
                <h2 className='resume-headers'>Technical skills</h2>
                <h2>Languages</h2>
                <div className='resume-languages'>
                    <article className="resume-skill">
                        <FaPython />
                        <span>Python</span>
                    </article>
                    <article className="resume-skill">
                        <FaJava />
                        <span>Java</span>
                    </article>
                    <article className="resume-skill">
                        <SiJavascript />
                        <span>JavaScript</span>
                    </article>
                </div>
                <h2>Frameworks & Libraries</h2>
                <div className='resume-frame'>
                    <article className="resume-skill">
                        <SiReact />
                        <span>React</span>
                    </article>
                    <article className="resume-skill">
                        <SiVite />
                        <span>Vite</span>
                    </article>
                </div>
                <h2>Development Tools</h2>
                <div className='resume-tools'>
                    <article className="resume-skill">
                        <SiGit />
                        <span>Git</span>
                    </article>
                    <article className="resume-skill">
                        <SiGithub />
                        <span>GitHub</span>
                    </article>
                    <article className="resume-skill">
                        <VscVscode />
                        <span>VS Code</span>
                    </article>
                    <article className="resume-skill">
                        <SiLinux />
                        <span>Linux</span>
                    </article>
                    <article className="resume-skill">
                        <OllamaIcon className="resume-icon"/>
                        <span>Ollama</span>
                    </article>
                </div>
                <h2>3D Modeling Tools</h2>
                <div className="resume-3d">
                    <article className="resume-skill">
                        <SiBlender />
                        <span>Blender</span>
                    </article>
                    <article className="resume-skill">
                        <AutoCADIcon className="resume-icon"/>
                        <span>AutoCAD</span>
                    </article>
                    <article className="resume-skill">
                        <MayaIcon className="resume-icon"/>
                        <span>Maya</span>
                    </article>
                    <article className="resume-skill">
                        <RevitIcon className="resume-icon"/>
                        <span>Revit</span>
                    </article>
                </div>
                <h2>Other Skills</h2>
                <div className="resume-other">
                    <span>AI & Machine Learning</span>
                    <span>Problem Solving</span>
                    <span>3D Modeling</span>
                    <span>System Design</span>
                    <span>Data Processing</span>
                    <span>Linux Server Administration</span>
                </div>
            </section>
            <section className='resume-projects'>
                <h2 className='resume-headers'>Featured Projects</h2>
            
                <article className="resume-project-item">
                    <div className="resume-project-icon">
                        <Clapperboard />
                    </div>
            
                    <div className="resume-project-info">
                        <h2>AI Video Ranker</h2>
                        <p>
                            Local AI pipeline that analyzes long Minecraft recordings using speech transcripts and game logs to automatically rank the most important moments.
                        </p>
                    </div>
                        
                    <NavLink
                        className="resume-project-link"
                        to="/projects/ai-video-ranker"
                    >
                        View Project →
                    </NavLink>
                </article>
            
                <article className="resume-project-item">
                    <div className="resume-project-icon">
                        <Mic />
                    </div>
            
                    <div className="resume-project-info">
                        <h2>Voice Calculator</h2>
                        <p>
                            A voice-controlled calculator capable of solving complex expressions including fractions, logarithms, and trigonometric functions using speech recognition.
                        </p>
                    </div>
            
                   <NavLink
                        className="resume-project-link"
                        to="/projects/voice-calculator"
                    >
                        View Project →
                    </NavLink>
                </article>
            
                <article className="resume-project-item">
                    <div className="resume-project-icon">
                        <Crosshair />
                    </div>
            
                   <div className="resume-project-info">
                        <h2>AI FPS Coach</h2>
                        <p>
                            AI tool that analyzes gameplay screenshots and provides real-time feedback on positioning, crosshair placement, and decision making.
                        </p>
                    </div>
            
                    <NavLink
                        className="resume-project-link"
                        to="/projects/ai-coach"
                    >
                        View Project →
                    </NavLink>
                </article>
            
                <article className="resume-project-item">
                    <div className="resume-project-icon">
                        <Globe />
                    </div>
            
                    <div className="resume-project-info">
                        <h2>Portfolio Website</h2>
                        <p>
                            Designed and developed this portfolio website using React and Vite to showcase my projects, skills, and experience.
                        </p>
                    </div>
            
                    <NavLink
                        className="resume-project-link"
                        to="/projects/website"
                    >
                        View Project →
                    </NavLink>
                </article>
            
                <article className="resume-project-item">
                    <div className="resume-project-icon">
                        <Server />
                    </div>
            
                    <div className="resume-project-info">
                        <h2>Local AI Server</h2>
                        <p>
                            Built and configured a local Ubuntu server with an NVIDIA GPU to run and experiment with large language models using Ollama.
                        </p>
                    </div>
            
                    <NavLink
                        className="resume-project-link"
                        to="/projects/ai-server"
                    >
                        View Project →
                    </NavLink>
                </article>
            </section>
        </section>
        <section className='resume-jobs'>
            <h2 className='resume-headers'>experience</h2>
            <div className='resume-chickfila'>
                <div className='chickfila-left'>
                    <h2>Chick-fil-A</h2>
                    <p>Kitchen Team Member</p>
                    <h5>August 2025 – March 2026 · Magnolia, Texas</h5>
                </div>
                <ul className='chickfila-right'>
                    <li>
                        Worked in a fast-paced environment while maintaining accuracy and efficiency.
                    </li>
                    <li>
                        Collaborated with team members to ensure excellent customer service.
                    </li>
                    <li>
                        Developed strong time management and problem-solving skills.
                    </li>
                </ul>
            </div>
        </section>
        <section className='resume-activities-certifications'>
            <section className='resume-activities'>
                <h2 className='resume-headers'>ACTIVITIES & ACHIEVEMENTS</h2>
                <ul>
                    <li>National Honor Society Member</li>
                    <li>UIL Computer Science Team Member</li>
                    <li>5th Place – UIL Computer Science Invitational</li>
                    <li>36+ Volunteer Hours Completed</li>
                </ul>
            </section>
            <section className='resume-certifications'>
                <h2 className='resume-headers'>CERTIFICATIONS</h2>
                <ul>
                    <li>Python Programming Certification</li>
                    <li>Java Programming Certification</li>
                    <li>JavaScript Certification</li>
                    <li>AutoCAD Certified User</li>
                </ul>
            </section>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Resume
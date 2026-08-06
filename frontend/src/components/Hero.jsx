import { NavLink } from 'react-router'
import earthImage from '../assets/earth.png'
import moonImage from '../assets/moon.png'
import marsImage from '../assets/mars.png'

function Hero() {
  return (
    <>
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
                    <NavLink className="hero-link-primary" to="/projects">
                      View Projects →
                    </NavLink>
      
                    <NavLink className="hero-link-secondary" to="/resume">
                      Resume ⭳
                    </NavLink>
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
    </>
  )
}

export default Hero
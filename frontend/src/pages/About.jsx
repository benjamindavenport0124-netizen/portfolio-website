import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import earthImage from '../assets/nasa-background.png'
import '../About.css'

function About() {
  return (
    <>
        <Navbar />

        <main>
            <section className='about-header'>
                <div className='about-text'>
                   <h2 className='about-headers'>About</h2>
                   <h1>Solving Problems </h1> 
                   <h1>From A Different Angle</h1>
                   <p>
                       I'm Benjamin Davenport, 
                       an aspiring aerospace engineer and 
                       software developer who loves building things 
                       that make a positive impact. 
                        I enjoy turning complex challenges into 
                        practical soluitions through engineering, code, and curiosity.
                        I approach engineering differently because I've always had to learn differently. 
                        Today I use that perspective to build AI tools, software, and engineering projects that solve real problems.
                    </p>
                </div>
                <div className="about-earthimage"> 
                    <img
                        className='earth-background'
                        src={earthImage}
                        alt='earth-background'
                    />
                </div>
            </section>
            <section className='about-story'>
                <h2 className='about-headers'>My Story</h2>
                <p className='about-main-text about-text-story'>
                    I was diagnosed with dyslexia at a young age. 
                    It meant reading and writing didn't come easily, 
                    and I often had to find my own way of learning.
                    Over time, it became one of my biggest strengths. 
                    It taught me to think visually, 
                    approach problems from different angles, 
                    and never be afraid to take the long way around to find the 
                    right solution.
                </p>
                <p className='about-main-text about-text-story'>
                    That mindset led me to engineering and programming. 
                    I enjoy designing systems, building software, and 
                    solving problems that matter. 
                    Whether it's aerospace, AI tools, or full-stack applications, 
                    I'm driven by curiosity and a desire to keep growing.
                </p>
            </section>
            <section className='about-engineering-goals'>
                <div className='about-engineering'>
                    <h2 className='about-headers'>Engineering Philosophy</h2>
                    <ul className='about-main-text'>
                        <li className='about-list'>
                            Understand the problem deeply before building a solution.
                        </li>
                        <li className='about-list'>
                            Simplicity, clarity, and reliability are non-negotiable. 
                        </li>
                        <li className='about-list'>
                            Iterate quickly, learn continuously, and never stop improving. 
                        </li>
                        <li className='about-list'>
                            Build with purpose and design with the end user in mind. 
                        </li>
                    </ul>
                </div>
                <div className='about-goals'>
                    <h2 className='about-headers'>Current Goals</h2>
                    <ul className='about-main-text'>
                        <li className='about-list'>
                            Deepen my understanding of aerospace systems and controls.
                        </li>
                        <li className='about-list'>
                            Build AI tools that solve real-world engineering problems. 
                        </li>
                        <li className='about-list'>
                            Get an Aerospace Engineering job.
                        </li>
                        <li className='about-list'>
                            Get into Texas A&M. 
                        </li>
                    </ul>
                </div>
            </section>
            <section className='about-journey'>
                <h2 className='about-headers'>Journey So Far</h2>
                <div className='about-timelines'>
                    <article className='timeline-item'>
                        <h3 className='about-headers'>MISSION START</h3>
                        <p>
                            Diagnosed with dyslexia and learned to approach problems from a different perspective.
                        </p>
                    </article>
                    <article className='timeline-item'>
                        <h3 className='about-headers'>FIRST CODE</h3>
                        <p>
                            Discovered programming and realized software could turn ideas into reality.
                        </p>
                    </article>
                    <article className='timeline-item'>
                        <h3 className='about-headers'>ENGINEERING MINDSET</h3>
                        <p>
                            Began designing increasingly complex projects and learned to solve problems systematically.
                        </p>
                    </article>
                    <article className='timeline-item'>
                        <h3 className='about-headers'>AI DEVELOPMENT</h3>
                        <p>
                            Built AI tools, a local AI server, and software to automate complex tasks.
                        </p>
                    </article>
                    <article className='timeline-item'>
                        <h3 className='about-headers'>NEXT LAUNCH</h3>
                        <p>
                            Study Aerospace Engineering and continue building technology that solves real-world problems.
                        </p>
                    </article>
                    <article className='timeline-item'>
                        <h3 className='about-headers'>DESTINATION</h3>
                        <p>
                            Contribute to the future of space exploration.
                        </p>
                    </article>
                </div>
            </section>
        </main>

        <Footer />
    </>
  )
}

export default About
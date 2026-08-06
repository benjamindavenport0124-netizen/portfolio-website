import { Link } from 'react-router'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import '../WorkInProgress.css'

function WorkInProgress() {
  return (
    <>
      <Navbar />

      <main className='wip-page'>
        <section className='wip-content'>
          <p className='wip-label'>Development Status</p>

          <h1>Work In Progress</h1>

          <p className='wip-description'>
            This page is currently under construction. I’m still designing,
            building, and testing this section of the portfolio.
          </p>

          <div className='wip-progress' aria-hidden='true'>
            <span className='wip-progress-fill'></span>
          </div>

          <p className='wip-status'>Development in progress</p>

          <Link className='wip-home-link' to='/'>
            ← Return Home
          </Link>
        </section>

        <div className='wip-visual' aria-hidden='true'>
          <div className='wip-orbit'>
            <span className='wip-object'></span>
          </div>

          <div className='wip-center'></div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default WorkInProgress
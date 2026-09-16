import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { NavBar } from './components/NavBar.jsx'

function App() {
  return (
    <div className="app-shell">
      <NavBar />

      <main className="container py-5">
        <section className="hero-panel">
          <span className="eyebrow">Welcome</span>
          <h1>Build something people remember.</h1>
          <p>
            We turn ideas into polished digital experiences with clean design,
            flexible systems, and thoughtful details.
          </p>

          <div className="hero-image">
            <img src="C:\Users\User\Downloads\˖⁺‧₊˚♡˚₊‧⁺˖.jfif" alt="Hero Image" />
          </div>
          
          <div className="cta-row">
            <button className="btn btn-primary btn-lg">Get started</button>
            <button className="btn btn-outline-light btn-lg">View work</button>
          </div>


        </section>

        <div className="row g-4 mt-1">
          <div className="col-md-4">
            <div className="info-card">
              <h3>Strategy</h3>
              <p>Clarify your goals and define a path that feels clear, focused, and measurable.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card">
              <h3>Design</h3>
              <p>Build interfaces that feel premium, readable, and easy to navigate on every screen.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card">
              <h3>Delivery</h3>
              <p>Ship fast with modern tools and components that are ready for real users.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

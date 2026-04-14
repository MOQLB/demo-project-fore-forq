import './App.css'

function App() {
  return (
    <>
      <section id="landing">
        <nav className="navbar">
          <div className="logo">MosaiqLabs</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#industries">Industries</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#cta" className="nav-cta">Get Started</a>
          </div>
        </nav>

        <div className="hero">
          <p className="hero-badge">AI Platform for Knowledge-Intensive Businesses</p>
          <h1>Transform manual processes into <span className="highlight">production-ready AI</span></h1>
          <p className="hero-subtitle">
            MosaiqLabs reads, understands, and categorises your information automatically —
            so your team can focus on high-impact work instead of repetitive tasks.
          </p>
          <div className="hero-actions">
            <a href="#cta" className="btn btn-primary">Request a Demo</a>
            <a href="#features" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      <section id="features">
        <h2 className="section-title">Modular AI that works the way you do</h2>
        <p className="section-subtitle">
          Plug in the capabilities you need. Every module is purpose-built for knowledge work.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">&#x1F50D;</div>
            <h3>Research &amp; Analysis</h3>
            <p>Automatically gather, synthesise, and surface insights from vast amounts of unstructured data.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1F4CA;</div>
            <h3>Reporting &amp; Deliverables</h3>
            <p>Generate polished reports and presentations in a fraction of the time, with consistent quality.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1F9E0;</div>
            <h3>Smart Categorisation</h3>
            <p>NLP-powered tagging and classification that learns your taxonomy and improves over time.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x26A1;</div>
            <h3>Workflow Automation</h3>
            <p>Connect your existing tools and automate end-to-end processes without writing a line of code.</p>
          </div>
        </div>
      </section>

      <section id="industries">
        <h2 className="section-title">Built for teams that run on knowledge</h2>
        <div className="industries-grid">
          <div className="industry-card">
            <h3>Consulting</h3>
            <p>Accelerate research, due diligence, and client deliverables with AI-assisted workflows.</p>
          </div>
          <div className="industry-card">
            <h3>Finance</h3>
            <p>Streamline compliance reviews, market analysis, and portfolio reporting at scale.</p>
          </div>
          <div className="industry-card">
            <h3>PR &amp; Communications</h3>
            <p>Monitor media, track sentiment, and produce campaign reports faster than ever.</p>
          </div>
        </div>
      </section>

      <section id="how-it-works">
        <h2 className="section-title">How it works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Connect your data</h3>
            <p>Bring in documents, emails, databases, and feeds from the tools you already use.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Configure your modules</h3>
            <p>Choose the AI capabilities you need — research, categorisation, reporting, or all of them.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>10x your output</h3>
            <p>Your team delivers higher-quality work in less time, while AI handles the heavy lifting.</p>
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="cta-content">
          <h2>Ready to transform your workflow?</h2>
          <p>Join leading consulting, finance, and communications teams already using MosaiqLabs.</p>
          <a href="https://mosaiqlabs.com" className="btn btn-primary btn-large" target="_blank" rel="noopener noreferrer">
            Get Started
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo">MosaiqLabs</span>
            <p>AI Platform for Knowledge-Intensive Businesses</p>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 MosaiqLabs. London, UK.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

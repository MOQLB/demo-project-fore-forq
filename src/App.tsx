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
            <a href="#security">Security</a>
            <a href="#cta" className="nav-cta">Get Started</a>
          </div>
        </nav>

        <div className="hero">
          <p className="hero-badge">AI Platform for Knowledge-Intensive Businesses</p>
          <h1>Turn information overload into <span className="highlight">actionable intelligence</span></h1>
          <p className="hero-subtitle">
            MosaiqLabs is an AI-powered knowledge hub that unifies your information in one place,
            analyses it automatically, and surfaces key findings — so your team can focus on
            high-impact work instead of drowning in data.
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
          Plug in the capabilities you need. Every module is purpose-built to democratise
          access to advanced AI for non-technical users.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">&#x1F50D;</div>
            <h3>Research &amp; Analysis</h3>
            <p>Automatically gather, synthesise, and surface insights from vast amounts of unstructured data across documents, emails, and feeds.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1F4CA;</div>
            <h3>Reporting &amp; Deliverables</h3>
            <p>Generate polished reports and presentations in a fraction of the time, with consistent quality and brand alignment.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1F9E0;</div>
            <h3>Smart Categorisation</h3>
            <p>NLP-powered tagging and classification that learns your taxonomy, organises large volumes of information, and improves over time.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x26A1;</div>
            <h3>Workflow Automation</h3>
            <p>Connect your existing tools and automate end-to-end processes — no code required. From ingestion to insight in minutes.</p>
          </div>
        </div>
      </section>

      <section id="industries">
        <h2 className="section-title">Built for teams that run on knowledge</h2>
        <p className="section-subtitle industries-subtitle">
          Our platform handles information-heavy tasks so your team can focus on what matters most.
        </p>
        <div className="industries-grid">
          <div className="industry-card">
            <div className="industry-icon">&#x1F4BC;</div>
            <h3>Consulting</h3>
            <p>Accelerate research, due diligence, and client deliverables with AI-assisted workflows that cut manual effort by up to 80%.</p>
          </div>
          <div className="industry-card">
            <div className="industry-icon">&#x1F4B9;</div>
            <h3>Finance</h3>
            <p>Streamline compliance reviews, market analysis, and portfolio reporting at scale with enterprise-grade accuracy.</p>
          </div>
          <div className="industry-card">
            <div className="industry-icon">&#x1F4E2;</div>
            <h3>PR &amp; Communications</h3>
            <p>Monitor media, track sentiment, and produce campaign reports faster than ever — all from a single dashboard.</p>
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

      <section id="security">
        <h2 className="section-title">Enterprise-grade security</h2>
        <p className="section-subtitle">
          Your data stays yours. We take security and privacy seriously at every layer.
        </p>
        <div className="security-grid">
          <div className="security-item">
            <div className="security-icon">&#x1F512;</div>
            <h3>Azure OpenAI</h3>
            <p>AI services run through Microsoft Azure OpenAI — your prompts and responses are never shared with other customers or used to train models.</p>
          </div>
          <div className="security-item">
            <div className="security-icon">&#x2601;&#xFE0F;</div>
            <h3>Google Cloud (EU)</h3>
            <p>Infrastructure and storage hosted on Google Cloud in Europe, with all data encrypted at rest and in transit.</p>
          </div>
          <div className="security-item">
            <div className="security-icon">&#x1F6E1;&#xFE0F;</div>
            <h3>Data Isolation</h3>
            <p>Strict tenant isolation ensures your information is never accessible to other organisations on the platform.</p>
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="cta-content">
          <h2>Ready to transform your workflow?</h2>
          <p>Join leading consulting, finance, and communications teams already using MosaiqLabs to turn manual processes into production-ready AI.</p>
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
          <div className="footer-links">
            <a href="https://mosaiqlabs.com" target="_blank" rel="noopener noreferrer">Website</a>
            <a href="https://uk.linkedin.com/company/mosaiq-labs" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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

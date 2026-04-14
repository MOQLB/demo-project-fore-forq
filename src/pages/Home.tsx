import '../App.css'
import { useTheme } from '../hooks/useTheme'
import AnimatedGridBackground from '../components/AnimatedGridBackground'

function Home() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <section id="landing">
        <AnimatedGridBackground />
        <nav className="navbar">
          <div className="logo">MosaiqLabs</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#ecosystem">Ecosystem</a>
            <a href="#industries">Industries</a>
            <a href="#security">Security</a>
            <a href="#faq">FAQ</a>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? '\u2600\uFE0F' : '\uD83C\uDF19'}
            </button>
            <a href="#cta" className="nav-cta">Get Started</a>
          </div>
        </nav>

        <div className="hero">
          <p className="hero-badge">AI Platform for Knowledge-Intensive Businesses</p>
          <h1>Turn information overload into <span className="highlight">actionable intelligence</span></h1>
          <p className="hero-subtitle">
            MosaiqLabs is the modular AI platform that reads, understands, and categorises
            vast amounts of unstructured data — so consultants, analysts, and researchers
            can focus on high-impact work instead of manual processing.
          </p>
          <div className="hero-actions">
            <a href="#cta" className="btn btn-primary">Request a Demo</a>
            <a href="#features" className="btn btn-secondary">Explore the Platform</a>
          </div>
        </div>

        <div className="stats-bar">
          <div className="stat">
            <span className="stat-number">80%</span>
            <span className="stat-label">Reduction in manual effort</span>
          </div>
          <div className="stat">
            <span className="stat-number">10x</span>
            <span className="stat-label">Faster deliverables</span>
          </div>
          <div className="stat">
            <span className="stat-number">95%</span>
            <span className="stat-label">User satisfaction rate</span>
          </div>
          <div className="stat">
            <span className="stat-number">Days</span>
            <span className="stat-label">Not months to deploy</span>
          </div>
        </div>
      </section>

      <section id="trusted-by">
        <p className="trusted-label">Trusted by knowledge teams across industries</p>
        <div className="trusted-logos">
          <span className="trusted-logo-item">Consulting</span>
          <span className="trusted-logo-item">Finance</span>
          <span className="trusted-logo-item">Legal</span>
          <span className="trusted-logo-item">PR &amp; Comms</span>
          <span className="trusted-logo-item">Research</span>
        </div>
      </section>

      <section id="features">
        <h2 className="section-title">Modular AI that works the way you do</h2>
        <p className="section-subtitle">
          No code required. Every module is purpose-built to democratise advanced AI
          for non-technical knowledge workers — plug in what you need and go.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">&#x1F50D;</div>
            <h3>Research &amp; Analysis</h3>
            <p>Automatically gather, synthesise, and surface insights from unstructured data across documents, emails, and feeds — cutting research cycles from weeks to hours.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1F4CA;</div>
            <h3>Reporting &amp; Deliverables</h3>
            <p>Generate polished reports and presentations with consistent quality and brand alignment. From raw data to client-ready deliverable in minutes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1F9E0;</div>
            <h3>Smart Categorisation</h3>
            <p>NLP-powered tagging and classification that learns your taxonomy, organises large volumes of information, and improves over time with every interaction.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x26A1;</div>
            <h3>Workflow Automation</h3>
            <p>Connect your existing tools and automate end-to-end processes — from ingestion to insight — eliminating repetitive manual handoffs.</p>
          </div>
        </div>
      </section>

      <section id="ecosystem">
        <h2 className="section-title">The MosaiqLabs ecosystem</h2>
        <p className="section-subtitle ecosystem-subtitle">
          A complete AI stack built for knowledge-intensive businesses.
          Start with one capability and expand as your needs grow.
        </p>
        <div className="ecosystem-grid">
          <div className="ecosystem-card">
            <div className="ecosystem-icon">&#x1F4DA;</div>
            <h3>Knowledge Management</h3>
            <p>Centralise data from disparate sources — documents, emails, databases, web feeds — into a unified, AI-ready knowledge hub.</p>
          </div>
          <div className="ecosystem-card">
            <div className="ecosystem-icon">&#x2699;&#xFE0F;</div>
            <h3>Process Intelligence</h3>
            <p>Map and optimise your workflows to make them AI-ready. Identify bottlenecks and automate the steps that slow your team down.</p>
          </div>
          <div className="ecosystem-card">
            <div className="ecosystem-icon">&#x1F3AF;</div>
            <h3>Customised AI Solutions</h3>
            <p>Tailored AI models and pipelines built around your specific domain, terminology, and business processes.</p>
          </div>
          <div className="ecosystem-card">
            <div className="ecosystem-icon">&#x1F91D;</div>
            <h3>Strategy &amp; Training</h3>
            <p>Expert consulting to help your organisation adopt AI effectively — from strategy workshops to hands-on team enablement.</p>
          </div>
        </div>
      </section>

      <section id="industries">
        <h2 className="section-title">Built for teams that run on knowledge</h2>
        <p className="section-subtitle industries-subtitle">
          From due diligence to media monitoring, MosaiqLabs handles information-heavy
          workflows so professionals can focus on judgement and creativity.
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
            <p>Streamline compliance reviews, market analysis, and portfolio reporting at scale with enterprise-grade accuracy and audit trails.</p>
          </div>
          <div className="industry-card">
            <div className="industry-icon">&#x1F4E2;</div>
            <h3>PR &amp; Communications</h3>
            <p>Monitor media, track sentiment, and produce campaign reports faster than ever — all from a single intelligent dashboard.</p>
          </div>
          <div className="industry-card">
            <div className="industry-icon">&#x2696;&#xFE0F;</div>
            <h3>Legal</h3>
            <p>Automate contract review, regulatory research, and case preparation — surface relevant precedents and clauses in seconds.</p>
          </div>
        </div>
      </section>

      <section id="how-it-works">
        <h2 className="section-title">Up and running in three steps</h2>
        <p className="section-subtitle">
          No complex integrations or months-long rollouts. Get value from AI in days, not quarters.
        </p>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Connect your data</h3>
            <p>Bring in documents, emails, databases, and feeds from the tools you already use. Our connectors handle the rest.</p>
          </div>
          <div className="step-connector" />
          <div className="step">
            <div className="step-number">2</div>
            <h3>Configure your modules</h3>
            <p>Choose the AI capabilities you need — research, categorisation, reporting, or the full ecosystem.</p>
          </div>
          <div className="step-connector" />
          <div className="step">
            <div className="step-number">3</div>
            <h3>10x your output</h3>
            <p>Your team delivers higher-quality work in a fraction of the time, while AI handles the heavy lifting.</p>
          </div>
        </div>
      </section>

      <section id="why-mosaiqlabs">
        <h2 className="section-title">Why teams choose MosaiqLabs</h2>
        <div className="comparison-grid">
          <div className="comparison-card comparison-before">
            <h3>Without MosaiqLabs</h3>
            <ul>
              <li>Weeks spent on manual research and data gathering</li>
              <li>Inconsistent report quality across the team</li>
              <li>Knowledge siloed in inboxes and shared drives</li>
              <li>Analysts buried in formatting instead of thinking</li>
              <li>Generic AI tools that don't understand your domain</li>
            </ul>
          </div>
          <div className="comparison-card comparison-after">
            <h3>With MosaiqLabs</h3>
            <ul>
              <li>Research synthesised from unstructured data in hours</li>
              <li>Brand-aligned deliverables generated automatically</li>
              <li>Unified knowledge hub accessible to the whole team</li>
              <li>Analysts focused on strategy and client relationships</li>
              <li>AI tailored to your taxonomy, processes, and domain</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="security">
        <h2 className="section-title">Enterprise-grade security &amp; privacy</h2>
        <p className="section-subtitle">
          Your data stays yours. Built from the ground up with European data sovereignty,
          strict isolation, and zero data training — because trust is non-negotiable.
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
            <p>All infrastructure and storage hosted on Google Cloud within the European Union, with data encrypted at rest and in transit.</p>
          </div>
          <div className="security-item">
            <div className="security-icon">&#x1F6E1;&#xFE0F;</div>
            <h3>Strict Tenant Isolation</h3>
            <p>Your information is never accessible to other organisations on the platform. Full data isolation at every layer of the stack.</p>
          </div>
          <div className="security-item">
            <div className="security-icon">&#x1F4DD;</div>
            <h3>Full Audit Logging</h3>
            <p>Complete audit trail of every action and data access event, giving your compliance team total visibility and control.</p>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <h2 className="section-title">Trusted by knowledge teams</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-quote">"MosaiqLabs cut our research cycle from two weeks to two days. The quality of the output is remarkable — our clients can't tell the difference."</p>
            <div className="testimonial-author">
              <strong>Strategy Director</strong>
              <span>Global Consulting Firm</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-quote">"We needed an AI solution that kept data in the EU and didn't train on our inputs. MosaiqLabs was the only platform that ticked every compliance box."</p>
            <div className="testimonial-author">
              <strong>Head of Innovation</strong>
              <span>Financial Services</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-quote">"The smart categorisation module saved our team hundreds of hours. It learned our taxonomy in days and now handles classification better than we did manually."</p>
            <div className="testimonial-author">
              <strong>Knowledge Manager</strong>
              <span>International Law Firm</span>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <h2 className="section-title">Frequently asked questions</h2>
        <div className="faq-list">
          <details className="faq-item">
            <summary>What types of data can MosaiqLabs process?</summary>
            <p>MosaiqLabs works with documents (PDF, Word, Excel), emails, web feeds, databases, and most unstructured text sources. Our connectors integrate with the tools your team already uses, so there's no need to change your existing workflow.</p>
          </details>
          <details className="faq-item">
            <summary>Is my data used to train AI models?</summary>
            <p>No. We use Azure OpenAI, which guarantees your data is never used for model training or shared with other customers. Your information remains strictly private and under your control.</p>
          </details>
          <details className="faq-item">
            <summary>How long does it take to get started?</summary>
            <p>Most teams are up and running within days, not months. Our modular architecture means you can start with one capability — like research or categorisation — and expand as you see results.</p>
          </details>
          <details className="faq-item">
            <summary>Where is my data stored?</summary>
            <p>All data is stored on Google Cloud infrastructure within the European Union, encrypted at rest and in transit, with strict tenant isolation. This makes MosaiqLabs ideal for organisations with EU data residency requirements.</p>
          </details>
          <details className="faq-item">
            <summary>Do I need technical expertise to use the platform?</summary>
            <p>Not at all. MosaiqLabs is designed for non-technical knowledge workers. The entire platform is no-code — your team can configure modules, run analyses, and generate reports without writing a single line of code.</p>
          </details>
          <details className="faq-item">
            <summary>Can MosaiqLabs be customised for my industry?</summary>
            <p>Yes. Our Customised AI Solutions module lets us tailor models and pipelines to your specific domain, terminology, and business processes. We work closely with your team to ensure the platform fits your workflow perfectly.</p>
          </details>
        </div>
      </section>

      <section id="cta">
        <div className="cta-content">
          <h2>Ready to transform your workflow?</h2>
          <p>Join leading consulting, finance, legal, and communications teams already using MosaiqLabs to turn weeks of manual work into minutes of intelligent automation.</p>
          <div className="cta-actions">
            <a href="https://mosaiqlabs.com" className="btn btn-primary btn-large" target="_blank" rel="noopener noreferrer">
              Request a Demo
            </a>
            <p className="cta-note">No credit card required. See results in your first session.</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="logo">MosaiqLabs</span>
              <p>AI Platform for Knowledge-Intensive Businesses</p>
              <p className="footer-location">London, United Kingdom</p>
            </div>
            <div className="footer-nav">
              <div className="footer-col">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#ecosystem">Ecosystem</a>
                <a href="#industries">Industries</a>
                <a href="#security">Security</a>
                <a href="#faq">FAQ</a>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <a href="https://mosaiqlabs.com" target="_blank" rel="noopener noreferrer">Website</a>
                <a href="https://www.mosaiqlabs.com/about" target="_blank" rel="noopener noreferrer">About</a>
                <a href="https://uk.linkedin.com/company/mosaiq-labs" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 MosaiqLabs Ltd. Built by people who've been there.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home

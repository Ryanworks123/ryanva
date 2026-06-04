import { useState, useEffect } from 'react'
import { FaEnvelope, FaClock, FaPhone, FaLinkedin, FaFacebook, FaInstagram, FaBriefcase, FaMapMarkerAlt, FaBars, FaTimes, FaArrowUp } from 'react-icons/fa'
import Flickity from 'react-flickity-component'
import 'flickity/css/flickity.css'
import './App.css'

function LiveClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const gmt8Time = new Date(time.toLocaleString('en-US', { timeZone: 'Asia/Manila' }))
  const hours = String(gmt8Time.getHours()).padStart(2, '0')
  const minutes = String(gmt8Time.getMinutes()).padStart(2, '0')
  const seconds = String(gmt8Time.getSeconds()).padStart(2, '0')

  return (
    <div className="live-clock">
      <span className="clock-display">{hours}:{minutes}:{seconds}</span>
      <span className="clock-label"> GMT+8</span>
    </div>
  )
}

export default App

const services = [
  {
    title: '📧 Administrative Support',
    description: 'Stay organized and productive with reliable administrative assistance, including document management, file organization, email handling, and day-to-day business support.',
    items: ['Email organization', 'document management', 'file organization', 'data entry'],
  },
  {
    title: '📅 Email & Calendar Management',
    description: 'Keep your schedule running smoothly through appointment coordination, calendar organization, meeting scheduling, and reminder management.',
    items: ['Appointment scheduling', 'Calendar management', 'Meeting coordination'],
  },
  {
    title: '🔍 Internet Research',
    description: 'Gather valuable information through detailed online research, competitor analysis, product research, and data collection tailored to your business needs.',
    items: ['Market research', 'product research', 'competitor analysis', ' information gathering'],
  },
  {
    title: '🤝 Customer Support',
    description: 'Deliver professional customer experiences through inquiry handling, client communication, follow-ups, and responsive support.',
    items: ['Handling inquiries', 'responding to customer concerns', 'providing professional assistance'],
  },
  {
    title: '📊 Data Entry & Management',
    description: 'Gather valuable information through detailed online research, competitor analysis, product research, and data collection tailored to your business needs.',
    items: ['Spreadsheet management', 'database updates', 'data organization', 'reporting'],
  },
  {
    title: '💻 Technical Support Assistance',
    description: 'Provide basic technical assistance, troubleshooting guidance, software support, and technology-related documentation backed by an IT background.',
    items: ['Basic troubleshooting', 'software setup guidance', 'technical documentation'],
  },
]

const skills = [
  { category: 'Organization & Planning', items: ['Task prioritization', 'Time management', 'Workflow optimization', 'Project tracking'] },
  { category: 'Communication', items: ['Clear written communication', 'Professional email etiquette', 'Attention to detail', 'Proactive updates'] },
  { category: 'Technical Proficiency', items: ['Software quick-learning', 'Google Workspace mastery', 'Data management', 'Cloud document handling'] },
  { category: 'Problem-Solving', items: ['Process improvement', 'System optimization', 'Self-directed learning', 'Adaptability'] },
]

const sampleProjects = [
  {
    title: 'Email Management System Setup',
    description: 'Built comprehensive email organization system with filters, labels, and automated rules. Reduced inbox clutter by 80% and improved response time tracking.',
    skills: ['Gmail', 'Process design', 'Documentation'],
  },
  {
    title: 'Lead Generation & Research Project',
    description: 'Researched and compiled 500+ qualified leads across 3 industries with contact info, company details, and personalization notes for outreach.',
    skills: ['Research', 'Data entry', 'Spreadsheet management', 'Attention to detail'],
  },
  {
    title: 'Customer Support Workflow',
    description: 'Created ticket management system with response templates, escalation paths, and follow-up reminders. Standardized customer communication.',
    skills: ['Process documentation', 'Customer service', 'Template creation'],
  },
  {
    title: 'Content Calendar & Social Media Coordination',
    description: 'Planned, scheduled, and tracked social media posts across 2 platforms for 6 weeks with engagement analytics and performance reports.',
    skills: ['Canva', 'Social media tools', 'Analytics', 'Organization'],
  },
]

const certifications = [
  {
    title: 'Windows Server 2012 Training',
    issuer: 'Learned server management, configuration, and system administration fundamentals.',
  },
  {
    title: 'Active Directory Training ',
    issuer: 'Gained knowledge in user account management, directory services, and network administration.',
  },
  {
    title: 'SQL & Database Fundamentals',
    issuer: 'Studied database concepts, SQL queries, data organization, and database management.',
  },
  {
    title: 'MongoDB Database Training',
    issuer: 'Learned NoSQL database structures, collections, and data management techniques.',
  },
]

const training = [
  {
    title: 'Online VA Bootcamp',
    description: 'Comprehensive virtual assistant training covering admin tasks, client management, and business systems.',
  },
  {
    title: 'Tool Mastery Programs',
    description: 'Hands-on training in Notion, Asana, Google Workspace, Canva, and email management systems.',
  },
  {
    title: 'Communication & Soft Skills',
    description: 'Professional communication, email etiquette, time management, and client relationship building.',
  },
]

const feedback = [
  {
    quote: 'Shows exceptional attention to detail and takes initiative to improve processes beyond assigned tasks.',
    source: 'Virtual Assistant Training Program Instructor',
    context: 'Email Management & CRM Module',
  },
  {
    quote: 'Consistently delivers high-quality work with clear communication and proactive problem-solving.',
    source: 'Project Management Course Mentor',
    context: 'Project Tracking & Organization',
  },
  {
    quote: 'Demonstrates strong commitment to learning and adapts quickly to new tools and workflows.',
    source: 'Google Workspace Training Feedback',
    context: 'Gmail & Calendar Management',
  },
]

const values = [
  'Reliable follow-through on every task',
  'Clear, proactive communication',
  'Fast learning & continuous improvement',
  'Attention to detail in everything',
  'Flexible and adaptable support',
  'Organized, efficient systems',
]

const tools = [
  'Asana', 'Trello', 'Notion', 'Google Workspace', 'Slack', 'Canva',
  'Mailchimp', 'Shopify', 'Microsoft 365', 'Zoom', 'Calendly', 'Airtable',
  'HubSpot', 'Freshdesk', 'Zapier', 'Evernote', 'Monday.com', 'Wave',
]

function handleContactSubmit(e) {
  e.preventDefault()
  const form = e.target
  const formData = Object.fromEntries(new FormData(form))
  
  fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        alert('Message sent! I\'ll get back to you within 2 hours.')
        form.reset()
      } else {
        alert('Something went wrong. Please try again.')
      }
    })
    .catch(err => {
      console.error(err)
      alert('Error sending message. Please try again.')
    })
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', `#${id}`)
      setMobileMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <div className="portfolio">
      {/* Mobile Navigation */}
      <nav className="mobile-nav">
        <button 
          className="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="mobile-nav-link"
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Customer-Focused Virtual Assistant</span>
          <h1>Virtual Assistant with a strong background in customer support, technology, and administrative assistance.</h1>
          <p>Detail-oriented Virtual Assistant with a background in customer support, technical assistance, and administrative tasks. Skilled in communication, organization, and problem-solving, with a commitment to helping businesses stay productive and focused on growth.</p>
          <div className="hero-actions">
            <a href="#contact" className="cta-primary">Schedule Free Consultation</a>
            <a href="#services" className="cta-secondary">Explore Services</a>
          </div>
        </div>

        <div className="hero-visual">
          <Flickity
            className={'carousel'}
            elementType={'div'}
            options={{
              initialIndex: 0,
              prevNextButtons: true,
              pageDots: true,
              autoPlay: 4000,
              wrapAround: true,
              groupCells: false,
              fade: false,
              contain: true,
              arrowShape: {
                x0: 10,
                x1: 60,
                y1: 50,
                x2: 50,
                y2: 0,
                x3: 65,
              },
              // Mobile-friendly options
              draggable: true,
              freeScroll: false,
              touchVerticalThreshold: 0,
              selectedAttraction: 0.025,
              friction: 0.28,
            }}
            reloadOnChange
            static
          >
            {/* Card 1: Profile Intro */}
            <div className="carousel-cell hero-carousel-cell">
              <div className="hero-card-glass">
                <div className="card-header">
                  <span className="badge-new">Available for New Clients</span>
                </div>
                <div className="profile-avatar-wrapper">
                  <img src="Gwapo.png" alt="Professional avatar placeholder" className="profile-avatar" />
                </div>
                <div className="card-content">
                  <h3>Professional Profile</h3>
                  <p className="card-subtitle">Customer Support VA | Administrative Support | Tech-Savvy</p>
                  <p>IT graduate with experience in customer support, technical assistance, and administrative tasks. Dedicated to helping businesses stay organized, productive, and focused on growth.</p>
                  <div className="card-stats">
                    <div className="stat">
                      <strong>540 Hours OJT</strong>
                      <span>Technical & Sales Support</span>
                    </div>
                    <div className="stat">
                      <strong>MS Office</strong>
                      <span>Excel • Word • PowerPoint</span>
                    </div>
                    <div className="stat">
                      <strong>Tech-Savvy</strong>
                      <span>HTML • CSS • JS • SQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Key Strengths */}
            <div className="carousel-cell hero-carousel-cell">
              <div className="hero-card-glass">
                <div className="card-header accent-blue">
                  <span className="badge">💡 Strengths</span>
                </div>
                <div className="card-content">
                  <h3>Core Competencies</h3>
                  <ul className="strengths-list">
                    <li>
                      <span className="icon">✓</span>
                      Customer Support & Communication
                    </li>
                    <li>
                      <span className="icon">✓</span>
                      Problem Solving & Troubleshooting
                    </li>
                    <li>
                      <span className="icon">✓</span>
                      Fast Learning & Adaptability
                    </li>
                    <li>
                      <span className="icon">✓</span>
                      Attention to Detail
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3: Tools & Software */}
            <div className="carousel-cell hero-carousel-cell">
              <div className="hero-card-glass">
                <div className="card-header accent-purple">
                  <span className="badge">🛠️ Tools</span>
                </div>
                <div className="card-content">
                  <h3>Software Proficiency</h3>
                  <div className="tools-preview">
                    <span className="tool-pill">Google Workspace</span>
                    <span className="tool-pill">MS Offices</span>
                    <span className="tool-pill">Gmail</span>
                    <span className="tool-pill">React</span>
                    <span className="tool-pill">Canva</span>
                    <span className="tool-pill">Shopify</span>
                    <span className="tool-pill">+ 12 more</span>
                  </div>
                  <p className="tools-note">Comfortable with Microsoft Office, databases, web technologies, and quickly learning new platforms.</p>
                </div>
              </div>
            </div>

            {/* Card 4: Training & Certs */}
            <div className="carousel-cell hero-carousel-cell">
              <div className="hero-card-glass">
                <div className="card-header accent-green">
                  <span className="badge">🎓 Training</span>
                </div>
                <div className="card-content">
                  <h3>Certifications</h3>
                  <div className="certs-list">
                    <div className="cert-item">
                      <strong>Customer Support</strong>
                      <small>Client Communication, Inquiry Handling</small>
                    </div>
                    <div className="cert-item">
                      <strong>Google Workspace</strong>
                      <small>Email, Calendar, Docs & Sheets</small>
                    </div>
                    <div className="cert-item">
                      <strong>Technical Support</strong>
                      <small>Troubleshooting & Problem Solving</small>
                    </div>
                     <div className="cert-item">
                      <strong>Administrative Skills</strong>
                      <small>Microsoft Office & Documentation</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Why Choose Me */}
            <div className="carousel-cell hero-carousel-cell">
              <div className="hero-card-glass">
                <div className="card-header accent-orange">
                  <span className="badge">⭐ Why Me</span>
                </div>
                <div className="card-content">
                  <h3>Value Proposition</h3>
                  <div className="value-list">
                    <div className="value-item">
                      <h4>Risk-Free Start</h4>
                      <p>Free trial task with zero commitment</p>
                    </div>
                    <div className="value-item">
                      <h4>2-Hour Response</h4>
                      <p>Fast, reliable communication always</p>
                    </div>
                    <div className="value-item">
                      <h4>Ready Now</h4>
                      <p>Certified and prepared to execute immediately</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Flickity>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm an IT graduate with a background in customer support, technical assistance, and administrative work. I help businesses stay organized through reliable virtual assistance, strong communication, and attention to detail. With a proactive mindset and a passion for continuous learning, I'm committed to delivering professional support that helps clients focus on growing their business.
          </p>
          <p>
            I understand that hiring a first-time VA means taking a chance. That's why I offer a free trial task — so you can experience
            my professionalism, communication, and work quality before making any commitment. I'm not just looking for clients; I'm looking
            to build a reputation as someone you can trust and rely on.
          </p>
          <p>
            When you work with me, you're getting someone who is organized, responsive, and genuinely invested in your success.
            I learn quickly, ask clarifying questions, and always over-communicate to ensure nothing falls through the cracks.
          </p>
        </div>
      </section>

      {/* Stats Highlight */}
      <section className="stats-section">
        <article className="stat-card">
          <h3>Problem Solver</h3>
          <p>Finds efficient solutions to everyday challenges.</p>
        </article>
        <article className="stat-card">
          <h3>Customer-Oriented</h3>
          <p>Committed to excellent service and support.</p>
        </article>
        <article className="stat-card">
          <h3>Fast Learner</h3>
          <p>Quickly adapts to new tools, systems, and client needs.</p>
        </article>
      </section>

      {/* What You Get With Me */}
      <section className="values-section">
        <h2>What You Get With Me</h2>
        <div className="values-grid">
          {values.map((value) => (
            <article key={value} className="value-card">
              <div className="value-icon">✓</div>
              <h3>{value}</h3>
            </article>
          ))}
        </div>
      </section>

      {/* Services Offered */}
      <section id="services" className="services-section">
        <h2>Services I Offer</h2>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Skills & Strengths */}
      <section className="skills-section">
        <h2>Skills & Strengths</h2>
        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <article key={skillGroup.category} className="skill-card card">
              <h3>{skillGroup.category}</h3>
              <ul>
                {skillGroup.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Sample Projects */}
      <section id="projects" className="projects-section">
        <h2>Sample Projects</h2>
        <div className="projects-grid">
          {sampleProjects.map((project) => (
            <article key={project.title} className="project-card card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-skills">
                {project.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Certifications & Training */}
      <section className="certifications-section">
        <h2>Certifications & Training</h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <article key={cert.title} className="cert-card card">
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-skills">{cert.skills}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Training Programs Completed */}
      <section className="training-section">
        <h2>Training & Development</h2>
        <div className="training-grid">
          {training.map((item) => (
            <article key={item.title} className="training-card card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Tools & Software */}
      <section className="tools-section">
        <h2>Tools & Software Proficiency</h2>
        <div className="tools-card tools-grid">
          {tools.map((tool) => (
            <span key={tool} className="tool-badge">{tool}</span>
          ))}
        </div>
      </section>

      {/* Professional Feedback */}
      <section className="feedback-section">
        <h2>Training Feedback & References</h2>
        <div className="feedback-grid">
          {feedback.map((item, idx) => (
            <article key={idx} className="feedback-card card">
              <p className="feedback-quote">"{item.quote}"</p>
              <div className="feedback-source">
                <strong>{item.source}</strong>
                <span>{item.context}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="why-section">
        <h2>Why Work With Me?</h2>
        <div className="why-grid">
          <article className="why-card">
            <h3>No Experience Anxiety</h3>
            <p>I'm transparent about my stage and committed to proving myself through excellent work on your tasks.</p>
          </article>
          <article className="why-card">
            <h3>Fresh Perspective</h3>
            <p>New to the field means hungry, eager, and willing to go the extra mile to deliver great results.</p>
          </article>
          <article className="why-card">
            <h3>Solid Foundation</h3>
            <p>Comprehensive training, tool mastery, and communication skills ready to apply immediately.</p>
          </article>
          <article className="why-card">
            <h3>Risk-Free Start</h3>
            <p>Try a free task first. No commitment, no pressure — just see if we're a good fit.</p>
          </article>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Let's Work Together</h2>
        <p className="contact-intro">Ready to get your admin under control? Schedule a quick call to discuss your needs.</p>
        <div className="contact-grid">
          <article className="contact-card card">
            <div className="contact-icon-wrapper">
              <FaEnvelope className="contact-icon" />
            </div>
            <strong>Email</strong>
            <a href="mailto:ryanroferos.work@gmail.com">ryanroferos.work@gmail.com</a>
          </article>
          <article className="contact-card card">
            <div className="contact-icon-wrapper">
              <FaPhone className="contact-icon" />
            </div>
            <strong>Phone</strong>
            <a href="tel:+639455105552">+63 9455105552</a>
          </article>
          <article className="contact-card card">
            <div className="contact-icon-wrapper">
              <FaClock className="contact-icon" />
            </div>
            <strong>Timezone & Local Time</strong>
            <LiveClock />
            <p style={{ marginTop: '10px', fontSize: '0.9rem', color: 'var(--muted)' }}>Mindanao, Philippines</p>
          </article>
          <article className="contact-card card">
            <div className="contact-icon-wrapper">
              <FaPhone className="contact-icon" />
            </div>
            <strong>Response Time</strong>
            <p>Within 2 business hours</p>
          </article>
        </div>
        <div className="contact-form-section">
          <h3>Send a message</h3>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <input name="name" type="text" placeholder="Your Name" required autoComplete="name" />
            <input name="email" type="email" placeholder="Your Email" required autoComplete="email" />
            <textarea name="message" placeholder="Tell me about your VA needs..." rows="5" required autoComplete="off"></textarea>
            <button type="submit" className="cta-primary">Send Message</button>
          </form>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-container">
            <div className="footer-left">
              <h3>Ryan Roferos</h3>
              <p className="footer-copy">© 2026 Ryan Roferos. All rights reserved.</p>
            </div>
            <div className="footer-right">
              <ul className="footer-links" aria-label="Footer links">
                <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Home</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Services</a></li>
                <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>Portfolio</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Button (Mobile) */}
      {showScrollTop && (
        <button 
          className="scroll-indicator"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  )
}
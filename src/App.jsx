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
    title: '📧 Admin Support',
    description: 'Document management, file organization, email handling',
    items: ['Email', 'Documents', 'Files', 'Data entry'],
  },
  {
    title: '📅 Calendar Management',
    description: 'Appointment coordination, scheduling, reminders',
    items: ['Scheduling', 'Calendar', 'Meetings'],
  },
  {
    title: '🔍 Research',
    description: 'Online research, competitor analysis, data collection',
    items: ['Research', 'Analysis', 'Data'],
  },
  {
    title: '🤝 Customer Support',
    description: 'Inquiry handling, client communication, follow-ups',
    items: ['Support', 'Communication', 'Follow-ups'],
  },
  {
    title: '📊 Data Management',
    description: 'Spreadsheet management, database updates, reporting',
    items: ['Spreadsheets', 'Databases', 'Reports'],
  },
  {
    title: '💻 Tech Support',
    description: 'Basic troubleshooting, software setup, documentation',
    items: ['Troubleshooting', 'Setup', 'Documentation'],
  },
]

const skills = [
  { category: 'Organization', items: ['Task prioritization', 'Time management', 'Workflow'] },
  { category: 'Communication', items: ['Written communication', 'Email etiquette', 'Detail-oriented'] },
  { category: 'Technical', items: ['Quick-learning', 'Google Workspace', 'Data management'] },
  { category: 'Problem-Solving', items: ['Process improvement', 'Self-directed', 'Adaptable'] },
]

const sampleProjects = [
  {
    title: 'Email Management System',
    description: 'Built email organization with filters, labels, and automated rules. Reduced inbox clutter by 80%.',
    skills: ['Gmail', 'Process', 'Documentation'],
  },
  {
    title: 'Lead Generation',
    description: 'Researched 500+ qualified leads across 3 industries with contact info and personalization.',
    skills: ['Research', 'Data entry', 'Spreadsheets'],
  },
  {
    title: 'Customer Support Workflow',
    description: 'Created ticket management system with templates and follow-up reminders.',
    skills: ['Documentation', 'Customer service', 'Templates'],
  },
  {
    title: 'Social Media Coordination',
    description: 'Planned and scheduled social media posts with engagement analytics.',
    skills: ['Canva', 'Social media', 'Analytics'],
  },
]

const vaServices = [
  {
    title: 'Email & Calendar',
    description: 'Organize inboxes, manage responses, schedule appointments',
    items: ['Gmail', 'Outlook', 'Scheduling', 'Time management'],
  },
  {
    title: 'Research & Data',
    description: 'Online research, data entry, spreadsheet management',
    items: ['Research', 'Data entry', 'Google Sheets', 'Detail-oriented'],
  },
  {
    title: 'Admin Support',
    description: 'Document preparation, file organization, task tracking',
    items: ['Files', 'Documentation', 'Google Workspace', 'Organization'],
  },
  {
    title: 'Customer Service',
    description: 'Professional assistance through email and chat',
    items: ['Communication', 'Problem-solving', 'Support', 'Professionalism'],
  },
  {
    title: 'Social Media',
    description: 'Content scheduling, posting calendars, basic management',
    items: ['Canva', 'Scheduling', 'Social media', 'Content'],
  },
  {
    title: 'Development',
    description: 'Continuous learning and skill improvement',
    items: ['Adaptable', 'Fast learner', 'Self-motivated'],
  },
]

const certifications = [
  {
    title: 'On-the-Job Training - MAKOTEK',
    issuer: '540 hours - Computer sales & technical support',
  },
  {
    title: 'Windows Server 2012',
    issuer: 'ltfreetraining - 9h 24m',
  },
  {
    title: 'Active Directory',
    issuer: 'ltfreetraining - 14h 51m',
  },
  {
    title: 'Database Fundamentals',
    issuer: 'Certificate of Completion',
  },
  {
    title: 'SQL Databases',
    issuer: 'CS50 - Certificate',
  },
  {
    title: 'MongoDB',
    issuer: '11 hours - Certificate',
  },
  {
    title: 'PHP Development',
    issuer: 'CodeMy - 2h 33m',
  },
  {
    title: 'JavaScript',
    issuer: 'Bro Code - 8 hours',
  },
  {
    title: 'HTML & CSS',
    issuer: 'Telugu - 9h 7m',
  },
  {
    title: 'School Voting System',
    issuer: 'Certificate of Recognition',
  },
]

const training = []

const feedback = [
  {
    quote: 'Exceptional attention to detail and initiative to improve processes.',
    source: 'VA Training Instructor',
  },
  {
    quote: 'Consistently delivers high-quality work with clear communication.',
    source: 'Project Management Mentor',
  },
  {
    quote: 'Strong commitment to learning and adapts quickly to new tools.',
    source: 'Google Workspace Training',
  },
]

const values = [
  'Reliable follow-through',
  'Clear communication',
  'Fast learning',
  'Attention to detail',
  'Flexible support',
  'Organized systems',
]

const tools = [
  {
    category: 'Admin Support',
    items: ['Email', 'Calendar', 'Data Entry', 'Documents'],
  },
  {
    category: 'Communication',
    items: ['Gmail', 'Google Meet', 'Zoom'],
  },
  {
    category: 'Productivity',
    items: ['Google Docs', 'Google Sheets', 'Excel', 'Word', 'PowerPoint'],
  },
  {
    category: 'Creative & Research',
    items: ['Canva', 'Research', 'Lead Research', 'Data Gathering'],
  },
  {
    category: 'Tech Support',
    items: ['Customer Service', 'Troubleshooting', 'Inquiries', 'Files', 'Tasks'],
  },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null
  const [submitMessage, setSubmitMessage] = useState('')

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

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = Object.fromEntries(new FormData(form))

    // Prevent duplicate submissions
    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmitStatus(null)
    setSubmitMessage('')

    try {
      // Optimistic UI update - show sending state immediately
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 15000) // 15 second timeout

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.success) {
        // Success - show success message and reset form
        setSubmitStatus('success')
        setSubmitMessage(data.message || 'Message sent successfully!')
        form.reset()

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
          setSubmitMessage('')
        }, 5000)
      } else {
        // Error from API
        setSubmitStatus('error')
        setSubmitMessage(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      // Network error or timeout
      console.error('Contact form error:', error)
      setSubmitStatus('error')
      setSubmitMessage(
        error.name === 'AbortError'
          ? 'Request timed out. Please check your connection and try again.'
          : 'Network error. Please check your connection and try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
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
          <span className="eyebrow">Virtual Assistant</span>
          <h1>Customer support, technology & administrative assistance</h1>
          <p>Detail-oriented VA skilled in communication, organization, and problem-solving. Helping businesses stay productive and focused on growth.</p>
          <div className="hero-actions">
            <a href="#contact" className="cta-primary">Get Started</a>
            <a href="#services" className="cta-secondary">Services</a>
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
                  <span className="badge-new">Available Now</span>
                </div>
                <div className="profile-avatar-wrapper">
                  <img src="Gwapo.png" alt="Professional avatar placeholder" className="profile-avatar" />
                </div>
                <div className="card-content">
                  <h3>Professional Profile</h3>
                  <p className="card-subtitle">Customer Support | Admin | Tech-Savvy</p>
                  <p>IT graduate with customer support, technical assistance, and administrative experience. Helping businesses stay organized and productive.</p>
                  <div className="card-stats">
                    <div className="stat">
                      <strong>540 Hours OJT</strong>
                      <span>Tech & Sales</span>
                    </div>
                    <div className="stat">
                      <strong>MS Office</strong>
                      <span>Excel • Word • PPT</span>
                    </div>
                    <div className="stat">
                      <strong>Tech</strong>
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
                    <li><span className="icon">✓</span>Customer Support</li>
                    <li><span className="icon">✓</span>Problem Solving</li>
                    <li><span className="icon">✓</span>Fast Learning</li>
                    <li><span className="icon">✓</span>Attention to Detail</li>
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
                    <span className="tool-pill">MS Office</span>
                    <span className="tool-pill">Gmail</span>
                    <span className="tool-pill">React</span>
                    <span className="tool-pill">Canva</span>
                    <span className="tool-pill">+ 12 more</span>
                  </div>
                  <p className="tools-note">Comfortable with MS Office, databases, web technologies, and learning new platforms.</p>
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
                      <small>Communication, Inquiries</small>
                    </div>
                    <div className="cert-item">
                      <strong>Google Workspace</strong>
                      <small>Email, Calendar, Docs</small>
                    </div>
                    <div className="cert-item">
                      <strong>Technical Support</strong>
                      <small>Troubleshooting</small>
                    </div>
                    <div className="cert-item">
                      <strong>Admin Skills</strong>
                      <small>MS Office, Docs</small>
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
                      <p>Free trial task, zero commitment</p>
                    </div>
                    <div className="value-item">
                      <h4>2-Hour Response</h4>
                      <p>Fast, reliable communication</p>
                    </div>
                    <div className="value-item">
                      <h4>Ready Now</h4>
                      <p>Certified, prepared to execute</p>
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
            IT graduate with customer support, technical assistance, and administrative experience. I help businesses stay organized through reliable virtual assistance and attention to detail.
          </p>
          <p>
            I offer a free trial task so you can experience my work quality before commitment. I'm building a reputation as someone you can trust and rely on.
          </p>
          <p>
            Organized, responsive, and invested in your success. I learn quickly, ask clarifying questions, and over-communicate to ensure nothing falls through the cracks.
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

      {/* VA Tasks I'm Ready to Handle */}
      <section className="va-services-section">
        <h2>VA Tasks I'm Ready to Handle</h2>
        <div className="services-grid">
          {vaServices.map((service) => (
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
        <div className="tools-grid">
          {tools.map((toolGroup) => (
            <article key={toolGroup.category} className="tool-category-card card">
              <h3>{toolGroup.category}</h3>
              <ul>
                {toolGroup.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
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
            <p>Transparent about my stage, committed to proving myself through excellent work.</p>
          </article>
          <article className="why-card">
            <h3>Fresh Perspective</h3>
            <p>Hungry, eager, and willing to go the extra mile to deliver great results.</p>
          </article>
          <article className="why-card">
            <h3>Solid Foundation</h3>
            <p>Training, tool mastery, and communication skills ready to apply immediately.</p>
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
        <p className="contact-intro">Ready to get your admin under control? Send me a message.</p>
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
            <strong>Timezone</strong>
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
            <input name="name" type="text" placeholder="Name" required autoComplete="name" disabled={isSubmitting} />
            <input name="email" type="email" placeholder="Email" required autoComplete="email" disabled={isSubmitting} />
            <textarea name="message" placeholder="Your VA needs..." rows="5" required autoComplete="off" disabled={isSubmitting}></textarea>
            
            {submitStatus && (
              <div className={`form-message ${submitStatus}`}>
                {submitMessage}
              </div>
            )}
            
            <button type="submit" className="cta-primary" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="button-content">
                  <span className="spinner"></span>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
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
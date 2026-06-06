import { useState, useEffect } from 'react'
import { FaEnvelope, FaClock, FaPhone, FaLinkedin, FaFacebook, FaInstagram, FaBriefcase, FaMapMarkerAlt, FaBars, FaTimes, FaArrowUp } from 'react-icons/fa'
import Flickity from 'react-flickity-component'
import 'flickity/css/flickity.css'
import './App.css'
import CVButton from './pages/CV'
import Slideshow from './pages/Slideshow'

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
    title: '� PC Troubleshooting',
    description: 'Diagnose and resolve hardware and software issues',
    items: ['Hardware Repair', 'Software Support', 'System Diagnostics'],
  },
  {
    title: '� Computer Assembly',
    description: 'Build and configure custom computers and systems',
    items: ['PC Assembly', 'Component Installation', 'System Setup'],
  },
  {
    title: '� CCTV Installation',
    description: 'Install and configure surveillance systems',
    items: ['Camera Setup', 'DVR Configuration', 'Cabling'],
  },
  {
    title: '🛒 Technical Sales',
    description: 'Assist customers in selecting the right technology products',
    items: ['Product Consultation', 'Needs Assessment', 'Recommendations'],
  },
  {
    title: '🤝 Customer Service',
    description: 'Provide excellent after-sales technical support',
    items: ['Technical Support', 'Inquiry Handling', 'Follow-up Support'],
  },
  {
    title: '⚙️ System Installation',
    description: 'Install and configure operating systems and software',
    items: ['OS Installation', 'Software Setup', 'System Maintenance'],
  },
]

const skills = [
  { category: 'Technical Sales', items: ['Product Consultation', 'Customer Needs Assessment', 'Product Recommendations'] },
  { category: 'Customer Service', items: ['Relationship Management', 'Inquiry Handling', 'Follow-up Support'] },
  { category: 'Technical Support', items: ['PC Troubleshooting', 'Hardware Repair', 'Software Support'] },
  { category: 'System Administration', items: ['Computer Assembly', 'System Installation', 'CCTV Configuration'] },
]

const sampleProjects = [
  {
    title: 'CCTV Surveillance System Overhaul',
    description: 'Completed 14-day field assignment at Charles Grocery Store in Puerto, Cagayan de Oro City. Successfully troubleshot, repaired, and reconfigured 64 CCTV cameras and DVR systems to ensure reliable surveillance operations and enhanced security coverage.',
    skills: ['CCTV Installation', 'DVR Configuration', 'Troubleshooting', 'System Maintenance'],
  },
  {
    title: 'IT Internship - MAKOTEK Computer Sales',
    description: 'Completed 540-hour internship working in both Technical and Sales Departments. Performed PC troubleshooting, computer assembly, software installation, system maintenance, hardware compatibility assessment, and provided after-sales technical support to customers.',
    skills: ['PC Assembly', 'System Installation', 'Technical Support', 'Hardware Repair'],
  },
  {
    title: 'Technical Sales & Product Consultation',
    description: 'Assisted customers in selecting laptops, desktops, and computer components based on their needs and budget. Conducted hardware compatibility assessments, provided product recommendations, and delivered after-sales support to ensure customer satisfaction.',
    skills: ['Technical Sales', 'Product Consultation', 'Customer Service', 'Hardware Assessment'],
  },
  {
    title: 'Full-Stack Web Development',
    description: 'Built responsive web applications using React.js for frontend and Node.js for backend. Implemented API integration, database connectivity, and modern user interfaces with clean, professional design patterns.',
    skills: ['React.js', 'Node.js', 'API Integration', 'Database Management'],
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
    title: 'On-the-Job Training Completion',
    issuer: 'MAKOTEK Computer Sales Inc. - 540 Hours',
  },
  {
    title: 'Windows Server 2012 Training',
    issuer: 'ltfreetraining - 9 hours 24 minutes',
  },
  {
    title: 'Active Directory Training',
    issuer: 'ltfreetraining - 14 hours 51 minutes',
  },
  {
    title: 'Introduction to the Fundamentals of Databases',
    issuer: 'Certificate of Completion',
  },
  {
    title: 'School Voting Management System',
    issuer: 'Certificate of Recognition - College Students Elections',
  },
]

const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Misamis Oriental Institute of Science and Technology Inc.',
    period: '2025–2026',
  },
  {
    degree: 'Business Administration Management',
    institution: 'Talisayan National Senior High School',
    period: '2021–2022',
  },
  {
    degree: 'Secondary Education',
    institution: "St. Mary's Academy of Carmen",
    period: '2015–2020',
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
  'Technical expertise',
  'Customer service',
  'Problem solving',
  'Team collaboration',
  'Hardware knowledge',
  'Software support',
]

const tools = [
  {
    name: 'Gmail',
    url: 'https://mail.google.com',
    category: 'Communication',
    icon: '📧',
  },
  {
    name: 'Google Meet',
    url: 'https://meet.google.com',
    category: 'Communication',
    icon: '📹',
  },
  {
    name: 'Zoom',
    url: 'https://zoom.us',
    category: 'Communication',
    icon: '🎥',
  },
  {
    name: 'Google Docs',
    url: 'https://docs.google.com',
    category: 'Productivity',
    icon: '📝',
  },
  {
    name: 'Google Sheets',
    url: 'https://sheets.google.com',
    category: 'Productivity',
    icon: '📊',
  },
  {
    name: 'Microsoft Excel',
    url: 'https://www.microsoft.com/en-us/microsoft-365/excel',
    category: 'Productivity',
    icon: '📈',
  },
  {
    name: 'Microsoft Word',
    url: 'https://www.microsoft.com/en-us/microsoft-365/word',
    category: 'Productivity',
    icon: '📄',
  },
  {
    name: 'Microsoft PowerPoint',
    url: 'https://www.microsoft.com/en-us/microsoft-365/powerpoint',
    category: 'Productivity',
    icon: '📽️',
  },
  {
    name: 'Canva',
    url: 'https://www.canva.com',
    category: 'Creative & Research',
    icon: '🎨',
  },
  {
    name: 'React.js',
    url: 'https://react.dev',
    category: 'Tech Support',
    icon: '⚛️',
  },
  {
    name: 'Node.js',
    url: 'https://nodejs.org',
    category: 'Tech Support',
    icon: '🟢',
  },
  {
    name: 'Windows Server',
    url: 'https://www.microsoft.com/en-us/cloud/windows-server',
    category: 'Tech Support',
    icon: '🪟',
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
          <span className="eyebrow">IT Professional</span>
          <h1>Technical Support, Technical Sales & Technology Solutions</h1>
          <p>Information Technology graduate with hands-on experience in technical sales, customer service, hardware and software support, PC assembly, troubleshooting, system installation, and CCTV configuration. Helping businesses with reliable technical solutions.</p>
          <div className="hero-actions">
            <a href="#contact" className="cta-primary">Get Started</a>
            <a href="#services" className="cta-secondary">Services</a>
            <CVButton />
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
                  <h3>Ryan John H. Roferos</h3>
                  <p className="card-subtitle">IT Graduate | Technical Support | Technical Sales</p>
                  <p>Information Technology graduate with hands-on experience in technical sales, customer service, hardware and software support, PC assembly, troubleshooting, and CCTV configuration.</p>
                  <div className="card-stats">
                    <div className="stat">
                      <strong>540 Hours OJT</strong>
                      <span>MAKOTEK Computer Sales</span>
                    </div>
                    <div className="stat">
                      <strong>Location</strong>
                      <span>Carmen, Cagayan de Oro</span>
                    </div>
                    <div className="stat">
                      <strong>Specialization</strong>
                      <span>Tech Support & Sales</span>
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
                    <li><span className="icon">✓</span>Technical Sales</li>
                    <li><span className="icon">✓</span>PC Troubleshooting</li>
                    <li><span className="icon">✓</span>CCTV Installation</li>
                    <li><span className="icon">✓</span>Customer Service</li>
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
                  <h3>Technical Proficiency</h3>
                  <div className="tools-preview">
                    <span className="tool-pill">PC Assembly</span>
                    <span className="tool-pill">System Installation</span>
                    <span className="tool-pill">CCTV Config</span>
                    <span className="tool-pill">Hardware Repair</span>
                    <span className="tool-pill">Software Support</span>
                    <span className="tool-pill">+ More</span>
                  </div>
                  <p className="tools-note">Skilled in hardware compatibility assessment, troubleshooting, and after-sales technical support.</p>
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
                      <strong>OJT Completion</strong>
                      <small>540 Hours - MAKOTEK</small>
                    </div>
                    <div className="cert-item">
                      <strong>Windows Server 2012</strong>
                      <small>9h 24m Training</small>
                    </div>
                    <div className="cert-item">
                      <strong>Active Directory</strong>
                      <small>14h 51m Training</small>
                    </div>
                    <div className="cert-item">
                      <strong>Database Fundamentals</strong>
                      <small>Certificate</small>
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
            Information Technology graduate with hands-on experience in technical sales, customer service, hardware and software support, PC assembly, troubleshooting, system installation, CCTV installation and configuration, hardware compatibility assessment, and after-sales technical support.
          </p>
          <p>
            I completed a 540-hour internship at MAKOTEK Computer Sales Inc., where I worked in both the Technical and Sales Departments. In the Technical Department, I diagnosed and troubleshot PC hardware and software issues, assisted in computer assembly, system installation and maintenance, installed and configured CCTV systems including cameras, DVRs, and cabling, provided technical recommendations regarding hardware compatibility and upgrades, and supported after-sales technical inquiries.
          </p>
          <p>
            In the Sales Department, I assisted customers in selecting laptops, desktops, and computer components, answered product inquiries, explained features based on customer needs, built rapport with walk-in customers, provided follow-up support, and stayed updated on stock availability, specifications, and pricing to make relevant recommendations.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <Slideshow />

      {/* Stats Highlight */}
      <section className="stats-section">
        <article className="stat-card">
          <h3>Technical Expert</h3>
          <p>Skilled in PC troubleshooting, hardware repair, and system installation.</p>
        </article>
        <article className="stat-card">
          <h3>Customer-Focused</h3>
          <p>Experienced in technical sales and after-sales technical support.</p>
        </article>
        <article className="stat-card">
          <h3>CCTV Specialist</h3>
          <p>Proficient in CCTV installation, configuration, and maintenance.</p>
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

      {/* Education */}
      <section className="certifications-section">
        <h2>Education</h2>
        <div className="certifications-grid">
          {education.map((edu) => (
            <article key={edu.degree} className="cert-card card">
              <h3>{edu.degree}</h3>
              <p className="cert-issuer">{edu.institution}</p>
              <p className="cert-skills">{edu.period}</p>
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
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tool-card card"
              aria-label={`Visit ${tool.name} website`}
            >
              <div className="tool-icon">{tool.icon}</div>
              <h3>{tool.name}</h3>
              <p className="tool-category">{tool.category}</p>
            </a>
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
        <p className="contact-intro">Ready to solve your technical support needs? Send me a message.</p>
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
            <a href="tel:+63955105552">+63 955 105 552</a>
          </article>
          <article className="contact-card card">
            <div className="contact-icon-wrapper">
              <FaClock className="contact-icon" />
            </div>
            <strong>Timezone</strong>
            <LiveClock />
            <p style={{ marginTop: '10px', fontSize: '0.9rem', color: 'var(--muted)' }}>Carmen, Cagayan de Oro City, Misamis Oriental</p>
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
            <textarea name="message" placeholder="Your technical support needs..." rows="5" required autoComplete="off" disabled={isSubmitting}></textarea>
            
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
              <h3>Ryan John H. Roferos</h3>
              <p className="footer-copy">Carmen, Cagayan de Oro City, Misamis Oriental</p>
              <p className="footer-copy">© 2026 Ryan John H. Roferos. All rights reserved.</p>
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
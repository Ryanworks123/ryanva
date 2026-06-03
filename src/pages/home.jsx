const services = [
  {
    title: 'Admin Support',
    description: 'Efficient admin systems, calendar management, email workflows, and task tracking.',
    items: ['Calendar & inbox management', 'Project coordination', 'Document prep', 'Task automation'],
  },
  {
    title: 'Social Media',
    description: 'Content planning, posting, analytics tracking, and engagement support.',
    items: ['Post scheduling', 'Caption writing', 'Community replies', 'Performance reports'],
  },
  {
    title: 'Customer Support',
    description: 'Friendly support, order management, and fast response time for service-based brands.',
    items: ['Live chat & email support', 'Ticket triage', 'Order follow-up', 'CRM updates'],
  },
  {
    title: 'Research',
    description: 'Market research, competitor audits, and lead generation for digital businesses.',
    items: ['Product research', 'Lead lists', 'Competitor analysis', 'Client outreach prep'],
  },
]

const tools = [
  'Asana',
  'Trello',
  'Notion',
  'Google Workspace',
  'Slack',
  'Canva',
  'Mailchimp',
  'Shopify',
  'Microsoft 365',
  'Zoom',
  'Calendly',
  'Airtable',
]

const testimonials = [
  {
    quote: 'Ryan quickly took over my admin tasks, freeing up hours each week and keeping my inbox organized.',
    name: 'Alex H.',
    role: 'E-commerce Founder',
  },
  {
    quote: 'Communication was clear, and the social media planning made launch week feel calm and structured.',
    name: 'Mia R.',
    role: 'Online Coach',
  },
]

function Home() {
  return (
    <div className="portfolio">
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Available now · Davao-based VA</span>
          <h1>Hi, I’m Ryan — your dependable virtual assistant for growing teams.</h1>
          <p>
            I help coaches, service providers, and small business owners stay organized, connected,
            and productive with friendly admin, customer support, social media, and research support.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="cta-primary">Book a call</a>
            <a href="#services" className="cta-secondary">See services</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <h2>Fast support for busy founders</h2>
            <p>Reliable communication, organized systems, and the tools your business already uses.</p>
            <ul>
              <li>
                <strong>Timezone</strong>
                Mindanao, Philippines
              </li>
              <li>
                <strong>Response time</strong>
                Within 2 business hours
              </li>
              <li>
                <strong>Clients served</strong>
                Projects across coaching, e-commerce, and real estate
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <article className="stat-card">
          <h3>5+ years</h3>
          <p>Supporting teams with consistent admin and operations help.</p>
        </article>
        <article className="stat-card">
          <h3>120+</h3>
          <p>Tasks completed in email, scheduling, and customer outreach.</p>
        </article>
        <article className="stat-card">
          <h3>99%+</h3>
          <p>Client satisfaction from attentive responses and clear follow-through.</p>
        </article>
      </section>

      <section id="services" className="services-section">
        <h2>Services I offer</h2>
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

      <section className="tools-section">
        <h2>Tools & skills</h2>
        <div className="tools-card tools-grid">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card card">
              <p>“{testimonial.quote}”</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact</h2>
        <div className="contact-grid">
          <article className="contact-card card">
            <strong>Email</strong>
            <a href="mailto:ryan@your-email.com">ryan@your-email.com</a>
          </article>
          <article className="contact-card card">
            <strong>LinkedIn</strong>
            <a href="https://www.linkedin.com/in/ryan-va" target="_blank" rel="noreferrer">
              linkedin.com/in/ryan-va
            </a>
          </article>
          <article className="contact-card card">
            <strong>Timezone</strong>
            Mindanao, Philippines (GMT+8)
          </article>
          <article className="contact-card card">
            <strong>Typical response time</strong>
            Within 2 business hours
          </article>
        </div>
      </section>

      <div className="footer-note">
        Update the email, LinkedIn, experience numbers, and niche details with your real contact info.
      </div>
    </div>
  )
}

export default Home

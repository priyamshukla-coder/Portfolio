
import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight,
  Code2,
  Database,
  Cloud,
  Workflow,
  Terminal,
  Menu,
  X,
  ExternalLink,
  Award,
  Layers,
  GitBranch,
} from "lucide-react";
import "./styles.css";

const skills = [
  {
    title: "Master Data Management",
    icon: Database,
    items: ["Reltio MDM", "Data Modeling", "Match & Merge", "Survivorship", "Data Quality", "Reltio REST APIs"],
  },
  {
    title: "Backend Development",
    icon: Code2,
    items: ["Java", "Spring Boot", "Python", "REST APIs", "SQL", "JSON", "React", "Redux", "Javascript"],
  },
  {
    title: "Frontend Development",
    icon: Code2,
    items: ["React.js", "Redux", "Javascript","HTML", "CSS", "Responsive Web Design", "React Router"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS Lambda", "Amazon S3", "Salesforce CRM", "Omnistudio", "Docker", "Kubernetes", "Jenkins", "CI/CD"],
  },
  // {
  //   title: "Workflow & Integration",
  //   icon: Workflow,
  //   items: ["Reltio LCA", "RIH", "Workflow Automation", "BPMN", "API Integration", "Git"],
  // },
];

const projects = [
  {
    number: "01",
    category: "MASTER DATA MANAGEMENT",
    title: "Enterprise MDM Modernization",
    description:
      "Migrated master data capabilities from EBX to Reltio, including data model transformation, API migration, and workflow reimplementation.",
    tags: ["Reltio MDM", "Data Modeling", "REST APIs"],
  },
  {
    number: "02",
    category: "WORKFLOW AUTOMATION",
    title: "Hierarchy Validation Engine",
    description:
      "Automated hierarchy validation, parent-child relationship checks, and business-rule enforcement to improve master data consistency.",
    tags: ["Java", "Reltio LCA", "Python"],
  },
  {
    number: "03",
    category: "CLOUD ENGINEERING",
    title: "Serverless MDM Integrations",
    description:
      "Developed and optimized Java-based integrations and deployed custom logic using AWS Lambda to support enterprise MDM processes.",
    tags: ["Java", "AWS Lambda", "Reltio APIs"],
  },
];

const experience = [
  "Designed and enhanced Reltio MDM data models, entities, attributes, relationships, and hierarchies.",
  "Implemented match, merge, survivorship, and data-quality rules for reliable master data.",
  "Built custom Reltio LCA logic and automated business workflows using Java.",
  "Developed integrations using Reltio REST APIs and supported Java deployments on AWS Lambda.",
  "Contributed to EBX-to-Reltio migration, data validation, and workflow modernization.",
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-icon">P.</span>
          <span>Technerd<span className="brand-accent"></span></span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {[
            ["About", "#about"],
            ["Expertise", "#expertise"],
            ["Experience", "#experience"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a href={href} key={label} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              SOFTWARE ENGINEER · INDIA
            </div>

            <h1>
              Building reliable
              <br />
              systems for
              <br />
              <span className="gradient-text">complex data.</span>
            </h1>

            <p className="hero-description">
              I'm Priyam Shukla, a Software Engineer specializing in
              <strong> Reltio MDM</strong>, Java backend development, and
              cloud-powered workflow automation.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="button button-secondary" href="#contact">
                <Mail size={17} /> Get in touch
              </a>
            </div>

            <div className="hero-location">
              <MapPin size={15} />
              Gurugram, India
              <span className="location-separator">/</span>
              Java · Reltio · AWS
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-topline">
              <span>CORE_SYSTEMS.EXE</span>
              <span className="live-indicator">● ONLINE</span>
            </div>

            <div className="orbital-scene">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="orbit-center">
                <Database size={38} strokeWidth={1.3} />
                <span>MASTER DATA</span>
              </div>
              <div className="orbit-node node-one"><Code2 /></div>
              <div className="orbit-node node-two"><Cloud /></div>
              <div className="orbit-node node-three"><GitBranch /></div>
              <div className="orbit-node node-four"><Layers /></div>
            </div>

            <div className="code-window">
              <div className="code-window-header">
                <div className="window-dots"><i /><i /><i /></div>
                <span>mdm-engine.java</span>
              </div>
              <pre>
                <span className="code-purple">public class</span>{" "}
                <span className="code-blue">MdmEngine</span>{" {\n"}
                {"  "}<span className="code-purple">public void</span>{" "}
                <span className="code-yellow">process</span>{"() {\n"}
                {"    "}data.<span className="code-blue">validate</span>();
                {"\n"}
                {"    "}data.<span className="code-blue">resolve</span>();
                {"\n"}
                {"    "}data.<span className="code-blue">integrate</span>();
                {"\n"}
                {"  }\n}"}
              </pre>
            </div>

            <div className="visual-footer">
              <span><span className="status-dot" /> SYSTEMS THINKING</span>
              <span>BUILD · AUTOMATE · SCALE</span>
            </div>
          </div>

          <div className="hero-index">01 / ENGINEERING PORTFOLIO</div>
        </section>

        <section className="ticker" aria-label="Technology stack">
          <div className="ticker-track">
            {[1, 2].map((repeat) => (
              <div className="ticker-group" key={repeat}>
                {["RELTIO MDM", "JAVA", "AWS", "DATA MODELING", "REST APIs", "PYTHON", "WORKFLOW AUTOMATION"].map((item) => (
                  <span key={item}><i /> {item}</span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="section container" id="about">
          <SectionHeading eyebrow="01 — ABOUT ME" title="Engineering with purpose." />

          <div className="about-grid">
            <div className="about-main">
              <h3>
                Turning complex data challenges into
                <span className="gradient-text"> scalable solutions.</span>
              </h3>
              <p>
                I work at the intersection of master data management,
                backend engineering, and enterprise integrations. My focus
                is building dependable systems that help organizations
                manage, validate, and connect their critical data.
              </p>
              <p>
                From Reltio data models and custom workflows to Java services
                and AWS-based integrations, I enjoy solving engineering
                problems with clean architecture and practical automation.
              </p>
              <a href="#experience" className="text-link">
                Discover my experience <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="about-facts">
              <div className="fact-card">
                <span className="fact-number">MDM</span>
                <span className="fact-label">Core specialization</span>
                <p>Master data, quality, matching, and hierarchies</p>
              </div>
              <div className="fact-card">
                <span className="fact-number">Java</span>
                <span className="fact-label">Backend engineering</span>
                <p>Services, APIs, custom logic, and integrations</p>
              </div>
              <div className="fact-card">
                <span className="fact-number">AWS</span>
                <span className="fact-label">Cloud technologies</span>
                <p>Serverless deployments and cloud integrations</p>
              </div>
              <div className="fact-card">
                <span className="fact-number">AI +</span>
                <span className="fact-label">Future-focused</span>
                <p>Exploring intelligent data automation</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="expertise">
          <div className="container">
            <SectionHeading
              eyebrow="02 — EXPERTISE"
              title="What I work with."
              description="A practical toolkit for enterprise data platforms and backend systems."
            />

            <div className="skills-grid">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <article className="skill-card" key={skill.title}>
                    <div className="skill-card-top">
                      <span className="skill-icon"><Icon size={23} /></span>
                      <span className="card-index">0{index + 1}</span>
                    </div>
                    <h3>{skill.title}</h3>
                    <div className="skill-tags">
                      {skill.items.map((item) => <span key={item}>{item}</span>)}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section container" id="experience">
          <SectionHeading
            eyebrow="03 — EXPERIENCE"
            title="Where engineering happens."
            description="Building and improving enterprise master data solutions."
          />

          <div className="timeline">
            <div className="timeline-marker"><span /></div>
            <div className="timeline-content">
              <div className="timeline-meta">
                <span className="experience-badge">PROFESSIONAL EXPERIENCE</span>
                <span className="timeline-date">Jan 2022 — Present</span>
              </div>
              <h3>Software Engineer</h3>
              <div className="company-line">
                EPAM Systems <span>·</span> India
              </div>
              <p className="experience-summary">
                Enterprise engineering with a focus on Reltio MDM,
                Java development, data quality, and integration workflows.
              </p>
              <ul className="experience-list">
                {experience.map((item) => (
                  <li key={item}><span>↗</span>{item}</li>
                ))}
              </ul>
              <div className="experience-tech">
                {["Reltio MDM", "Java", "AWS", "REST APIs", "Python"].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="projects">
          <div className="container">
            <SectionHeading
              eyebrow="04 — SELECTED WORK"
              title="Projects & case studies."
              description="Examples of the engineering problems and solutions I focus on."
            />

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-top">
                    <span className="project-number">{project.number}</span>
                    <ArrowUpRight size={20} />
                  </div>
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
            <p className="project-note">
              These are portfolio case-study summaries based on my areas of work.
              Add public repository links or more detailed project information where appropriate.
            </p>
          </div>
        </section>

        <section className="section container" id="achievements">
          <SectionHeading eyebrow="05 — HIGHLIGHTS" title="Beyond the code." />
          <div className="achievement-grid">
            <div className="achievement-card">
              <span className="achievement-icon"><Award /></span>
              <div>
                <h3>EPAM Global Delivery Excellence</h3>
                <p>Recognized for outstanding performance.</p>
              </div>
            </div>
            <div className="achievement-card">
              <span className="achievement-icon"><Terminal /></span>
              <div>
                <h3>Competitive Programming</h3>
                <p>Experience in algorithmic problem-solving and data structures.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" />
          <div className="container contact-content">
            <span className="eyebrow">06 — GET IN TOUCH</span>
            <h2>
              Have a complex problem?
              <br />
              <span className="gradient-text">Let's build a solution.</span>
            </h2>
            <p>
               Great data. Smart engineering. Scalable solutions.
              Got an interesting challenge? Let's talk.
            </p>
            <a className="button button-primary" href="priyamshukla7702@gmail.com">
              <Mail size={17} /> Send me an email <ArrowUpRight size={17} />
            </a>

            <div className="social-links">
              <a href="https://github.com/priyamshukla-coder" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github /> GitHub <ExternalLink size={13} />
              </a>
              <a href="https://www.linkedin.com/in/priyam-shukla-8a7912195/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin /> LinkedIn <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <a href="#home" className="brand">
          <span className="brand-icon">P.</span>
          <span>Technerd<span className="brand-accent"></span></span>
        </a>
        <p>Designed & built with React.</p>
        <a className="back-to-top" href="#home">BACK TO TOP ↑</a>
        <span className="footer-copy">© {new Date().getFullYear()} Priyam Shukla</span>
      </footer>
    </div>
  );
}

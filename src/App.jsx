import './App.css'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const projects = [
  {
    name: 'Auction Web Application',
    points: [
      'Built a full-stack auction platform allowing users to register, list products, and place bids.',
      'Designed and managed Postgres database schemas with Prisma.'
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Prisma', 'PostgreSQL'],
    type: 'Web App',
    status: 'Live',
    github: 'https://github.com/ifelouwa/golden_ball',
    demo: 'https://golden-ball.vercel.app/',
  },
  {
    name: 'Blaqline E-commerce Platform',
    points: [
      'Built responsive user interfaces optimized for desktop and mobile devices.',
      'Improved performance and SEO through Next.js optimization techniques.'
    ],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL'],
    type: 'Product',
    status: 'Completed',
    github: '',
    demo: '',
  },
]

const skills = {
  frontend: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  backend: ['Node.js', 'Express.js', 'REST APIs'],
  databases: ['MongoDB', 'PostgreSQL', 'Prisma'],
  tools: ['Git', 'GitHub', 'Postman', 'Vercel', 'Railway', 'Docker'],
}

function App() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleDownloadCv = () => {
    window.open('/Ifeoluwa_CV.pdf', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="app">
      <NavBar onNavClick={scrollToSection} onContact={() => scrollToSection('contact')} />

      <main className="content">
        <Hero
          onContact={() => scrollToSection('contact')}
          onDownloadCv={handleDownloadCv}
        />
        <About />
        <Experience />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App

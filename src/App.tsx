import { Award, Briefcase, ChevronDown, ChevronUp, Code, Github, Globe, GraduationCap, Languages, Linkedin, MapPin, Phone } from 'lucide-react'
import React, { useState } from 'react'

// --- TYPE DEFINITIONS ---
// Defining types for all our data structures and component props.

interface ContactLink {
  href: string
  text: string
  icon: React.ElementType
  className: string
  shadow: boolean
}

interface Experience {
  title: string
  company: string
  period: string
  color: string
  details: string[]
}

interface Project {
  title: string
  color: string
  description: string
  tech: string[]
}

interface Skill {
  name: string
  color: string
  years: string
}

interface Education {
  school: string
  period: string
  color: string
  details: string[]
}

interface Language {
  language: string
  level: string
  color: string
  details: string[]
}

interface SoftSkill {
  skill: string
  details: string[]
}

interface CollapsibleCardProps {
  headerContent: (isOpen: boolean) => React.ReactNode
  bodyContent: React.ReactNode
  className: string
  headerClassName: string
  bodyClassName: string
}

// --- DATA CONSTANTS ---
// Storing data separately makes the main component cleaner and easier to update.

const contactLinks: ContactLink[] = [
  { href: 'https://github.com', text: 'GitHub', icon: Github, className: 'bg-black text-white hover:bg-white hover:text-black', shadow: false },
  { href: 'https://linkedin.com', text: 'LinkedIn', icon: Linkedin, className: 'bg-blue-500 text-white hover:bg-white hover:text-black', shadow: true },
  { href: '#', text: 'Website', icon: Globe, className: 'bg-green-400 text-black hover:bg-white', shadow: true },
]

const experienceData: Experience[] = [
  { title: 'Senior Software Engineer, Team Lead', company: 'Paradox AI', period: 'Current', color: 'bg-red-400', details: ['Leading development team in building AI-powered recruitment solutions', 'Architecting scalable microservices using modern web technologies', 'Mentoring junior engineers and conducting code reviews', 'Implementing best practices for CI/CD and automated testing'] },
  { title: 'Founder/CEO', company: 'TheCodeOrigin', period: '2020 - Present', color: 'bg-blue-400', details: ['Founded and built a software development agency from ground up', 'Delivered 50+ projects for clients across various industries', 'Built and managed a team of 10+ developers and designers', 'Established company processes, culture, and technical standards'] },
  { title: 'Engineering Manager', company: 'Sanna Tour JSC', period: '2021 - 2023', color: 'bg-green-400', details: ['Managed engineering team for tourism booking platform', 'Implemented agile methodologies and sprint planning', 'Oversaw technical architecture decisions and database design', 'Integrated payment gateways and third-party APIs'] },
  { title: 'Co-Organizer', company: 'GDG Cloud Da Nang', period: '2020 - Present', color: 'bg-yellow-300', details: ['Organizing tech meetups and workshops for 500+ community members', 'Coordinating with Google Developer Experts and speakers', 'Creating content and educational materials for cloud technologies', 'Building partnerships with local tech companies'] },
  { title: 'Product Lead, Community Lead', company: 'Google DSC', period: '2019 - 2021', color: 'bg-purple-400', details: ['Led university developer community of 300+ students', 'Organized hackathons, workshops, and solution challenges', 'Mentored students on software development and career paths', 'Managed product development for community projects'] },
  { title: 'Front-end Lead', company: 'Nestsera Technology', period: '2019 - 2020', color: 'bg-orange-400', details: ['Led front-end development using Vue.js and Nuxt.js', 'Built responsive and accessible web applications', 'Established component library and design system', 'Collaborated with designers and back-end developers'] },
]

const projectData: Project[] = [
  { title: 'n8nhosting.app', color: 'bg-cyan-300', description: 'Managed n8n workflow automation hosting platform', tech: ['Vue.js', 'Docker', 'Node.js'] },
  { title: 'VietScript', color: 'bg-lime-300', description: 'Vietnamese programming language for education', tech: ['Compiler Design', 'TypeScript', 'Parser'] },
  { title: 'TheCodeOrigin', color: 'bg-pink-300', description: 'Software development agency website and portfolio', tech: ['Nuxt.js', 'Tailwind CSS', 'Supabase'] },
  { title: 'Scribe.cheap', color: 'bg-orange-300', description: 'Affordable transcription service platform', tech: ['React', 'AI/ML', 'Stripe'] },
  { title: 'UniGO', color: 'bg-blue-300', description: 'University social network and collaboration tool', tech: ['Vue.js', 'Firebase', 'PWA'] },
  { title: 'BeeBee.travel', color: 'bg-purple-300', description: 'Travel booking and itinerary planning platform', tech: ['Nuxt.js', 'PostgreSQL', 'Maps API'] },
]

const skillData: Skill[] = [
  { name: 'JavaScript/TypeScript', color: 'bg-yellow-300', years: 'Since 2018' },
  { name: 'Vue.js', color: 'bg-green-400', years: 'Since 2019' },
  { name: 'Nuxt.js', color: 'bg-green-300', years: 'Since 2020' },
  { name: 'PHP/Laravel', color: 'bg-purple-400', years: '2017 - 2022' },
  { name: 'WordPress', color: 'bg-blue-400', years: '2017 - 2022' },
  { name: 'Web Development', color: 'bg-red-300', years: 'Since 2017' },
]

const educationData: Education[] = [
  { school: 'University of Science and Technology', period: '2017-2022', color: 'bg-blue-200', details: ['Bachelor\'s Degree in Computer Science', 'Focus on Software Engineering and Web Development', 'Graduated with honors', 'Active member of coding clubs and hackathons'] },
  { school: 'Software Aptech', period: '2017-2018', color: 'bg-green-200', details: ['Professional Software Development Certificate', 'Intensive training in modern web technologies', 'Hands-on projects and industry mentorship', 'Foundation for professional development career'] },
  { school: 'Phan Chau Trinh High School', period: '2014-2017', color: 'bg-yellow-200', details: ['Specialized in Mathematics and Computer Science', 'Top student in programming competitions', 'Early passion for technology and problem-solving', 'Built first websites and applications'] },
]

const languageData: Language[] = [
  { language: 'Vietnamese', level: 'Native', color: 'bg-red-400', details: ['First language and primary communication', 'Fluent in both spoken and written forms', 'Can present technical concepts clearly', 'Created VietScript programming language'] },
  { language: 'English', level: 'Advanced', color: 'bg-blue-400', details: ['Professional working proficiency', 'Comfortable with technical documentation', 'Experience in international team collaboration', 'Regular consumer of English tech content'] },
]

const softSkillData: SoftSkill[] = [
  { skill: 'Community Building', details: ['Built 500+ member tech communities', 'Fostered inclusive and supportive environments', 'Connected developers with opportunities'] },
  { skill: 'Mentoring', details: ['Mentored 100+ junior developers', 'Provided career guidance and technical support', 'Helped students land their first tech jobs'] },
  { skill: 'Event Organization', details: ['Organized 20+ tech meetups and hackathons', 'Managed logistics for 100+ attendee events', 'Coordinated speakers and sponsors'] },
  { skill: 'Design', details: ['Proficient in Figma and Adobe Creative Suite', 'Create wireframes and prototypes', 'Bridge design and development teams'] },
]

// --- REUSABLE COMPONENTS ---

/**
 * A generic collapsible card component that manages its own open/close state.
 * It's used as a base for all other card types (Experience, Project, etc.).
 */
function CollapsibleCard({ headerContent, bodyContent, className, headerClassName, bodyClassName }: CollapsibleCardProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={className}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left transition-colors ${headerClassName}`}
      >
        <div className="flex justify-between items-start gap-4 w-full">
          {headerContent(isOpen)}
        </div>
      </button>
      {isOpen && (
        <div className={bodyClassName}>
          {bodyContent}
        </div>
      )}
    </div>
  )
}

// --- SPECIFIC COMPONENTS ---
// These components now use the generic CollapsibleCard and are much simpler.

function ExperienceCard({ title, company, period, color, details }: Experience): JSX.Element {
  return (
    <CollapsibleCard
      className={`${color} border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
      headerClassName="p-4 hover:bg-black hover:bg-opacity-5"
      bodyClassName="border-t-4 border-black bg-white p-4"
      headerContent={isOpen => (
        <>
          <div className="flex-1">
            <h3 className="font-black text-lg uppercase">{title}</h3>
            <p className="font-bold text-sm mt-1">{company}</p>
            <p className="font-bold text-xs mt-1 opacity-75">{period}</p>
          </div>
          <div className="flex-shrink-0 mt-1">
            {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </div>
        </>
      )}
      bodyContent={(
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex gap-2 text-sm">
              <span className="font-black flex-shrink-0">▸</span>
              <span className="font-bold">{detail}</span>
            </li>
          ))}
        </ul>
      )}
    />
  )
}

function ProjectCard({ title, color, description, tech }: Project): JSX.Element {
  return (
    <CollapsibleCard
      className={`${color} border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
      headerClassName="w-full p-4 hover:bg-black hover:bg-opacity-5"
      bodyClassName="border-t-4 border-black bg-white p-4"
      headerContent={isOpen => (
        <>
          <p className="font-black text-sm uppercase break-words flex-1">{title}</p>
          <div className="flex-shrink-0">
            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </>
      )}
      bodyContent={(
        <>
          <p className="text-xs font-bold mb-3">{description}</p>
          <div className="flex flex-wrap gap-1">
            {tech.map((t, index) => (
              <span key={index} className="bg-black text-white px-2 py-1 text-xs font-bold">{t}</span>
            ))}
          </div>
        </>
      )}
    />
  )
}

function SkillTag({ name, color, years }: Skill): JSX.Element {
  return (
    <div className={`${color} border-2 border-black p-2 font-bold text-sm flex justify-between items-center`}>
      <span>{name}</span>
      <span className="text-xs opacity-75">{years}</span>
    </div>
  )
}

function EducationCard({ school, period, color, details }: Education): JSX.Element {
  return (
    <CollapsibleCard
      className={`${color} border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
      headerClassName="w-full p-3 hover:bg-black hover:bg-opacity-5"
      bodyClassName="border-t-4 border-black bg-white p-3"
      headerContent={isOpen => (
        <>
          <div className="flex-1">
            <p className="font-bold text-sm">{school}</p>
            <p className="text-xs font-bold opacity-75 mt-1">{period}</p>
          </div>
          <div className="flex-shrink-0">
            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </>
      )}
      bodyContent={(
        <ul className="space-y-1">
          {details.map((detail, index) => (
            <li key={index} className="flex gap-2 text-xs">
              <span className="font-black flex-shrink-0">▸</span>
              <span className="font-bold">{detail}</span>
            </li>
          ))}
        </ul>
      )}
    />
  )
}

function LanguageCard({ language, level, color, details }: Language): JSX.Element {
  return (
    <CollapsibleCard
      className={`${color} border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
      headerClassName="w-full p-3 hover:bg-black hover:bg-opacity-5"
      bodyClassName="border-t-4 border-black bg-white p-3"
      headerContent={isOpen => (
        <>
          <p className="font-black text-sm">
            {language}
            {' '}
            -
            {' '}
            {level}
          </p>
          <div className="flex-shrink-0">
            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </>
      )}
      bodyContent={(
        <ul className="space-y-1">
          {details.map((detail, index) => (
            <li key={index} className="flex gap-2 text-xs">
              <span className="font-black flex-shrink-0">▸</span>
              <span className="font-bold">{detail}</span>
            </li>
          ))}
        </ul>
      )}
    />
  )
}

function SoftSkillCard({ skill, details }: SoftSkill): JSX.Element {
  return (
    <CollapsibleCard
      className="bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
      headerClassName="w-full p-2 hover:bg-black hover:bg-opacity-5"
      bodyClassName="border-t-2 border-black bg-white p-2"
      headerContent={isOpen => (
        <>
          <span className="text-xs font-bold">{skill}</span>
          <div className="flex-shrink-0">
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </>
      )}
      bodyContent={(
        <ul className="space-y-1">
          {details.map((detail, index) => (
            <li key={index} className="flex gap-1 text-xs">
              <span className="font-black flex-shrink-0">▸</span>
              <span className="font-bold">{detail}</span>
            </li>
          ))}
        </ul>
      )}
    />
  )
}

// --- MAIN APP COMPONENT ---
// Renders the entire resume page by mapping over the data constants.

function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-yellow-300 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <header className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-5xl md:text-6xl font-black uppercase mb-2">Y Nguyen</h1>
              <p className="text-2xl font-bold">Senior Software Engineer</p>
            </div>
            <div className="space-y-2 text-sm font-bold">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Hai Chau, Danang, Vietnam</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+84 773 288 148</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            {contactLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.text}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 border-4 border-black font-bold uppercase text-sm transition-colors flex items-center gap-2 ${link.className} ${link.shadow ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : ''}`}
                >
                  <Icon className="w-4 h-4" />
                  {' '}
                  {link.text}
                </a>
              )
            })}
          </div>
        </header>

        {/* Mission Statement */}
        <section className="bg-pink-400 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-xl md:text-2xl font-black uppercase text-center">
            "To see my city become a place where every technology dream can come true"
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Experience */}
            <section className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-3 bg-black text-white p-3 -m-6 mb-6">
                <Briefcase className="w-6 h-6" />
                {' '}
                Experience
              </h2>
              <div className="space-y-6">
                {experienceData.map((exp, index) => <ExperienceCard key={index} {...exp} />)}
              </div>
            </section>

            {/* Projects */}
            <section className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-3 bg-black text-white p-3 -m-6 mb-6">
                <Code className="w-6 h-6" />
                {' '}
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectData.map((proj, index) => <ProjectCard key={index} {...proj} />)}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            <section className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" />
                {' '}
                Skills
              </h2>
              <div className="space-y-2">
                {skillData.map((skill, index) => <SkillTag key={index} {...skill} />)}
              </div>
            </section>

            {/* Education */}
            <section className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                {' '}
                Education
              </h2>
              <div className="space-y-3">
                {educationData.map((edu, index) => <EducationCard key={index} {...edu} />)}
              </div>
            </section>

            {/* Languages */}
            <section className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-2">
                <Languages className="w-5 h-5" />
                {' '}
                Languages
              </h2>
              <div className="space-y-2">
                {languageData.map((lang, index) => <LanguageCard key={index} {...lang} />)}
              </div>
            </section>

            {/* Soft Skills */}
            <section className="bg-cyan-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-xl font-black uppercase mb-3">Soft Skills</h2>
              <div className="space-y-2">
                {softSkillData.map((skill, index) => <SoftSkillCard key={index} {...skill} />)}
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black text-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
          <p className="font-black uppercase">© 2024 Y Nguyen - Built with Passion</p>
        </footer>
      </div>
    </div>
  )
}

export default App

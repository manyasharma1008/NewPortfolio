import React from 'react';
import { Github, Linkedin, Mail, Phone, Palette, Code, Rocket, Award, BookOpen, MapPin, ExternalLink, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import myPhoto from './assets/MANYA PHOTO.jpg';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-secondary-900 dark:to-secondary-800">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-lg shadow-lg hover:bg-white/20 transition-colors z-50"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Hero Section with Profile */}
      <header className="relative bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 text-white overflow-hidden dark:from-primary-900 dark:via-primary-800 dark:to-primary-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 to-primary-800/50"></div>
        <div className="container mx-auto px-6 py-32 relative">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
                Manya Sharma
              </h1>
              <p className="text-xl mb-8 text-primary-100">BTech CSE AIML | Web Developer | AI Enthusiast</p>
              <div className="flex justify-center md:justify-start space-x-6">
                <a href="https://github.com" className="transform hover:scale-110 transition-transform duration-200">
                  <Github size={28} className="hover:text-primary-300" />
                </a>
                <a href="https://linkedin.com" className="transform hover:scale-110 transition-transform duration-200">
                  <Linkedin size={28} className="hover:text-primary-300" />
                </a>
                <a href="mailto:manya.s1008@gmail.com" className="transform hover:scale-110 transition-transform duration-200">
                  <Mail size={28} className="hover:text-primary-300" />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src={myPhoto}
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-primary-600 px-6 py-2 rounded-full shadow-lg dark:bg-secondary-800 dark:text-primary-400">
                  <span className="text-sm font-semibold">Available for Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-gray-50 fill-current dark:text-secondary-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 relative dark:bg-secondary-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300">About Me</span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300"></div>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-transform duration-300 dark:bg-secondary-800">
              <p className="text-gray-700 leading-relaxed text-lg dark:text-gray-300">
                I'm an 18-year-old BTech CSE AIML student at SRM University Kattankulathur, passionate about web development and AI. 
                I specialize in frontend development but am open to exploring full-stack technologies.
              </p>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <Stat number="1+" text="Years Coding" />
                <Stat number="5+" text="Projects" />
                <Stat number="3+" text="Hackathons" />
                <Stat number="3+" text="Awards" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-secondary-900 dark:to-secondary-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300">Technical Skills</span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <SkillCard 
              title="Programming Languages" 
              items={["Java (preferred)", "Python", "C++", "JavaScript", "SQL"]}
              icon={<Code className="w-8 h-8" />}
            />
            <SkillCard 
              title="Frontend Development" 
              items={["React.js", "Tailwind CSS", "Bootstrap", "HTML", "CSS"]}
              icon={<Palette className="w-8 h-8" />}
            />
            <SkillCard 
              title="Backend Development" 
              items={["Node.js", "Express.js", "REST APIs"]}
              icon={<Rocket className="w-8 h-8" />}
            />
            <SkillCard 
              title="Databases" 
              items={["MySQL", "PostgreSQL", "MongoDB"]}
              icon={<BookOpen className="w-8 h-8" />}
            />
            <SkillCard 
              title="AI & Machine Learning" 
              items={["TensorFlow", "OpenCV (Basic)", "Scikit-learn (Basic)"]}
              icon={<Award className="w-8 h-8" />}
            />
            <SkillCard 
              title="DevOps & Deployment" 
              items={["Netlify", "Git/GitHub", "Docker (basic)"]}
              icon={<Github className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 dark:bg-secondary-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300">Featured Projects</span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProjectCard 
              title="MediSense"
              description="AI-powered chatbot for medical and wellness guidance. Leverages natural language processing to provide accurate health information."
              tech={["React", "Node.js", "TensorFlow"]}
              image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
              link="https://medi-sense-one.vercel.app/"
            />
            <ProjectCard 
              title="Univoice"
              description="Mentor dashboard with React.js frontend and Node.js backend. Enables seamless communication between mentors and students."
              tech={["React", "Node.js", "Express"]}
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
              link="https://consultunivoice.netlify.app"
            />
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-secondary-800 dark:to-secondary-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300">Hobbies & Interests</span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300"></div>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <InterestCard icon={<Palette />} text="Painting" bgImage="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80" />
            <InterestCard icon={<Code />} text="Coding & Hackathons" bgImage="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80" />
            <InterestCard icon={<Award />} text="Zonal-level Badminton" bgImage="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80" />
            <InterestCard icon={<Rocket />} text="Learning new tech" bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 dark:bg-secondary-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300">Achievements</span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300"></div>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Achievement 
              title="Red Bull Basement Global Finalist"
              description="Fast-tracked to the global event for developing an innovative tech solution"
              icon={<Trophy />}
            />
            <Achievement 
              title="AI-Powered Healthcare Platform"
              description="Developed MediSense, integrating AI-driven solutions using React.js, Node.js, and SQL"
              icon={<Award />}
            />
            <Achievement 
              title="Mentorship Platform Development"
              description="Built Univoice, a full-stack application enabling seamless mentor-student communication"
              icon={<Rocket />}
            />
            <Achievement 
              title="Zonal-Level Badminton Achievement"
              description="Competed at the zonal level, demonstrating leadership and discipline"
              icon={<Award />}
            />
            <Achievement 
              title="Stanford ML Course"
              description="Expanding expertise in AI and machine learning through advanced coursework (Autumn 2018)"
              icon={<GraduationCap />}
            />
            <Achievement 
              title="Full-Stack Development"
              description="Proficient in building and deploying applications, ensuring seamless user experience"
              icon={<Code />}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white relative overflow-hidden dark:from-secondary-900 dark:to-secondary-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <ContactItem 
                  icon={<Mail />} 
                  text="manya.s1008@gmail.com" 
                  link="mailto:manya.s1008@gmail.com"
                />
                <ContactItem 
                  icon={<Phone />} 
                  text="+91 7991443808" 
                  link="tel:+917991443808"
                />
                <ContactItem 
                  icon={<MapPin />} 
                  text="SRM University Kattankulathur" 
                />
              </div>
              <div className="space-y-6">
                <SocialLink 
                  icon={<Github />} 
                  text="GitHub" 
                  link="https://github.com"
                />
                <SocialLink 
                  icon={<Linkedin />} 
                  text="LinkedIn" 
                  link="https://linkedin.com"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ number, text }: { number: string; text: string }) {
  return (
    <div className="text-center p-4 bg-gray-50 rounded-lg dark:bg-secondary-700">
      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{number}</div>
      <div className="text-gray-600 dark:text-gray-400">{text}</div>
    </div>
  );
}

function SkillCard({ title, items, icon }: { title: string; items: string[]; icon: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300 dark:bg-secondary-800">
      <div className="text-primary-600 dark:text-primary-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 dark:text-white">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300 flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, tech, image, link }: { title: string; description: string; tech: string[]; image: string; link: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-all duration-300 dark:bg-secondary-800">
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 dark:text-white">{title}</h3>
          <p className="text-gray-600 mb-4 dark:text-gray-400">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span key={index} className="bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

function InterestCard({ icon, text, bgImage }: { icon: React.ReactNode; text: string; bgImage: string }) {
  return (
    <div className="relative group overflow-hidden rounded-xl aspect-square">
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-primary-900/50 dark:from-secondary-900/90 dark:to-secondary-900/50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <span className="text-center font-medium">{text}</span>
      </div>
    </div>
  );
}

function Achievement({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300 dark:bg-secondary-800">
      <div className="flex items-start space-x-4">
        <div className="text-primary-600 dark:text-primary-400 p-3 bg-primary-100 dark:bg-primary-900/50 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, text, link }: { icon: React.ReactNode; text: string; link?: string }) {
  const content = (
    <div className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors">
      <div className="text-primary-300">{icon}</div>
      <span>{text}</span>
    </div>
  );

  return link ? (
    <a href={link} className="block">{content}</a>
  ) : (
    <div>{content}</div>
  );
}

function SocialLink({ icon, text, link }: { icon: React.ReactNode; text: string; link: string }) {
  return (
    <a href={link} className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors group">
      <div className="text-primary-300 group-hover:scale-110 transition-transform duration-200">{icon}</div>
      <span>{text}</span>
      <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity duration-200" />
    </a>
  );
}

function Trophy() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
      <path d="M4 22h16"></path>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
    </svg>
  );
}

function GraduationCap() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
    </svg>
  );
}

export default App;
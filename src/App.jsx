import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, ArrowUpRight, Download, Cpu, Database, Layout, Terminal, Code2 } from 'lucide-react';
import { 
  SiCplusplus, SiPython, SiJavascript, SiTypescript, SiMysql, 
  SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiFramer,
  SiNodedotjs, SiExpress, SiMongodb, 
  SiGit, SiVercel, SiPostman
} from "react-icons/si";

// --- Custom Icon for LeetCode ---
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.173 5.798a1.375 1.375 0 0 0-.013 1.948l.917.916a1.375 1.375 0 0 0 1.948-.013l4.204-4.204a.687.687 0 0 1 .971.971l-5.35 5.35a.687.687 0 0 0-.013.972l.917.916a1.375 1.375 0 0 0 1.948-.013l5.35-5.35a1.375 1.375 0 0 0 0-1.945l-3.62-3.62A1.378 1.378 0 0 0 13.483 0zm-2.25 5.25a.688.688 0 0 0-.487.201l-5.35 5.35a.688.688 0 0 0-.013.972l.917.916a1.375 1.375 0 0 0 1.948-.013l5.35-5.35a.688.688 0 0 0 0-.972l-.917-.916a.688.688 0 0 0-.448-.188zm-5.95 5.95a1.376 1.376 0 0 0-.961.438L.438 15.522a1.375 1.375 0 0 0-.013 1.948l3.62 3.62a1.375 1.375 0 0 0 1.945 0l3.884-3.884a.687.687 0 0 0 0-.971l-.916-.917a.688.688 0 0 0-.972 0l-2.912 2.912a.688.688 0 0 1-.972-.972l3.884-3.884a.688.688 0 0 0 0-.972l-.916-.917a1.373 1.373 0 0 0-.982-.383z"/>
  </svg>
);

const SocialButton = ({ icon: Icon, label, href, colorClass = "hover:bg-zinc-800" }) => (
  <a 
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`flex items-center gap-3 px-5 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl ${colorClass} transition-all duration-300 group`}
  >
    <div className="text-zinc-400 group-hover:text-white transition-colors">
      <Icon size={20} />
    </div>
    <span className="font-medium text-zinc-400 group-hover:text-white">{label}</span>
  </a>
);

const ProjectCard = ({ title, role, timeline, desc, link, tags, image }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 flex flex-col h-full group"
  >
    <div className="h-48 overflow-hidden border-b border-zinc-800/50 relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
    </div>

    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-500 font-bold mb-1">Role</p>
          <p className="text-zinc-300 font-medium text-sm">{role}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-500 font-bold mb-1">Timeline</p>
          <p className="text-zinc-300 font-medium text-sm">{timeline}</p>
        </div>
      </div>

      <p className="text-zinc-400 leading-relaxed mb-8 text-sm">
        {desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-zinc-800/50 text-zinc-400 text-xs rounded-full border border-zinc-700/50">
            {tag}
          </span>
        ))}
      </div>

      <a 
        href={link} 
        target="_blank"
        rel="noreferrer"
        className="w-full bg-white hover:bg-zinc-200 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        View Project <ArrowUpRight size={18} />
      </a>
    </div>
  </motion.div>
);

const SkillBadge = ({ name, icon: Icon, color }) => (
  <div className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors group">
    <Icon className={`text-lg ${color} group-hover:scale-110 transition-transform`} />
    <span className="text-sm text-zinc-300 group-hover:text-white">{name}</span>
  </div>
);

const SkillColumn = ({ icon: SectionIcon, title, skills }) => (
  <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-colors">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-zinc-800 rounded-lg text-purple-400">
        <SectionIcon size={20} />
      </div>
      <h3 className="font-bold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} />
      ))}
    </div>
  </div>
);

const App = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-zinc-300 font-sans selection:bg-purple-500/30">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white tracking-tight">Hritik<span className="text-purple-500">.</span></h1>
          <a 
            href="mailto:27.hritikchauhan@gmail.com" 
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Get in touch
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24 mb-32">
          <div className="flex-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
                Engineering Scalable Systems and <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  Modern Web Architecture.
                </span>
              </h1>
              <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
                Hi, I'm <span className="text-white font-medium">Hritik Chauhan</span>. 
                A pre-final year Computer Science student at <span className="text-white">ABV-IIITM Gwalior</span>. 
                I specialize in high-performance full-stack development and system logic, focusing on building clean, efficient software. 
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="/resume.pdf" 
                download="Hritik_Chauhan_Resume.pdf"
                className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                <Download size={18} /> Download Resume
              </a>
              <SocialButton href="https://github.com/Hritik728" icon={Github} label="GitHub" />
              <SocialButton href="https://www.linkedin.com/in/hritik-chauhan-867609290/" icon={Linkedin} label="LinkedIn" colorClass="hover:bg-blue-600/10 hover:border-blue-500/50 hover:text-blue-400" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-4 pt-4"
            >
                <SocialButton href="https://leetcode.com/u/hritikchauhan27/" icon={LeetCodeIcon} label="LeetCode" colorClass="hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400" />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0"
          >
            <div className="absolute inset-0 bg-purple-500 rounded-full blur-[100px] opacity-20"></div>
            <img 
              src="/me.jpg" 
              alt="Hritik Chauhan" 
              className="relative w-full h-full object-cover rounded-3xl border-2 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </motion.div>
        </section>

        {/* Selected Works Section */}
        <section id="projects" className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Selected Works</h2>
            <a href="https://github.com/Hritik728" className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1">
              View All <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard 
              title="CampusX Lost & Found"
              role="Full Stack Developer"
              timeline="Mar 2025 - Apr 2025"
              image="/campus-x.jpg"
              desc="Engineered a MERN platform for campus item exchange, implementing JWT-based secure authentication. Developed real-time category-based search and filtering using RESTful APIs."
              tags={['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT']}
              link="https://github.com/Hritik728"
            />
            
            <ProjectCard 
              title="Dynamic To-Do List App"
              role="Fullstack Developer"
              timeline="Feb 2025 - Mar 2025"
              image="/todo-list.jpg"
              desc="Developed a feature-rich task management application with deadline reminders and priority-based sorting. Integrated full CRUD operations with secure, user-specific data modeling."
              tags={['React', 'Node.js', 'Express', 'MongoDB']}
              link="https://github.com/Hritik728"
            />
            
            <ProjectCard 
              title="PixelWarzone: 2D Engine"
              role="Game Developer"
              timeline="Jan 2025 - Feb 2025"
              image="/pixel-warzone.jpg"
              desc="Architected a 2D combat game using OOP principles for modular entity management. Implemented vector-based physics for fluid movement and projectile trajectory calculations."
              tags={['Python', 'Pygame', 'OOP', 'Physics']}
              link="https://github.com/Hritik728"
            />

            <ProjectCard 
              title="Hostel Management System"
              role="C++ Developer"
              timeline="Nov 2024 - Dec 2024"
              image="/hostel-system.jpg"
              desc="Built a robust CLI system to manage room allocations and fee records using inheritance and polymorphism. Implemented file handling for persistent data storage."
              tags={['C++', 'OOP', 'Data Persistence', 'CLI']}
              link="https://github.com/Hritik728"
            />
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 border-t border-zinc-800/50">
          <div className="mb-12">
             <h2 className="text-3xl font-bold text-white mb-4">Technologies</h2>
             <p className="text-zinc-400 max-w-xl">
               A comprehensive stack for building efficient systems and modern user interfaces.
             </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
             <SkillColumn 
               icon={Cpu} 
               title="Languages" 
               skills={[
                 { name: "C/C++", icon: SiCplusplus, color: "text-blue-500" },
                 { name: "Python", icon: SiPython, color: "text-yellow-400" },
                 { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
                 { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
                 { name: "SQL", icon: SiMysql, color: "text-blue-300" }
               ]} 
             />
             <SkillColumn 
               icon={Layout} 
               title="Frontend" 
               skills={[
                 { name: "React", icon: SiReact, color: "text-cyan-400" },
                 { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
                 { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-300" },
                 { name: "Redux", icon: SiRedux, color: "text-purple-500" },
                 { name: "Framer", icon: SiFramer, color: "text-white" }
               ]} 
             />
             <SkillColumn 
               icon={Database} 
               title="Backend" 
               skills={[
                 { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
                 { name: "Express", icon: SiExpress, color: "text-white" },
                 { name: "MongoDB", icon: SiMongodb, color: "text-green-400" }
               ]} 
             />
             <SkillColumn 
               icon={Terminal} 
               title="Tools" 
               skills={[
                 { name: "Git/GitHub", icon: SiGit, color: "text-orange-500" },
                 { name: "Postman", icon: SiPostman, color: "text-orange-400" },
                 { name: "VS Code", icon: Code2, color: "text-blue-500" },
                 { name: "Vercel", icon: SiVercel, color: "text-white" }
               ]} 
             />
          </div>
        </section>

      </main>

      <footer className="border-t border-zinc-800/50 py-10 text-center bg-zinc-900/20">
        <p className="text-zinc-500 text-sm">© 2026 Hritik Chauhan. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default App;
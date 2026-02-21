
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Database, 
  ChevronRight,
  Menu,
  X,
  ArrowUpRight,
  Circle
} from 'lucide-react';
import { SOCIAL_LINKS, PROJECTS, SKILLS, LEADERSHIP } from './constants';

type PageID = 'home' | 'about' | 'skills' | 'projects' | 'contact';

const paperTransition: Variants = {
  initial: { 
    rotateX: 85, 
    rotateY: 5,
    skewY: 5,
    scale: 0.8,
    opacity: 0,
    y: "100%",
    transformOrigin: "top"
  },
  animate: { 
    rotateX: 0, 
    rotateY: 0,
    skewY: 0,
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      opacity: { duration: 0.4 }
    }
  },
  exit: { 
    rotateX: -85, 
    rotateY: -5,
    skewY: -5,
    scale: 0.8,
    opacity: 0,
    y: "-100%",
    transformOrigin: "bottom",
    transition: { 
      duration: 0.8, 
      ease: [0.7, 0, 0.84, 0] as [number, number, number, number]
    }
  }
};

const Navbar = ({ activePage, setPage }: { activePage: PageID, setPage: (p: PageID) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { name: string; id: PageID }[] = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] glass py-4 md:py-6 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-2xl font-heading font-black tracking-tighter cursor-pointer flex items-center gap-2 group"
          onClick={() => setPage('home')}
        >
          <span className="bg-black text-white px-2 py-0.5 group-hover:scale-110 transition-transform">A</span> 
          <span className="group-hover:translate-x-1 transition-transform">SINGH.</span>
        </div>

        <div className="hidden md:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => setPage(link.id)}
              className={`text-xs font-black uppercase tracking-[0.25em] transition-all relative py-2 ${activePage === link.id ? 'text-black' : 'text-zinc-400 hover:text-black hover:tracking-[0.35em]'}`}
            >
              {link.name}
              {activePage === link.id && (
                <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
              )}
            </button>
          ))}
          <button 
            onClick={() => setPage('contact')}
            className="px-8 py-2.5 btn-black text-[10px] font-black uppercase tracking-[0.3em]"
          >
            Hire
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass absolute top-full left-0 right-0 border-t border-black/10 overflow-hidden"
          >
            <div className="px-6 py-12 flex flex-col space-y-10 items-center">
              {navLinks.map((link) => (
                <button 
                  key={link.id} 
                  onClick={() => { setPage(link.id); setIsOpen(false); }}
                  className={`text-4xl font-heading font-black transition-all ${activePage === link.id ? 'text-black scale-110' : 'text-zinc-300'}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HomePage = ({ setPage }: { setPage: (p: PageID) => void }) => (
  <motion.div 
    variants={paperTransition} 
    initial="initial" 
    animate="animate" 
    exit="exit" 
    className="page-container paper-texture min-h-screen flex flex-col justify-center px-6 pt-20"
  >
    <div className="max-w-7xl mx-auto w-full">
      <h1 className="text-[14vw] md:text-[12rem] font-heading font-black leading-[0.85] mb-12 tracking-tighter text-black select-none">
        ATHARVA<br />SINGH
      </h1>
      
      <div className="max-w-3xl mb-20">
        <p className="text-3xl md:text-5xl text-zinc-900 leading-[1.1] font-light font-serif italic">
          Driven to build <span className="font-black not-italic">smart solutions</span> that solve real problems.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-12">
        <button 
          onClick={() => setPage('projects')}
          className="w-full sm:w-auto px-16 py-8 btn-black text-xs font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:gap-8 transition-all"
        >
          See Works
          <ChevronRight size={20} />
        </button>
        
        <div className="flex items-center gap-10">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black transition-all hover:-translate-y-2 hover:scale-125" title={link.name}>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const AboutPage = () => (
  <motion.div variants={paperTransition} initial="initial" animate="animate" exit="exit" className="page-container paper-texture min-h-screen pt-48 pb-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-8 mb-24">
        <h2 className="text-6xl md:text-[10rem] font-heading font-black uppercase tracking-tighter">About.</h2>
        <div className="h-[2px] flex-1 bg-black/10" />
      </div>

      <div className="grid lg:grid-cols-12 gap-20 items-start">
        <div className="lg:col-span-7">
          <div className="parchment p-12 md:p-16 rounded-none mb-16 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-black/5 pointer-events-none" style={{clipPath: 'polygon(100% 0, 0 0, 100% 100%)'}} />
            <div className="flex items-center gap-6 mb-12 text-black">
              <Database size={32} />
              <h3 className="text-4xl font-black font-heading uppercase tracking-tighter">Education</h3>
            </div>
            <div className="mb-16">
              <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-6">
                <h4 className="text-3xl font-black text-black">B.Tech Computer Science</h4>
                <span className="text-zinc-400 font-black text-sm tracking-[0.2em] uppercase">2024 — 2028</span>
              </div>
              <p className="text-zinc-500 font-bold mb-8 text-xl uppercase tracking-wider">KIET Deemed To Be University • Ghaziabad</p>
              <p className="text-zinc-800 text-2xl leading-relaxed font-light font-serif italic">
                Immersed in high-performance software and AI-driven applications. 
                My academic journey focuses on algorithmic efficiency and data-centric problem solving.
              </p>
            </div>
            <div className="pt-12 border-t border-black/10">
              <p className="text-zinc-400 font-black text-xs uppercase tracking-[0.4em] mb-6">Specialization</p>
              <p className="text-black font-black text-6xl md:text-8xl uppercase tracking-tighter">ML and DL</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <h3 className="text-4xl font-black font-heading mb-16 flex items-center gap-6 uppercase tracking-tighter">
            <Circle size={16} className="fill-black" /> Leadership
          </h3>
          <div className="space-y-20">
            {LEADERSHIP.map((item, idx) => (
              <div key={idx} className="relative pl-16">
                <div className="absolute top-0 left-0 w-[2px] h-full bg-black/5" />
                <div className="absolute top-0 left-[-4px] w-3 h-3 bg-black" />
                <h4 className="text-2xl font-black text-black mb-3 uppercase tracking-tight">{item.role}</h4>
                <p className="text-zinc-400 text-xs font-black mb-8 uppercase tracking-[0.3em]">{item.organization}</p>
                <ul className="text-zinc-800 text-lg space-y-6 font-medium">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <ChevronRight size={20} className="mt-1.5 shrink-0 text-black" /> {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const SkillsPage = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));
  return (
    <motion.div variants={paperTransition} initial="initial" animate="animate" exit="exit" className="page-container paper-texture min-h-screen pt-48 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <div>
            <span className="text-zinc-400 font-black tracking-[0.5em] text-xs uppercase mb-8 block">Capabilities</span>
            <h2 className="text-7xl md:text-[10rem] font-heading font-black tracking-tighter uppercase">Toolkit.</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((cat) => (
            <div key={cat} className="parchment p-12 rounded-none group hover:scale-105 transition-all">
              <h3 className="text-black text-xs font-black uppercase tracking-[0.4em] mb-12 border-b-2 border-black pb-2 inline-block">{cat}S</h3>
              <div className="flex flex-wrap gap-4">
                {SKILLS.filter(s => s.category === cat).map((skill) => (
                  <span key={skill.name} className="px-5 py-2.5 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => (
  <motion.div variants={paperTransition} initial="initial" animate="animate" exit="exit" className="page-container paper-texture min-h-screen pt-48 pb-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
        <div>
          <span className="text-zinc-400 font-black tracking-[0.4em] text-xs uppercase mb-8 block">Selection</span>
          <h2 className="text-7xl md:text-[10rem] font-heading font-black tracking-tighter uppercase">Works.</h2>
        </div>
        <p className="text-zinc-500 max-w-sm mt-12 md:mt-0 font-serif italic text-2xl leading-tight">
          A curated selection of experiments and systems.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group flex flex-col border-2 border-black bg-white/40 hover:bg-white transition-all duration-700 overflow-hidden relative">
            <a href={project.github} target="_blank" rel="noreferrer" className="block relative aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 cursor-pointer">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]" />
              <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1 bg-white text-black text-[9px] font-black uppercase border border-black">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
            <div className="p-12 flex flex-col flex-1 relative">
              <div className="flex items-center justify-between mb-8">
                <a href={project.github} target="_blank" rel="noreferrer" className="block">
                  <h3 className="text-4xl font-black font-heading uppercase tracking-tighter hover:underline decoration-4 underline-offset-4">{project.title}</h3>
                </a>
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{project.date}</span>
              </div>
              <p className="text-zinc-600 text-xl leading-relaxed mb-16 font-serif font-light italic">"{project.description}"</p>
              <div className="mt-auto flex items-center justify-between pt-10 border-t-2 border-black/5">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs font-black text-black hover:tracking-widest transition-all uppercase underline underline-offset-8">
                  View Detail <ArrowUpRight size={18} />
                </a>
                <div className="flex gap-8">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black transition-all hover:scale-125"><Github size={24} /></a>
                  {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black transition-all hover:scale-125"><ExternalLink size={24} /></a>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const ContactPage = () => (
  <motion.div variants={paperTransition} initial="initial" animate="animate" exit="exit" className="page-container paper-texture min-h-screen pt-48 pb-24 px-6 flex flex-col justify-center">
    <div className="max-w-6xl mx-auto border-t-[3px] border-b-[3px] border-black py-32 md:py-56 text-center relative overflow-hidden bg-white/20">
      <h2 className="text-7xl md:text-[12rem] font-heading font-black mb-16 tracking-tighter uppercase leading-[0.8]">
        Let's Start <br />Something.
      </h2>
      <p className="text-zinc-700 text-2xl md:text-4xl max-w-3xl mx-auto mb-24 font-serif font-light italic">
        "Great ideas deserve to be realized."
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-16">
        <a href="mailto:atharvasinghh72@gmail.com" className="w-full md:w-auto px-20 py-10 btn-black text-sm font-black uppercase tracking-[0.5em] flex items-center justify-center gap-6 shadow-[15px_15px_0px_#ccc] hover:shadow-none transition-all">
          <Mail size={32} /> Inquire
        </a>
        <div className="flex items-center gap-12">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black transition-all hover:scale-150">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Footer = ({ setPage }: { setPage: (p: PageID) => void }) => (
  <footer className="py-32 px-6 border-t border-black/5">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-16 mb-24">
        <div className="text-5xl font-heading font-black uppercase tracking-tighter">Atharva Singh</div>
        <div className="flex gap-20">
          <button onClick={() => setPage('home')} className="text-zinc-400 hover:text-black text-xs font-black uppercase tracking-[0.3em] transition-all">Home</button>
          <button onClick={() => setPage('about')} className="text-zinc-400 hover:text-black text-xs font-black uppercase tracking-[0.3em] transition-all">About</button>
          <button onClick={() => setPage('projects')} className="text-zinc-400 hover:text-black text-xs font-black uppercase tracking-[0.3em] transition-all">Projects</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-16 border-t border-black/10">
        <div className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.6em]">
          © {new Date().getFullYear()} ATHARVA SINGH • DESIGNED WITH INTENT
        </div>
        <div className="flex items-center gap-4 text-black text-[10px] font-black uppercase tracking-[0.4em]">
          <Circle size={10} className="fill-black" /> Open to Opportunities
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [activePage, setActivePage] = useState<PageID>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="min-h-screen selection:bg-black selection:text-white flex flex-col bg-[#f0f0ee]">
      <Navbar activePage={activePage} setPage={setActivePage} />
      
      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {activePage === 'home' && <HomePage key="home" setPage={setActivePage} />}
          {activePage === 'about' && <AboutPage key="about" />}
          {activePage === 'skills' && <SkillsPage key="skills" />}
          {activePage === 'projects' && <ProjectsPage key="projects" />}
          {activePage === 'contact' && <ContactPage key="contact" />}
        </AnimatePresence>
      </main>

      <Footer setPage={setActivePage} />
    </div>
  );
};

export default App;

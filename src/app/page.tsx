'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Server, Sparkles, Sun, Moon } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from './context/ThemeContext'

const skills = {
  frontend: ['JavaScript', 'React.js', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS'],
  backend: ['Node.js', 'Express.js', 'REST API', 'JWT', 'Authentication'],
  database: ['MongoDB', 'PostgreSQL', 'Mongoose'],
  tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Firebase'],
}

const projects = [
  {
    title: 'SpeedXpress',
    subtitle: 'Logistics Management Platform',
    description: 'Full-featured logistics service with parcel tracking, role-based dashboards for customers, merchants, and delivery personnel. Real-time email notifications and district-based delivery management.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Nodemailer', 'JWT'],
    github: 'https://github.com/anasibnali/speedXpress-client',
    featured: true,
  },
  {
    title: 'Key Smart',
    subtitle: 'E-commerce Marketplace',
    description: 'Keyboard reselling platform with role-based authentication (Buyer/Seller/Admin). Features product advertisement system, inventory management, and secure payment processing.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Tailwind'],
    github: 'https://github.com/anasibnali/smart-key-client',
    featured: true,
  },
  {
    title: 'Swipy',
    subtitle: 'Digital Service Provider',
    description: 'Service marketplace where users can add, review, and manage digital services. Includes CRUD operations for reviews and services with authentication.',
    tech: ['React.js', 'Express.js', 'MongoDB', 'Firebase', 'JWT'],
    github: 'https://github.com/anasibnali/swipy-client',
    featured: true,
  },
  {
    title: 'Selosia Official',
    subtitle: 'Business Website',
    description: 'Professional business website with modern design and responsive layout.',
    tech: ['JavaScript', 'React.js', 'Tailwind CSS'],
    github: 'https://github.com/anasibnali/Selosia-Official-Client',
    featured: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
}

export default function Home() {
  const [activeSkillTab, setActiveSkillTab] = useState<keyof typeof skills>('frontend')
  const { theme, toggleTheme } = useTheme()

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-light/80 dark:bg-dark/80 backdrop-blur-md border-b border-darkGray/10 dark:border-white/10 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-display text-xl font-bold text-gray-900 dark:text-white"
          >
            <span className="text-accent">&lt;</span>
            Anas
            <span className="text-accent">/&gt;</span>
          </motion.div>

          <div className="flex items-center gap-6">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-accent transition-colors hidden sm:block">About</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-accent transition-colors hidden sm:block">Projects</a>
            <a href="#education" className="text-gray-700 dark:text-gray-300 hover:text-accent transition-colors hidden sm:block">Education</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-accent transition-colors hidden sm:block">Contact</a>

            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-lightDark dark:bg-darkLight border border-darkGray/20 dark:border-white/10 hover:border-accent/50 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-accent" />
              ) : (
                <Moon size={20} className="text-accent" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-light dark:bg-dark transition-colors">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-20 right-20 w-32 h-32 border-2 border-accent/20 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 40, 0],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-40 left-20 w-24 h-24 border-2 border-accent/30 rounded-lg rotate-45"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-10 w-16 h-16 bg-accent/10 rounded-full blur-xl"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl text-center relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-mono mb-6">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-6xl md:text-8xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
          >
            Hi, I'm{' '}
            <span className="text-gradient glow-accent">
              Anas Ibne Ali
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-darkGray dark:text-lightGray mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            I build <span className="text-accent font-semibold">scalable</span> and{' '}
            <span className="text-accent font-semibold">reliable</span> web applications
            using the MERN stack. Passionate about creating innovative solutions that make an impact.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-dark rounded-lg font-medium hover:bg-accentLight transition-colors shadow-lg shadow-accent/30"
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-lightDark dark:bg-darkLight text-gray-900 dark:text-white rounded-lg font-medium hover:bg-lightDarker dark:hover:bg-darkLighter transition-colors border border-darkGray/20 dark:border-white/10"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6 mt-12"
          >
            <motion.a
              href="https://github.com/anasibnali"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-darkGray dark:text-lightGray hover:text-accent transition-colors"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/anasibnali"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-darkGray dark:text-lightGray hover:text-accent transition-colors"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href="mailto:anasmahmud523@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-darkGray dark:text-lightGray hover:text-accent transition-colors"
            >
              <Mail size={28} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="py-32 px-6 bg-white dark:bg-darkLight relative transition-colors">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, #06b6d4 0px, #06b6d4 1px, transparent 1px, transparent 20px),
                             repeating-linear-gradient(90deg, #06b6d4 0px, #06b6d4 1px, transparent 1px, transparent 20px)`
          }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-accent mb-8" />
            <p className="text-lg md:text-xl text-darkGray dark:text-lightGray leading-relaxed max-w-3xl">
              I'm a Full Stack Developer from Chittagong, Bangladesh, specializing in building modern web applications
              with the MERN stack. I enjoy solving complex problems, learning new technologies, and collaborating with
              teams to create impactful solutions. Currently pursuing a Diploma in Computer Science & Technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
              Technical <span className="text-accent">Skills</span>
            </h3>

            <div className="bg-lightDark dark:bg-darkLighter rounded-2xl p-8 border border-darkGray/20 dark:border-white/10 shadow-xl transition-colors">
              <div className="flex gap-2 mb-6 flex-wrap">
                {(Object.keys(skills) as Array<keyof typeof skills>).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveSkillTab(category)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      activeSkillTab === category
                        ? 'bg-accent text-dark shadow-lg shadow-accent/30'
                        : 'bg-light dark:bg-dark text-darkGray dark:text-lightGray hover:bg-accent/10 border border-darkGray/20 dark:border-white/10'
                    }`}
                  >
                    {category === 'frontend' && <Code2 className="inline mr-2" size={18} />}
                    {category === 'backend' && <Server className="inline mr-2" size={18} />}
                    {category === 'database' && <Database className="inline mr-2" size={18} />}
                    {category === 'tools' && <Sparkles className="inline mr-2" size={18} />}
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>

              <motion.div
                key={activeSkillTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                {skills[activeSkillTab].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-5 py-3 bg-light dark:bg-dark border-2 border-accent/30 rounded-lg font-mono text-sm hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all cursor-default text-gray-900 dark:text-white"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-light dark:bg-dark transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-accent mb-8" />
            <p className="text-lg md:text-xl text-darkGray dark:text-lightGray max-w-3xl">
              A collection of projects showcasing my expertise in full-stack development,
              from e-commerce platforms to logistics management systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`bg-white dark:bg-darkLight rounded-2xl p-8 border-2 border-darkGray/20 dark:border-white/10 hover:border-accent/50 transition-all shadow-lg hover:shadow-2xl hover:shadow-accent/20 ${
                  project.featured ? 'lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-1 text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-accent font-medium">{project.subtitle}</p>
                  </div>
                  {project.featured && (
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>

                <p className="text-darkGray dark:text-lightGray mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-lightDark dark:bg-darkLighter text-darkGray dark:text-lightGray text-sm rounded-md font-mono border border-darkGray/20 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 text-accent hover:text-accentDark font-medium group"
                >
                  <Github size={20} />
                  View Code
                  <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="https://github.com/anasibnali"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-lightDark dark:bg-darkLighter text-gray-900 dark:text-white rounded-lg font-medium hover:bg-lightDarker dark:hover:bg-darkLighter/80 transition-colors border border-darkGray/20 dark:border-white/10 hover:border-accent/50"
            >
              <Github size={20} />
              View All Projects on GitHub
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Education & Courses Section */}
      <section id="education" className="py-32 px-6 bg-light dark:bg-dark transition-colors">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Education & <span className="text-accent">Courses</span>
            </h2>
            <div className="w-24 h-1 bg-accent mb-8" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
                <span className="text-accent">📚</span> Education
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 8 }}
                  className="p-6 bg-white dark:bg-darkLight rounded-xl border-l-4 border-accent shadow-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                      Diploma in Computer Science & Technology
                    </h4>
                    <span className="text-accent font-mono text-sm whitespace-nowrap ml-4">
                      2025 - Present
                    </span>
                  </div>
                  <p className="text-darkGray dark:text-lightGray">
                    Saic Institute of Management and Technology (SIMT)
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 8 }}
                  className="p-6 bg-white dark:bg-darkLight rounded-xl border-l-4 border-accent/50 shadow-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                      Masters in Islamic Studies
                    </h4>
                    <span className="text-darkGray dark:text-lightGray font-mono text-sm whitespace-nowrap ml-4">
                      2021
                    </span>
                  </div>
                  <p className="text-darkGray dark:text-lightGray">
                    Darul Uloom Moinul Islam - Hathazari
                  </p>
                  <p className="text-sm text-darkGray dark:text-lightGray mt-1">
                    Dawra Hadith
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Courses */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
                <span className="text-accent">🎓</span> Courses
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 8 }}
                  className="p-6 bg-white dark:bg-darkLight rounded-xl border-l-4 border-accent shadow-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                      Reactive Accelerator
                    </h4>
                    <span className="text-accent font-mono text-sm whitespace-nowrap ml-4">
                      2024
                    </span>
                  </div>
                  <p className="text-darkGray dark:text-lightGray mb-2">
                    with Sumit Saha
                  </p>
                  <p className="text-sm text-darkGray dark:text-lightGray">
                    Learn with Sumit • Jan 2024 - Jun 2024
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 8 }}
                  className="p-6 bg-white dark:bg-darkLight rounded-xl border-l-4 border-accent/50 shadow-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                      Complete Web Development
                    </h4>
                    <span className="text-darkGray dark:text-lightGray font-mono text-sm whitespace-nowrap ml-4">
                      2022
                    </span>
                  </div>
                  <p className="text-darkGray dark:text-lightGray mb-2">
                    with Jhankar Mahbub
                  </p>
                  <p className="text-sm text-darkGray dark:text-lightGray">
                    Programming Hero • Jul 2022 - Dec 2022
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-white dark:bg-darkLight relative overflow-hidden transition-colors">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Let's Work <span className="text-accent">Together</span>
          </h2>
          <div className="w-24 h-1 bg-accent mb-8 mx-auto" />
          <p className="text-lg md:text-xl text-darkGray dark:text-lightGray mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a project in mind or just want to connect,
            feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.a
              href="mailto:anasmahmud523@gmail.com"
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 bg-lightDark dark:bg-darkLighter rounded-2xl border-2 border-darkGray/20 dark:border-white/10 hover:border-accent transition-all group"
            >
              <Mail size={32} className="mx-auto mb-4 text-accent" />
              <h3 className="font-display text-xl font-bold mb-2 text-gray-900 dark:text-white">Email</h3>
              <p className="text-darkGray dark:text-lightGray text-sm break-all">anasmahmud523@gmail.com</p>
            </motion.a>

            <motion.a
              href="https://github.com/anasibnali"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 bg-lightDark dark:bg-darkLighter rounded-2xl border-2 border-darkGray/20 dark:border-white/10 hover:border-accent transition-all group"
            >
              <Github size={32} className="mx-auto mb-4 text-accent" />
              <h3 className="font-display text-xl font-bold mb-2 text-gray-900 dark:text-white">GitHub</h3>
              <p className="text-darkGray dark:text-lightGray text-sm">@anasibnali</p>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/anasibnali"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 bg-lightDark dark:bg-darkLighter rounded-2xl border-2 border-darkGray/20 dark:border-white/10 hover:border-accent transition-all group"
            >
              <Linkedin size={32} className="mx-auto mb-4 text-accent" />
              <h3 className="font-display text-xl font-bold mb-2 text-gray-900 dark:text-white">LinkedIn</h3>
              <p className="text-darkGray dark:text-lightGray text-sm">Anas Ibne Ali</p>
            </motion.a>
          </div>

          <motion.a
            href="mailto:anasmahmud523@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-dark rounded-lg font-medium text-lg hover:bg-accentLight transition-colors shadow-xl shadow-accent/30"
          >
            <Mail size={24} />
            Send Me an Email
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-light dark:bg-dark text-gray-900 dark:text-white border-t border-darkGray/20 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-display text-xl font-bold text-gray-900 dark:text-white">
              <span className="text-accent">&lt;</span>
              Anas Ibne Ali
              <span className="text-accent">/&gt;</span>
            </div>

            <div className="flex items-center gap-6 text-gray-700 dark:text-gray-300">
              <a href="https://github.com/anasibnali" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/anasibnali" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:anasmahmud523@gmail.com" className="hover:text-accent transition-colors">
                <Mail size={24} />
              </a>
            </div>

            <p className="text-darkGray dark:text-lightGray text-sm">
              © 2026 Anas Ibne Ali. Built with Next.js & Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

import React, { useState } from 'react';
import { ExternalLink, Github, X, Network, Shield, Globe, Database } from 'lucide-react';
import camera_location from "../public/images/Camera_location.png";
import zenny_watch from "../public/images/zenny_watch.png";
import hoppipola_website from "../public/images/hoppipola_website.png";
import expense_spliter from "../public/images/expense_spliter.png";
import E_library from "../public/images/E_library.png";

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon: React.ElementType;
  color: string;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Sites on the Map',
      category: 'Networking',
      description: 'All Site location on the map with deatils ',
      fullDescription: 'A website there all sites are pinned on the google map,',
      image: camera_location,
      technologies: ['javascript','mapapi','html/css','tailwind'],
      githubUrl: 'https://github.com/manishin2050/Camera_location_at_map.git',
      liveUrl:'https://mehnova-map.netlify.app',
      icon: Network,
      color: 'text-blue-400'
    },

    {
      title: 'Watch Website',
      category: 'Web Development',
      description: 'A watch collection website',
      fullDescription: 'A responsive watch website built with React, featuring smooth animations and optimized performance. ',
      image: zenny_watch,
      technologies: ['React','Typescript', 'Tailwind CSS', 'Swiper.js', 'Framer Motion'],
      githubUrl: 'https://github.com/manishin2050/Zenny_watch_offical.git',
      liveUrl: 'https://zenny-watch-offical.vercel.app/',
      icon: Globe,
      color: 'text-green-400'
    },
    {
      title: 'Hoppipola Restaurant Website',
      category: 'Web Development',
      description: 'A Food collection website',
      fullDescription: 'A responsive watch website built with html css and js, featuring smooth animations and optimized performance. ',
      image: hoppipola_website,
      technologies: ['html','css','javascript'],
      githubUrl: 'https://github.com/manishin2050/Hoppipola-informal-caf-Dar-es-Salaam-Tanzania.git',
      liveUrl: 'https://hoppipola-informal-cafe-dar-es-salaam.netlify.app/',
      icon: Globe,
      color: 'text-green-400'
    },
    {
      title: 'Expense spilter',
      category: 'Full-Stack',
      description: 'Expense divider site with Django Framework',
      fullDescription: 'A full-featured website for add and spilt price between friends with user authentication, view your shopping expense',
      image: expense_spliter,
      technologies: ['Django', 'Tailwind', 'sqlite3'],
      githubUrl: 'https://github.com/manishin2050/Hisaab_Kitaab.git',
      icon: Database,
      color: 'text-purple-400'
    },
    {
      title: 'E-library',
      category: 'Full-Stack',
      description: 'E-library website with Django Framework',
      fullDescription: 'A full-featured website for borrow and return books  with user authentication',
      image: E_library,
      technologies: ['Django','bootstrap' ,'html/css', 'sqlite3'],
      githubUrl: 'https://github.com/manishin2050/E-Library.git',
      icon: Database,
      color: 'text-purple-400'
    },

    {
      title: 'Youtube video Uploader',
      category: 'Scripts',
      description: 'A script to upload video on youtube channel',
      fullDescription: 'A python script to upload video on youtube channel with title, description, tags, thumbnail etc,automate your video uploading process,split video into parts and upload them sequentially',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      technologies: ['python','youtube api','selenium','pytube'],
      icon: Network,
      color: 'text-cyan-400'
    },
   {
      title: 'Telegram Bot',
      category: 'Scripts',
      description: 'Telegram Bot for automate tasks',
      fullDescription: 'A python script to create a telegram bot for automate tasks like sending messages,support 24*7.',
      image: 'https://imgs.search.brave.com/NARjaK8PhyocuWMM7aqIdQhuU7FYThnwB2eKo7i_jpI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/Mi8xNi8wOS8zNS9h/cHBsaWNhdGlvbi03/MDE2NDE5XzY0MC5q/cGc',
      technologies: ['python','youtube api','selenium','pytube'],
      icon: Network,
      color: 'text-cyan-400'
    },
  ];

  const categories = ['All', 'Networking', 'Web Development', 'Full-Stack', 'Scripts'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className={`text-lg mt-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A showcase of my technical projects across networking, security, and development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                  : darkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group cursor-pointer transform transition-all duration-300 hover:scale-105`}
              onClick={() => setSelectedProject(project)}
            >
              <div className={`rounded-2xl overflow-hidden shadow-xl ${
                darkMode ? 'bg-gray-900 border border-cyan-500/20' : 'bg-white border border-purple-200'
              } hover:shadow-2xl transition-shadow duration-300`}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`p-2 rounded-full ${
                      darkMode ? 'bg-gray-800/80' : 'bg-white/80'
                    } backdrop-blur-sm`}>
                      <project.icon className={project.color} size={20} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      darkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-purple-100 text-purple-600'
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  } group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300`}>
                    {project.title}
                  </h3>

                  <p className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`text-xs px-2 py-1 rounded-full ${
                          darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'
                      }`}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    {project.githubUrl && (
                      <div className={`p-2 rounded-full ${
                        darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                      } transition-colors duration-200`}>
                        <Github size={16} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                      </div>
                    )}
                    {project.liveUrl && (
                      <div className={`p-2 rounded-full ${
                        darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                      } transition-colors duration-200`}>
                        <ExternalLink size={16} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
              darkMode ? 'bg-gray-900 border border-cyan-500/20' : 'bg-white border border-purple-200'
            } shadow-2xl`}>
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center mb-4">
                  <selectedProject.icon className={`${selectedProject.color} mr-3`} size={28} />
                  <h3 className={`text-2xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {selectedProject.title}
                  </h3>
                </div>

                <p className={`text-lg mb-6 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {selectedProject.fullDescription}
                </p>

                <div className="mb-6">
                  <h4 className={`text-lg font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-purple-100 text-purple-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
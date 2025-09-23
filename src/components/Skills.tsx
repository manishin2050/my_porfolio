import React from 'react';
import { Network, Shield, Code, Server, Database, PenTool as Tools } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Networking',
      icon: Network,
      color: 'text-blue-400',
      bgColor: darkMode ? 'bg-blue-400/20' : 'bg-blue-100',
      skills: [
        { name: 'Cisco Technologies', level: 90 },
        { name: 'Routing & Switching', level: 85 },
        // { name: 'Firewalls & VPNs', level: 80 },
        { name: 'Network Troubleshooting', level: 95 },
      ]
    },
    // {
    //   title: 'Cybersecurity',
    //   icon: Shield,
    //   color: 'text-red-400',
    //   bgColor: darkMode ? 'bg-red-400/20' : 'bg-red-100',
    //   skills: [
    //     { name: 'Linux Security', level: 75 },
    //     { name: 'Wireshark Analysis', level: 70 },
    //     { name: 'Burp Suite', level: 65 },
    //     { name: 'Ethical Hacking', level: 60 },
    //   ]
    // },
    {
      title: 'Web Development',
      icon: Code,
      color: 'text-green-400',
      bgColor: darkMode ? 'bg-green-400/20' : 'bg-green-100',
      skills: [
        { name: 'React & TypeScript', level: 85 },
        { name: 'Python & Django', level: 80 },
        { name: 'HTML/CSS/JavaScript', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
      ]
    },
    {
      title: 'Backend & Database',
      icon: Database,
      color: 'text-purple-400',
      bgColor: darkMode ? 'bg-purple-400/20' : 'bg-purple-100',
      skills: [
        { name: 'Node.js & APIs', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'MongoDB', level: 65 },
        // { name: 'Docker', level: 60 },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Server,
      color: 'text-cyan-400',
      bgColor: darkMode ? 'bg-cyan-400/20' : 'bg-cyan-100',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Linux Administration', level: 85 },
        { name: 'Automation Scripts', level: 80 },
        { name: 'Cloud Basics (AWS)', level: 65 },
      ]
    },
    {
      title: 'Soft Skills',
      icon: Tools,
      color: 'text-yellow-400',
      bgColor: darkMode ? 'bg-yellow-400/20' : 'bg-yellow-100',
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Project Management', level: 75 },
        { name: 'Technical Writing', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-cyan-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className={`text-lg mt-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A comprehensive view of my technical capabilities across different domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`p-6 rounded-2xl ${
                darkMode ? 'bg-gray-800 border border-cyan-500/20' : 'bg-white border border-purple-200'
              } shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full ${category.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`${category.color}`} size={24} />
                </div>
                <h3 className={`text-xl font-semibold ml-4 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`text-xs ${category.color}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Confidence Overview */}
        <div className="mt-16 text-center">
          <div className={`inline-flex items-center md:space-x-8 p-8 space-x-2 rounded-2xl ${
            darkMode ? 'bg-gray-800 border border-cyan-500/20' : 'bg-white border border-purple-200'
          } shadow-xl`}>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                85%
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Average Skill Level
              </p>
            </div>
            
            <div className={`w-px h-12 ${
              darkMode ? 'bg-cyan-500/30' : 'bg-purple-300'
            }`}></div>
            
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                1+
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Years Experience
              </p>
            </div>
            
            <div className={`w-px h-12 ${
              darkMode ? 'bg-cyan-500/30' : 'bg-purple-300'
            }`}></div>
            
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                5
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Core Domains
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
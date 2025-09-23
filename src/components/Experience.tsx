import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      type: 'work',
      title: 'Network Engineer',
      company: 'Current Company',
      period: '2024 - Present',
      description: 'Managing enterprise network infrastructure, implementing security protocols, and optimizing network performance. Responsible for troubleshooting complex network issues and maintaining 99.9% uptime.',
      achievements: [
        'Reduced network downtime by 40% through proactive monitoring',
        'Implemented automated backup solutions for 200+ network devices',
        'Led migration to SD-WAN architecture across 15 branch offices'
      ],
      icon: Briefcase,
      color: 'text-blue-400'
    },
    {
      type: 'education',
      title: 'Python For Web Development',
      company: 'IBM',
      period: ' JAN 2024',
      description: 'python for web development, learned front-end and back-end technologies to build dynamic web applications.',
      achievements: [
        'learned fundamentals of web development',
        
      ],
      icon: Briefcase,
      color: 'text-green-400'
    },
    {
      type: 'education',
      title: 'Cybersecurity Certification',
      company: 'Self-Learning & Online Courses',
      period: 'DEC 2023 - Feb 2024',
      description: 'Intensive study of cybersecurity fundamentals, ethical hacking, and security assessment tools. Focus on practical skills and real-world application.',
      achievements: [
        'Completed ethical hacking certification',
        'Active participant in cybersecurity communities'
      ],
      icon: GraduationCap,
      color: 'text-red-400'
    },

{
      type: 'education',
      title: 'Master in Full-Stack Web Development',
      company: 'Personal Projects',
      period: 'AUG 2023 - FEB 2024',
      description: 'Developing web applications using modern frameworks and technologies. Creating responsive, user-friendly interfaces and robust backend systems.',
      achievements: [
        'Built 10+ responsive web applications',
        'Python, React, Flask, Django, and databases ',
        'Deployed applications on cloud platforms'
      ],
      icon: Briefcase,
      color: 'text-green-400'
    },
    {
      type: 'achievement',
      title: 'RS-IT',
      company: 'Professional Achievement',
      period: '2016',
      description: 'basic computer hardware and networking course',
      achievements: [
        'learned fundamentals of computer hardware and networking',
        'gained practical skills in assembling and troubleshooting PCs',
        'understood networking concepts and protocols'
      ],
      icon: Award,
      color: 'text-yellow-400'
    }
  ];

  return (
    <section id="experience" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-cyan-50'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Experience & Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className={`text-lg mt-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            My professional journey across networking, cybersecurity, and web development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
            darkMode ? 'bg-cyan-500/30' : 'bg-purple-300'
          } hidden lg:block`}></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="lg:flex lg:items-center lg:space-x-8">
                  {/* Timeline Icon */}
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg z-10 relative">
                    <exp.icon className="text-white" size={24} />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 p-6 rounded-2xl shadow-xl ${
                    darkMode ? 'bg-gray-800 border border-cyan-500/20' : 'bg-white border border-purple-200'
                  } hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center mb-2 lg:hidden">
                          <exp.icon className={`${exp.color} mr-2`} size={20} />
                          <span className={`text-xs font-semibold px-2 py-1 rounded ${
                            darkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-purple-100 text-purple-600'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                        
                        <h3 className={`text-xl font-bold ${
                          darkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                          {exp.title}
                        </h3>
                        
                        <p className={`text-lg ${exp.color} font-semibold`}>
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={16} />
                        <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} font-medium`}>
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className={`text-base mb-6 leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {exp.description}
                    </p>

                    <div>
                      <h4 className={`text-sm font-semibold mb-3 ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      } uppercase tracking-wide`}>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className={`flex items-start space-x-2 ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            <div className={`w-2 h-2 rounded-full ${
                              darkMode ? 'bg-cyan-400' : 'bg-purple-500'
                            } mt-2 flex-shrink-0`}></div>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years of Experience', value: '1+', icon: Briefcase },
              { label: 'Projects Completed', value: '15+', icon: Award },
              { label: 'Skills Mastered', value: '4+', icon: GraduationCap },
              { label: 'Certifications', value: '8+', icon: Award }
            ].map((stat, index) => (
              <div key={index} className={`text-center p-6 rounded-xl ${
                darkMode ? 'bg-gray-800 border border-cyan-500/20' : 'bg-white border border-purple-200'
              } shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <stat.icon className={`mx-auto mb-3 ${
                  darkMode ? 'text-cyan-400' : 'text-purple-500'
                }`} size={32} />
                <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
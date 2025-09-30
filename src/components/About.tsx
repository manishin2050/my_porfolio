import React from 'react';
import { User, Calendar, MapPin, Briefcase } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const timeline = [
    { year: '2024', title: 'NOC Engineer', description: 'Started career in networking and infrastructure' },
    { year: '2024', title: 'Web Development', description: 'certificate in python full-stack development' },
    // { year: '2025', title: 'Programming/coding', description: 'Transitioning into IT field' },
  ];

  return (
    <section id="about" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className={`p-8 rounded-2xl ${
              darkMode ? 'bg-gray-900 border border-cyan-500/20' : 'bg-gradient-to-br from-purple-50 to-cyan-50 border border-purple-200'
            } shadow-xl`}>
              <div className="flex items-center mb-6">
                <User className="text-cyan-400 mr-3" size={28} />
                <h3 className={`text-2xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  Professional Journey
                </h3>
              </div>
              
              <p className={`text-lg leading-relaxed mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I balance life as a NOC Engineer while diving deep into Cybersecurity and Web Development. 
                My passion lies in automation, building secure systems, and exploring creative code solutions 
                that bridge the gap between security and user experience.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } border ${
                  darkMode ? 'border-cyan-500/30' : 'border-purple-200'
                }`}>
                  <MapPin className="text-purple-500 mb-2" size={20} />
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Location</p>
                  <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>India</p>
                </div>
                
                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } border ${
                  darkMode ? 'border-cyan-500/30' : 'border-purple-200'
                }`}>
                  <Briefcase className="text-cyan-500 mb-2" size={20} />
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Focus</p>
                  <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Full-Stack Security</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className={`text-2xl font-semibold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Career Timeline
            </h3>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      darkMode ? 'bg-cyan-500/20 border-2 border-cyan-400' : 'bg-purple-100 border-2 border-purple-400'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <Calendar className={`${
                        darkMode ? 'text-cyan-400' : 'text-purple-600'
                      }`} size={20} />
                    </div>
                    {index < timeline.length - 1 && (
                      <div className={`w-0.5 h-16 mt-2 ${
                        darkMode ? 'bg-cyan-500/30' : 'bg-purple-300'
                      }`}></div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className={`p-4 rounded-lg ${
                      darkMode ? 'bg-gray-900 border border-cyan-500/20' : 'bg-white border border-purple-200'
                    } shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                      <div className="flex items-center mb-2">
                        <span className={`text-sm font-semibold px-2 py-1 rounded ${
                          darkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-purple-100 text-purple-600'
                        }`}>
                          {item.year}
                        </span>
                        <h4 className={`text-lg font-semibold ml-3 ${
                          darkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                          {item.title}
                        </h4>
                      </div>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
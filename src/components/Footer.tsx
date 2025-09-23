import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t ${
      darkMode 
        ? 'bg-gray-900 border-cyan-500/20' 
        : 'bg-gradient-to-br from-purple-50 to-cyan-50 border-purple-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className={`text-center md:text-left mb-6 md:mb-0 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <span>Made with</span>
              <Heart className="text-red-500 animate-pulse" size={16} />
              <span>by Manish Kumar</span>
            </p>
            <p className="text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              Network Engineer • Cybersecurity Learner • Web Developer
            </p>
            
            <button
              onClick={scrollToTop}
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode 
                  ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700'
                  : 'bg-white text-purple-600 hover:bg-gray-50 shadow-lg'
              } border ${
                darkMode ? 'border-cyan-500/20' : 'border-purple-200'
              }`}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200/20 text-center">
          <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Built with React, TypeScript, and Tailwind CSS • Hosted with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
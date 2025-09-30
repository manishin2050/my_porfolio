import React, { useState, useEffect } from 'react';
import { ChevronDown, Terminal, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Move roles outside component to prevent recreation on every render
  const roles = ['NOC Engineer',  'Full-Stack Developer'];

  // Scroll animation hook
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = roles[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, roles]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      ref={elementRef}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-cyan-50'
      }`}
      initial={{ opacity: 0, y: 60 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Matrix Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="matrix-bg opacity-10">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className={`absolute text-xs font-mono ${
                darkMode ? 'text-cyan-400' : 'text-purple-500'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `matrix-fall ${3 + Math.random() * 4}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {Math.random().toString(36).substring(7)}
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="text-center z-10 max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Manish Kumar
          </motion.h1>

          <motion.div
            className="h-16 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-2 text-xl md:text-2xl">
              <Terminal className="text-cyan-400" size={24} />
              <span className={`font-mono ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {currentText}
                <span className="animate-pulse text-cyan-400">|</span>
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center md:space-x-8 space-x-1 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
        >
          <motion.div
            className={`flex items-center space-x-2 p-3 rounded-full ${
              darkMode ? 'bg-gray-800/50' : 'bg-white/50'
            } backdrop-blur-sm border ${
              darkMode ? 'border-cyan-500/30' : 'border-purple-300/50'
            }`}
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Terminal className="text-blue-500" size={20} />
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              NOC Engineer
            </span>
          </motion.div>

{/* 
          <motion.div
            className={`flex items-center space-x-2 p-3 rounded-full ${
              darkMode ? 'bg-gray-800/50' : 'bg-white/50'
            } backdrop-blur-sm border ${
              darkMode ? 'border-cyan-500/30' : 'border-purple-300/50'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Shield className="text-red-500" size={20} />
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Cybersecurity
            </span>
          </motion.div> */}

          <motion.div
            className={`flex items-center space-x-2 p-3 rounded-full ${
              darkMode ? 'bg-gray-800/50' : 'bg-white/50'
            } backdrop-blur-sm border ${
              darkMode ? 'border-cyan-500/30' : 'border-purple-300/50'
            }`}
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Globe className="text-green-500" size={20} />
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Full-Stack
            </span>
          </motion.div>
        </motion.div>

        <motion.p
          className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
        >
          Building secure networks by day, exploring cybersecurity by night, and crafting beautiful web experiences in between.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 1.7, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>

          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-8 py-3 border-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              darkMode
                ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                : 'border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white'
            }`}
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 1.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 2.0, ease: "easeOut" }}
          whileHover={{ scale: 1.1, y: -2 }}
        >
          <ChevronDown className="text-cyan-400" size={32} />
        </motion.button>
      </motion.div>

      {/* Matrix animation styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes matrix-fall {
            0% { transform: translateY(-100vh); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
        `
      }} />
    </motion.section>
  );
};

export default Hero;

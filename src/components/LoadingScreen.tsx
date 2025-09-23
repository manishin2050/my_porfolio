import React, { useEffect, useState } from 'react';
import { Terminal, Shield, Globe, Network } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  const loadingTexts = [
    'Initializing Network Protocols...',
    'Loading Security Modules...',
    'Compiling Web Components...',
    'Establishing Secure Connection...',
    'Portfolio Ready!'
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      if (textIndex < loadingTexts.length - 1) {
        setTextIndex(prev => prev + 1);
      }
    }, 1000);

    return () => clearInterval(textInterval);
  }, [textIndex, loadingTexts.length]);

  useEffect(() => {
    const text = loadingTexts[textIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= text.length) {
        setCurrentText(text.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [textIndex, loadingTexts]);

  const icons = [Terminal, Shield, Globe, Network];

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center">
      {/* Matrix Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={i}
            className="absolute text-xs font-mono text-cyan-400"
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

      <div className="text-center z-10">
        {/* Animated Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="relative"
              style={{
                animation: `pulse 2s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                <Icon className="text-white" size={24} />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 animate-ping opacity-20"></div>
            </div>
          ))}
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Manish Kumar
          </h1>
          <div className="h-8 flex items-center justify-center">
            <span className="text-gray-300 font-mono text-lg">
              {currentText}
              <span className="animate-pulse text-cyan-400">|</span>
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Loading...</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="h-full bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scanning Effect */}
        <div className="mt-8 text-xs text-gray-500 font-mono">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>System Status: Online</span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes matrix-fall {
            0% { transform: translateY(-100vh); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
        `
      }} />
    </div>
  );
};

export default LoadingScreen;

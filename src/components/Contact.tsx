import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Instagram, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello, I am ${formData.name}.
Email: ${formData.email}
Subject: *${formData.subject}*
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const phone = "917665035700";

    // Device detection
    const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

    let whatsappUrl = "";
    if (isMobile) {
      // Mobile app
      whatsappUrl = `whatsapp://send?phone=${phone}&text=${encodedMessage}`;
    } else {
      // Always open WhatsApp Web on desktop (Linux, Windows, Mac)
      whatsappUrl = `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
    }

    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mansihkumarmehta606@gmail.com',
      href: 'mailto:mansihkumarmehta606@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 76650 35700',
      href: 'tel:+917665035700',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: 'https://maps.app.goo.gl/ZG7WSb4bBE47gVvM9',
      color: 'text-red-400'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/manishin2050/',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ydv-manish-kumar-m-766230294/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/mr_mehnova/',
      color: 'hover:text-cyan-400'
    }
  ];

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className={`text-lg mt-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Ready to collaborate? Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Let's Connect
            </h3>

            <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Whether you're looking for a network engineer, cybersecurity specialist, or web developer, 
              I'm always interested in discussing new opportunities and exciting projects.
            </p>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className={`p-3 rounded-full ${
                    darkMode ? 'bg-gray-900 border border-cyan-500/20' : 'bg-gray-100 border border-purple-200'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className={info.color} size={20} />
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {info.label}
                    </p>
                    <a 
                      href={info.href}
                      className={`font-semibold transition-colors duration-200 ${
                        darkMode ? 'text-white hover:text-cyan-400' : 'text-gray-800 hover:text-purple-600'
                      }`}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full ${
                      darkMode ? 'bg-gray-900 border border-cyan-500/20 text-gray-400' : 'bg-gray-100 border border-purple-200 text-gray-600'
                    } hover:scale-110 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-2xl shadow-xl ${
            darkMode ? 'bg-gray-900 border border-cyan-500/20' : 'bg-gradient-to-br from-purple-50 to-cyan-50 border border-purple-200'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Send Message
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 rounded-lg bg-green-100 border border-green-300 flex items-center space-x-2">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-green-800 font-medium">
                  Message sent successfully! I'll get back to you soon.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      darkMode 
                        ? 'bg-gray-800 border-cyan-500/30 text-white focus:border-cyan-400'
                        : 'bg-white border-purple-200 text-gray-800 focus:border-purple-400'
                    } focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      darkMode 
                        ? 'bg-gray-800 border-cyan-500/30 text-white focus:border-cyan-400'
                        : 'bg-white border-purple-200 text-gray-800 focus:border-purple-400'
                    } focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-800 border-cyan-500/30 text-white focus:border-cyan-400'
                      : 'bg-white border-purple-200 text-gray-800 focus:border-purple-400'
                  } focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none ${
                    darkMode 
                      ? 'bg-gray-800 border-cyan-500/30 text-white focus:border-cyan-400'
                      : 'bg-white border-purple-200 text-gray-800 focus:border-purple-400'
                  } focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

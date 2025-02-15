"use client"

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, FormEvent, ChangeEvent } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AnimatedBackground from '@/components/AnimatedBackground'
import { TypeAnimation } from 'react-type-animation'
import LoadingScreen from '@/components/LoadingScreen'
import ChatButton from '@/components/ChatButton'
import ScrollProgress from '@/components/ScrollProgress'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6'
import TechnologyPage from './technology/page'
import AgentsPage from './agents/page'
import PricingPage from './pricing/page'
import ContactPage from './contact/page'

const features = [
  {
    title: "Intelligent Automation",
    description: "Automate complex tasks with AI-powered agents",
    icon: "🤖"
  },
  {
    title: "Natural Conversations",
    description: "Human-like interactions with advanced NLP",
    icon: "💬"
  },
  {
    title: "24/7 Availability",
    description: "Round-the-clock service without interruption",
    icon: "⏰"
  }
]

const stats = [
  { number: "99%", label: "Accuracy Rate" },
  { number: "24/7", label: "Availability" },
  { number: "50+", label: "AI Models" },
  { number: "10k+", label: "Happy Users" }
]

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'Features', section: 'features' },
    { name: 'Technology', section: 'technology' },
    { name: 'Agents', section: 'agents' },
    { name: 'Pricing', section: 'pricing' },
    { name: 'Contact', section: 'contact' }
  ]

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)
      setIsMobileMenuOpen(false)
    }
  }

  const handleActionButton = () => {
    console.log('Button clicked')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <LoadingScreen />
      <ChatButton />
      <ScrollProgress />

      {/* Navbar */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled ? 'glass shadow-lg backdrop-blur-lg' : 'bg-transparent'
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-20">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick('home')}
                  className={`text-2xl font-bold ${
                    activeSection === 'home' ? 'text-blue-400' : 'text-white'
                  }`}
                >
                  Agentia
                </motion.button>

                <div className="hidden md:flex items-center space-x-8">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleNavClick(item.section)}
                      className={`text-lg font-medium transition-colors duration-300 relative group ${
                        activeSection === item.section ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
                      }`}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </motion.button>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleActionButton}
                  className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden text-white p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                  </svg>
                </motion.button>
              </div>

              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-[#0A0F2C] py-4"
                  >
                    <div className="flex flex-col space-y-4">
                      {navItems.map((item) => (
                        <motion.button
                          key={item.name}
                          whileHover={{ x: 10 }}
                          onClick={() => handleNavClick(item.section)}
                          className="text-left text-lg font-medium text-gray-300 hover:text-blue-400 py-2 px-4"
                        >
                          {item.name}
                        </motion.button>
                      ))}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleActionButton}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 mx-4 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                      >
                        Get Started
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <div className="relative min-h-screen">
        <AnimatedBackground />
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0A0F2C]/50 to-[#0A0F2C] animate-pulse" />

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center relative z-10"
            >
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px] animate-pulse" />
              <h1 className="text-7xl md:text-9xl font-bold mb-6 relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] via-[#8B5CF6] to-[#4A90E2] animate-gradient-x">
                  Next-Gen
                </span>
                <br />
                <span className="text-white relative">
                  AI Agents
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-30 animate-pulse" />
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-blue-200 mb-6 max-w-3xl mx-auto">
                Empower your business with intelligent AI agents powered by cutting-edge neural networks
              </p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto mb-16"
              >
                <div className="glass p-6 rounded-2xl relative overflow-hidden group">
                  {/* Animated gradient border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-75 transition-all duration-500" />
                  
                  {/* Content container */}
                  <div className="relative flex items-center gap-4 bg-white/5 rounded-xl p-6">
                    {/* Robot Icon with animation */}
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-4xl bg-gradient-to-r from-blue-400 to-purple-400 rounded-full p-3 shadow-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 text-white"
                      >
                        <path d="M12 2a2 2 0 012 2c0 .74-.4 1.38-1 1.72v1.28a3 3 0 013 3v2h1a2 2 0 012 2v3a2 2 0 01-2 2h-1v1a3 3 0 01-3 3H9a3 3 0 01-3-3v-1H5a2 2 0 01-2-2v-3a2 2 0 012-2h1v-2a3 3 0 013-3V5.72c-.6-.34-1-.98-1-1.72a2 2 0 012-2zm0 13a1 1 0 100 2 1 1 0 000-2z"/>
                      </svg>
                    </motion.div>

                    {/* Typing animation with enhanced styling */}
                    <div className="flex-1">
                      <TypeAnimation
                        sequence={[
                          `Hello! I'm your AI assistant.`,
                          1000,
                          `I can help with customer support 24/7...`,
                          1000,
                          `Process and analyze complex data...`,
                          1000,
                          `Automate your business workflows...`,
                          1000,
                          `Generate insights from your data...`,
                          1000,
                          `Enhance customer experience...`,
                          1000,
                          `Optimize business operations...`,
                          1000,
                          `Secure your systems 24/7...`,
                          1000,
                          `Translate in 95+ languages...`,
                          1000,
                          `Make data-driven decisions...`,
                          1000,
                          `Scale your business globally...`,
                          1000,
                          `And much more!`,
                          1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        className="text-xl md:text-2xl font-medium text-blue-200"
                        repeat={Infinity}
                        cursor={true}
                        style={{ display: 'inline-block' }}
                      />
                      {/* Animated dots */}
                      <div className="flex gap-1 mt-2">
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-blue-400 rounded-full"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Status indicator */}
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="w-3 h-3 bg-green-400 rounded-full"
                      />
                      <span className="text-sm text-gray-400">Online</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="flex gap-8 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleActionButton}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-bold text-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 transition-transform duration-300 group-hover:translate-y-full" />
                  <span className="relative">Deploy Your AI Agent</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleActionButton}
                  className="group relative px-8 py-4 bg-white/5 backdrop-blur-lg rounded-xl text-white font-bold text-lg border border-white/10 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 transition-transform duration-300 group-hover:translate-y-full" />
                  <span className="relative">Watch Demo</span>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-float-delayed" />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
          </div>
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Powerful <span className="gradient-text">Features</span>
              </h2>
              <p className="text-xl text-gray-300">Discover what makes our AI agents special</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass p-8 rounded-2xl"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="py-24 relative overflow-hidden">
          <TechnologyPage />
        </section>

        {/* Agents Section */}
        <section id="agents" className="py-24 relative overflow-hidden">
          <AgentsPage />
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 relative overflow-hidden">
          <PricingPage />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Get in <span className="gradient-text">Touch</span>
              </h2>
              <p className="text-xl text-gray-300">We'd love to hear from you</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="glass rounded-2xl p-8">
                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {[
                    { icon: "👤", title: "Name", content: "Muhammad Soban Saud" },
                    { icon: "📍", title: "Location", content: "North Nazimabad, Karachi" },
                    { icon: "📱", title: "Contact", isContact: true }
                  ].map((card, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass p-6 rounded-xl"
                    >
                      <div className="text-2xl mb-2">{card.icon}</div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
                      {card.isContact ? (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-400 text-sm">Email:</span>
                            <p className="text-gray-300">sobansaud3@gmail.com</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-blue-400 text-sm">Phone:</span>
                            <p className="text-gray-300">03299274846</p>
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-300">{card.content}</p>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Contact Form */}
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-gray-300">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-gray-300">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder="Your message here..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 
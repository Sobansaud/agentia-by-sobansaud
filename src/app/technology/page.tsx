"use client"

import { motion } from 'framer-motion'
import { BeakerIcon, CpuChipIcon, BoltIcon, SparklesIcon } from '@heroicons/react/24/outline'

const technologies = [
  {
    title: "Natural Language Processing",
    description: "Advanced AI models that understand human language with exceptional accuracy.",
    icon: BeakerIcon,
    color: "from-purple-500/20 to-purple-500/10"
  },
  {
    title: "Machine Learning",
    description: "Self-evolving algorithms that continuously learn and adapt from new data.",
    icon: CpuChipIcon,
    color: "from-blue-500/20 to-blue-500/10"
  },
  {
    title: "Neural Networks",
    description: "Multi-layered neural networks mimicking human brain function.",
    icon: SparklesIcon,
    color: "from-green-500/20 to-green-500/10"
  },
  {
    title: "Real-time Processing",
    description: "Lightning-fast data processing and response generation.",
    icon: BoltIcon,
    color: "from-yellow-500/20 to-yellow-500/10"
  }
]

export default function TechnologyPage() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-[#0A0F2C] to-[#1A1F3C]">
      <div className="container mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Our Technology
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Powered by cutting-edge AI and machine learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              <div className="relative z-10">
                <tech.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-white">{tech.title}</h3>
                <p className="text-blue-200">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass mt-16 p-12 text-center rounded-3xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-50" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Experience the Future?</h2>
            <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
              Join thousands of businesses already using our advanced AI technology
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-bold text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 transition-transform duration-300 group-hover:translate-y-full" />
              <span className="relative">Get Started Now</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 
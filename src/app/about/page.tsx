"use client"

import { motion } from 'framer-motion'
import { BeakerIcon, UserGroupIcon, ChartBarIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function About() {
  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "100+", label: "Team Members" },
    { number: "1000+", label: "Clients Worldwide" },
    { number: "99.9%", label: "Success Rate" }
  ]

  const values = [
    {
      title: "Innovation",
      description: "Pushing the boundaries of AI technology with cutting-edge research and development",
      icon: BeakerIcon
    },
    {
      title: "Collaboration",
      description: "Working together with clients and partners to achieve exceptional results",
      icon: UserGroupIcon
    },
    {
      title: "Performance",
      description: "Delivering measurable results and continuous improvement for our clients",
      icon: ChartBarIcon
    },
    {
      title: "Intelligence",
      description: "Creating smart, adaptive solutions for complex business challenges",
      icon: SparklesIcon
    }
  ]

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-[#0A0F2C] to-[#1A1F3C]">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Our Story
            </h1>
            <p className="text-xl text-blue-200 mb-12">
              Leading the future of AI technology with innovative solutions and exceptional talent
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl text-center"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white text-center">Our Mission</h2>
              <p className="text-xl text-blue-200 mb-8 text-center">
                To revolutionize businesses through intelligent AI solutions that enhance efficiency, 
                drive growth, and create meaningful impact in the digital world.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Advancing AI Technology",
                  "Empowering Businesses",
                  "Creating Sustainable Solutions",
                  "Fostering Innovation",
                  "Ensuring Data Privacy",
                  "Promoting Ethical AI"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Our Values</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              The principles that guide our innovation and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl group hover:translate-y-[-2px] transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 
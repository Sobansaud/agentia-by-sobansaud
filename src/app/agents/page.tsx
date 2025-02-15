"use client"

import { motion } from 'framer-motion'
import { 
  CodeBracketIcon, 
  ChartBarIcon, 
  ChatBubbleBottomCenterTextIcon, 
  GlobeAltIcon, 
  ShieldCheckIcon, 
  CpuChipIcon 
} from '@heroicons/react/24/outline'

const agents = [
  {
    title: "Customer Service",
    description: "24/7 intelligent customer support with natural language understanding",
    icon: ChatBubbleBottomCenterTextIcon,
    color: "from-blue-500/20 to-blue-500/10"
  },
  {
    title: "Sales Assistant",
    description: "Smart lead qualification & conversion optimization",
    icon: CodeBracketIcon,
    color: "from-purple-500/20 to-purple-500/10"
  },
  {
    title: "Data Analyst",
    description: "Advanced analytics & automated reporting systems",
    icon: ChartBarIcon,
    color: "from-green-500/20 to-green-500/10"
  },
  {
    title: "Language Expert",
    description: "Multilingual communication & real-time translation",
    icon: GlobeAltIcon,
    color: "from-yellow-500/20 to-yellow-500/10"
  },
  {
    title: "Security Agent",
    description: "Proactive threat detection & system protection",
    icon: ShieldCheckIcon,
    color: "from-red-500/20 to-red-500/10"
  },
  {
    title: "Process Automation",
    description: "End-to-end workflow optimization & automation",
    icon: CpuChipIcon,
    color: "from-indigo-500/20 to-indigo-500/10"
  }
]

export default function AgentsPage() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-[#0A0F2C] to-[#1A1F3C]">
      <div className="container mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Our AI Agents
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Discover our specialized AI agents designed for your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-xl group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              <div className="relative z-10">
                <agent.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{agent.title}</h3>
                <p className="text-blue-200">{agent.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 
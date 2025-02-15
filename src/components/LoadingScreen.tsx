"use client"

import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0F2C]"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-white mb-4"
        >
          Agentia
        </motion.div>
        <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1, repeat: 2 }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          />
        </div>
      </div>
    </motion.div>
  )
} 
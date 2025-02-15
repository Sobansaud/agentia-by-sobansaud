"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <motion.div
      className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
      animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
      transition={{ type: "spring", damping: 50, stiffness: 500 }}
    >
      <div className="w-full h-full rounded-full bg-white opacity-50" />
    </motion.div>
  )
} 
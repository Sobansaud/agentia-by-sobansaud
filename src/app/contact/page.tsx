"use client"

import { motion } from 'framer-motion'
import { useState, FormEvent, ChangeEvent } from 'react'

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-[#0A0F2C] to-[#1A1F3C]">
      <div className="container mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Contact Us
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Get in touch with our team
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-8 rounded-2xl"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => 
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => 
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => 
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Message
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => 
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  )
} 
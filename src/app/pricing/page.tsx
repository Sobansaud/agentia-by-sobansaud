"use client"

import { motion } from 'framer-motion'

const pricingPlans = [
  {
    name: "Starter",
    price: "$49",
    features: [
      "2 AI Agents",
      "Basic Analytics",
      "Email Support",
      "5 Custom Workflows",
      "1,000 API Calls/month"
    ],
    recommended: false
  },
  {
    name: "Professional",
    price: "$99",
    features: [
      "5 AI Agents",
      "Advanced Analytics",
      "Priority Support",
      "Unlimited Workflows",
      "10,000 API Calls/month"
    ],
    recommended: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited AI Agents",
      "Custom Analytics",
      "24/7 Support",
      "Custom Solutions",
      "Unlimited API Calls"
    ],
    recommended: false
  }
]

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg p-8 ${
                plan.recommended ? 'border-2 border-blue-500 relative' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                    Recommended
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">{plan.price}</div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-full font-semibold ${
                  plan.recommended
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                } transition`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 
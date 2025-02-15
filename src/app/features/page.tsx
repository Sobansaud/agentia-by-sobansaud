"use client"

import Link from 'next/link'

const features = [
  {
    title: "AI-Powered Automation",
    description: "Automate complex tasks with intelligent AI agents",
    icon: "🤖"
  },
  {
    title: "Natural Language Processing",
    description: "Advanced language understanding and processing",
    icon: "💬"
  },
  {
    title: "24/7 Availability",
    description: "Round-the-clock service without interruption",
    icon: "⏰"
  },
  {
    title: "Data Analytics",
    description: "Deep insights from your business data",
    icon: "📊"
  },
  {
    title: "Custom Integration",
    description: "Seamless integration with your existing tools",
    icon: "🔄"
  },
  {
    title: "Scalable Solution",
    description: "Grows with your business needs",
    icon: "📈"
  }
]

export default function Features() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the capabilities that make our AI agents truly exceptional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  )
} 
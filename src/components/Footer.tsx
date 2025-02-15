"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6'

export default function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", section: "features" },
        { name: "Technology", section: "technology" },
        { name: "Agents", section: "agents" },
        { name: "Pricing", section: "pricing" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Contact", section: "contact" },
        { name: "Blog", path: "/blog" },
        { name: "Careers", path: "/careers" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", path: "/docs" },
        { name: "API Reference", path: "/api" },
        { name: "Support", path: "/support" },
        { name: "Status", path: "/status" }
      ]
    }
  ]

  const socialIcons = [
    { Icon: FaTwitter, href: "#", label: "Twitter" },
    { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { Icon: FaGithub, href: "#", label: "GitHub" }
  ]

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const handleClick = (path?: string, section?: string) => {
    if (section) {
      handleScroll(section)
    } else if (path) {
      window.location.href = path
    }
  }

  return (
    <footer className="bg-[#0A0F2C] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="text-2xl font-bold mb-6 block">
              Agentia
            </Link>
            <p className="text-gray-400 mb-6">
              Next-generation AI agents for your business needs
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500/20 transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-300 hover:text-blue-400" />
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-6 text-white">
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleClick(link.path, link.section)}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Agentia. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 
// "use client"

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isVisible, setIsVisible] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [activeSection, setActiveSection] = useState('home')

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     setIsVisible(true)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const navItems = [
//     { name: 'Home', section: 'home' },
//     { name: 'Features', section: 'features' },
//     { name: 'Technology', section: 'technology' },
//     { name: 'Agents', section: 'agents' },
//     { name: 'Pricing', section: 'pricing' },
//     { name: 'Contact', section: 'contact' }
//   ]

//   const handleNavClick = (sectionId: string) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       const yOffset = -80
//       const y = element.getBoundingClientRect().top + window.scrollY + yOffset
//       window.scrollTo({
//         top: y,
//         behavior: 'smooth'
//       })
//       setActiveSection(sectionId)
//       setIsMobileMenuOpen(false)
//     }
//   }

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.nav
//           initial={{ y: -100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//             isScrolled ? 'glass shadow-lg backdrop-blur-lg' : 'bg-transparent'
//           }`}
//         >
//           <div className="container mx-auto px-4">
//             <div className="flex items-center justify-between h-20">
//               {/* Logo */}
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => handleNavClick('home')}
//                 className={`text-2xl font-bold ${
//                   activeSection === 'home' ? 'text-blue-400' : 'text-white'
//                 }`}
//               >
//                 Agentia
//               </motion.button>

//               {/* Desktop Navigation */}
//               <div className="hidden md:flex items-center space-x-8">
//                 {navItems.map((item) => (
//                   <motion.button
//                     key={item.name}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => handleNavClick(item.section)}
//                     className={`text-lg font-medium transition-colors duration-300 relative group ${
//                       activeSection === item.section ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
//                     }`}
//                   >
//                     {item.name}
//                     <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
//                   </motion.button>
//                 ))}
//               </div>

//               {/* Get Started Button */}
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
//               >
//                 Get Started
//               </motion.button>

//               {/* Mobile Menu Button */}
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="md:hidden text-white p-2"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                   />
//                 </svg>
//               </motion.button>
//             </div>

//             {/* Mobile Menu */}
//             <AnimatePresence>
//               {isMobileMenuOpen && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: 'auto' }}
//                   exit={{ opacity: 0, height: 0 }}
//                   className="md:hidden bg-[#0A0F2C] py-4"
//                 >
//                   <div className="flex flex-col space-y-4">
//                     {navItems.map((item) => (
//                       <motion.button
//                         key={item.name}
//                         whileHover={{ x: 10 }}
//                         onClick={() => handleNavClick(item.section)}
//                         className="text-left text-lg font-medium text-gray-300 hover:text-blue-400 py-2 px-4"
//                       >
//                         {item.name}
//                       </motion.button>
//                     ))}
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 mx-4 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
//                     >
//                       Get Started
//                     </motion.button>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </motion.nav>
//       )}
//     </AnimatePresence>
//   )
// } 




'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
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

  const handleNavClick = (sectionId :string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)
      setIsMobileMenuOpen(false)
    }
  }

  return (
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
  )
}

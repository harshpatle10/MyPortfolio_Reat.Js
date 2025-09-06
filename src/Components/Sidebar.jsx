"use client"

import { useState } from "react"

const Sidebar = ({ activeSection, onSectionChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { id: "about", label: "About", icon: "👤" },
    { id: "skills", label: "Skills", icon: "🛠️" },
    { id: "projects", label: "Projects", icon: "💼" },
    { id: "experience", label: "Experience", icon: "📈" },
    { id: "certificates", label: "Certificates", icon: "🏆" },
    { id: "problem-solving", label: "Problem Solving", icon: "🧩" },
    { id: "contact", label: "Contact", icon: "📧" },
  ]

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/harshpatle10", icon: "🔗" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/harsh-patle-4252aa257/", icon: "💼" },
    { label: "Twitter", href: "https://x.com/harsh_patle17", icon: "🐦" },
    { label: "Email", href: "mailto:harshpatle99999@gmail.com", icon: "📧" },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-slate-900 text-white p-3 rounded-lg shadow-lg hover:bg-slate-800 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-5 h-5 flex flex-col justify-center items-center">
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${
              isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm my-0.5 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </div>
      </button>

      {/* Sidebar - Fixed position with scroll */}
      <div
        className={`w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white fixed left-0 top-0 h-screen z-40 transform transition-transform duration-300 ease-in-out shadow-2xl overflow-hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Scrollable Content Container */}
        <div className="h-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
          {/* Profile Section */}
          <div className="text-center p-6 border-b border-slate-700 sticky top-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 z-10">
            <div className="relative mb-4">
              <div className="w-32 h-32 mx-auto border-4 border-blue-500 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold shadow-lg">
              <img className=" rounded-full" src="https://media.licdn.com/dms/image/v2/D5603AQGH6AXgroZ_Dw/profile-displayphoto-shrink_400_400/B56ZYli1A5GoAg-/0/1744386612485?e=1756339200&v=beta&t=hQ5ngDIeI6h-Nj4y96jrjpRAQOIAEpwynRo53ObXoSU" alt="" />
              </div>
              <div className="absolute bottom-2 right-1/2 transform translate-x-6 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Harsh Patle
            </h1>
            <p className="text-slate-300 text-sm font-medium">Full Stack Developer</p>
            <p className="text-slate-400 text-xs mt-1">Building digital experiences</p>

            {/* Quick Stats */}
            <div className="flex justify-center gap-4 mt-4 text-xs">
              <div className="text-center">
                <div className="text-blue-400 font-bold">2+</div>
                <div className="text-slate-400">Years</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-bold">10+</div>
                <div className="text-slate-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-bold">9+</div>
                <div className="text-slate-400">Skills</div>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="p-4">
            <div className="mb-4">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Navigation</h3>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center gap-3 group ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white hover:transform hover:scale-105"
                      }`}
                      onClick={() => {
                        onSectionChange(item.id)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                      {activeSection === item.id && <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Skills Quick View */}
          <div className="p-4 border-t border-slate-700">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Top Skills</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                 <span className="text-sm text-slate-300">Java SE/EE</span>
                <div className="w-16 bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-300">React/Next.js</span>
                <div className="w-16 bg-slate-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-300">Spring Boot</span>
                <div className="w-16 bg-slate-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="p-4 border-t border-slate-700">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-xs text-slate-300">Updated Portfolio</p>
                  <p className="text-xs text-slate-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="text-xs text-slate-300">New Certificate Added</p>
                  <p className="text-xs text-slate-500">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div>
                  <p className="text-xs text-slate-300">Project Completed</p>
                  <p className="text-xs text-slate-500">3 days ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-4 border-t border-slate-700">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Connect</h3>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800 text-sm"
                  title={social.label}
                >
                  <span className="text-base">{social.icon}</span>
                  <span className="truncate">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Current Status */}
          <div className="p-4 border-t border-slate-700">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-3 text-center">
              <p className="text-white text-sm font-medium">🚀 Available for Work</p>
              <p className="text-green-100 text-xs mt-1">Open to new opportunities</p>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 text-center border-t border-slate-700">
            <p className="text-xs text-slate-500">© 2024 John Doe</p>
            <p className="text-xs text-slate-600 mt-1">Made with ❤️ & React</p>
            <div className="mt-2 flex justify-center gap-2">
              <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar

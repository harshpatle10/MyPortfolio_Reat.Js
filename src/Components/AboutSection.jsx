"use client"

import { useState } from "react"

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("overview")

  const personalInfo = {
    location: "Balaghat, Madhya Pradesh",
    experience: "2+ Months Internship + Project Experience",
    email: "harshpatle99999@gmail.com",
    phone: "+91 6264238985",
    timezone: "IST (UTC+5:30)",
    languages: "English, Hindi",
    availability: "Open to Opportunities",
  }

  const interests = [
    { name: "Full Stack Development", icon: "🧩", level: "Skilled" },
    { name: "React & Tailwind UI", icon: "⚛️", level: "Skilled" },
    { name: "Problem Solving (DSA)", icon: "🧠", level: "Consistent" },
    { name: "Hackathons", icon: "🏆", level: "Participant" },
    { name: "Cricket", icon: "🏏", level: "Since 2022" },
    { name: "Open Source", icon: "🌍", level: "Learning" },
  ]

  const achievements = [
    { number: "260+", label: "LeetCode Problems", icon: "📘" },
    { number: "70+", label: "DSA Days Streak", icon: "🔥" },
    { number: "3+", label: "Major Projects", icon: "💼" },
    { number: "₹25,000", label: "MP Govt. Laptop Award", icon: "🎓" },
  ]

  const values = [
    {
      title: "Consistency",
      description: "Daily DSA practice with badges on LeetCode & GFG",
      icon: "📅",
    },
    {
      title: "Growth",
      description: "Committed to continuous learning and improvement",
      icon: "📈",
    },
    {
      title: "Teamwork",
      description: "Led multiple academic and extracurricular projects",
      icon: "🤝",
    },
    {
      title: "Quality",
      description: "Delivers clean, maintainable, and functional code",
      icon: "🔍",
    },
  ]

  const tabs = [
    { id: "overview", label: "Overview", icon: "👤" },
    { id: "values", label: "Values", icon: "💎" },
    { id: "personal", label: "Personal", icon: "📋" },
  ]

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-800/20 rounded-2xl"></div>
        <div className="relative p-8 text-center bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm Harsh Patle, a Java Full Stack Developer passionate about building scalable web apps, solving DSA challenges, and delivering efficient frontend-backend systems.
          </p>
        </div>
      </div>

      {/* Achievement Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500 group"
          >
            <div className="text-center">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{achievement.number}</div>
              <div className="text-sm text-gray-400">{achievement.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
        <div className="flex border-b border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-6 py-4 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 border-b-2 border-blue-500"
                  : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-8">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Hi, I'm <span className="font-semibold text-blue-400">Harsh Patle</span> from Balaghat, MP — a developer with a deep interest in Java Full Stack Development and Data Structures & Algorithms. Currently pursuing B.Tech at JNCT, Bhopal, and growing through real-world internships and hackathon experiences.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I enjoy building full-featured applications using Java, Spring, React.js, and SQL. Whether it’s a virtual assistant site, laundry platform, or room booking portal — I thrive in turning ideas into working products.
                </p>
              </div>

              {/* Interests Grid */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Interests & Expertise
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-all duration-300 border border-gray-600 hover:border-blue-500 group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {interest.icon}
                        </span>
                        <div>
                          <div className="font-medium text-white">{interest.name}</div>
                          <div className="text-sm text-gray-400">{interest.level}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Values Tab */}
          {activeTab === "values" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-3">Core Values</h3>
                <p className="text-gray-400">The principles that guide my learning and development</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-xl p-6 border border-gray-600 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Personal Tab */}
          {activeTab === "personal" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-600">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-xl">📋</span>
                    Personal Information
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(personalInfo).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex items-center justify-between py-2 border-b border-gray-700 last:border-b-0"
                      >
                        <span className="text-gray-400 capitalize font-medium">
                          {key.replace(/([A-Z])/g, " $1").trim()}:
                        </span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-600">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-xl">📞</span>
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 hover:shadow-md transition-all duration-300 group"
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300">📧</span>
                      <div>
                        <div className="font-medium text-white">Email</div>
                        <div className="text-sm text-gray-400">{personalInfo.email}</div>
                      </div>
                    </a>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 hover:shadow-md transition-all duration-300 group"
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300">📱</span>
                      <div>
                        <div className="font-medium text-white">Phone</div>
                        <div className="text-sm text-gray-400">{personalInfo.phone}</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-800 to-gray-800 rounded-xl p-6 text-white text-center border border-green-500/30">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                  <span className="text-lg font-semibold">Currently Available</span>
                </div>
                <p className="text-green-100">Actively seeking internships & junior developer roles</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AboutSection

const SkillsSection = () => {
 const technicalSkills = [
    { name: "Java", level: 80, color: "from-yellow-500 to-yellow-600" },
    { name: "React.js/Tailwind CSS", level: 70, color: "from-blue-500 to-blue-600" },
    { name: "HTML/CSS/JavaScript", level: 75, color: "from-green-500 to-green-600" },
    { name: "Spring Core/JSP/Servlet", level: 68, color: "from-purple-500 to-purple-600" },
    { name: "MySQL/JDBC", level: 80, color: "from-indigo-500 to-indigo-600" },
    { name: "Data Structures & Algorithms", level: 78, color: "from-orange-500 to-orange-600" },
  ];

  const technologies = [
    "Java",
    "Spring Core",
    "Servlet",
    "JSP",
    "JDBC",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "React.js",
    "MySQL",
    "Git",
    "Vite",
    "APIs",
    "Netlify",
    "LeetCode",
    "VS Code",
    "Eclipse",
    "Postman",
  ];

  const professionalSkills = [
    {
      title: "Problem Solving",
      description: "Solved 260+ problems on LeetCode & 80+ on GFG",
      emoji: "🎯",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Team Collaboration",
      description: "Worked collaboratively during internships and college expos",
      emoji: "👥",
      color: "from-green-500 to-blue-500",
    },
    {
      title: "Quick Learner",
      description: "Adapted to React, Tailwind, and backend skills rapidly",
      emoji: "⚡",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
      icon: "🎨",
      color: "from-blue-500 to-purple-500",
    },
    {
      category: "Backend",
      skills: ["Java", "Spring Core", "Servlet", "JSP", "JDBC"],
      icon: "⚙️",
      color: "from-green-500 to-blue-500",
    },
    {
      category: "Database",
      skills: ["MySQL"],
      icon: "🗄️",
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Vite", "Netlify", "VS Code", "Postman"],
      icon: "🧰",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
        <div className="relative p-8 text-center bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across modern web development technologies
          </p>
        </div>
      </div>

      {/* Technical Skills Progress */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Technical Skills */}
        <div className="bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">💻</span>
            <h3 className="text-2xl font-semibold text-white">Technical Skills</h3>
          </div>
          <div className="space-y-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-400 font-mono">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🛠️</span>
            <h3 className="text-2xl font-semibold text-white">Technologies & Tools</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 border border-gray-600 text-gray-300 rounded-lg text-sm hover:bg-gray-700 hover:border-blue-500 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Skill Categories */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-2">Skill Categories</h3>
          <p className="text-gray-400">Organized by technology stack and expertise area</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group hover:shadow-xl"
            >
              <div className="text-center mb-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{category.category}</h4>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-md hover:text-white hover:bg-gray-700 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Skills */}
      <div className="bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-700">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-2xl">🌟</span>
            <h3 className="text-2xl font-semibold text-white">Professional Skills</h3>
          </div>
          <p className="text-gray-400">Core competencies that drive successful project delivery</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {professionalSkills.map((skill, index) => (
            <div key={index} className="text-center group">
              <div
                className={`w-20 h-20 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}
              >
                <span className="text-3xl">{skill.emoji}</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {skill.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Summary Stats */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/30">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-white mb-2">Skills Overview</h3>
          <p className="text-gray-300">Years of experience and expertise levels</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
            <div className="text-3xl font-bold text-blue-400 mb-1">16+</div>
            <div className="text-sm text-gray-400">Technologies</div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
            <div className="text-3xl font-bold text-green-400 mb-1">2+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
            <div className="text-3xl font-bold text-purple-400 mb-1">4</div>
            <div className="text-sm text-gray-400">Skill Categories</div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
            <div className="text-3xl font-bold text-orange-400 mb-1">85%</div>
            <div className="text-sm text-gray-400">Avg. Proficiency</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection

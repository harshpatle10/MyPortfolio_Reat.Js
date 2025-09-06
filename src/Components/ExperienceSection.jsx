const ExperienceSection = () => {
    const experiences = [
    {
      title: "Software Developer Intern",
      company: "Leopard Runs Innovation & Technology",
      location: "Remote",
      period: "Feb 2025 - Present",
      description:
  "Completed a software development internship focused on React.js, where I handled UI development and real-time data management. Worked on integrating and managing data from APIs, and contributed to building scalable and maintainable front-end systems.",
      achievements: [
        "Developed responsive UI components using React.js and TypeScript",
  "Managed and displayed real-time data fetched from RESTful APIs",
  "Built a localStorage-based column selection feature for user preferences",
  "Collaborated with design and QA teams to enhance UI/UX consistency",
  "Used GitHub for version control and participated in deployment processes",

      ],
      technologies: ["HTML","CSS","Tailwind CSS","JavaScript","React", "Next.js", "MUI", "Axios"],
      type: "Internship",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      school: "Jai Narain College Of Technology",
      location: "Bhopal, MP",
      period: "2022 - 2026",
      gpa: "7.5 CGPA",
      description: "Pursuing final year with strong academic and project-based foundation in Full Stack Development.",
      coursework: [
        "Data Structures and Algorithms",
        "Java Programming",
        "Web Development",
        "Software Engineering",
        "Database Management Systems",
        "Operating Systems"
      ],
      activities: [
        "Led team in Hackathon and Project Expo 2024",
        "Participated in cricket tournaments and technical presentations"
      ],
    },
    {
      degree: "Senior Secondary (12th)",
      school: "Govt. H. S. School, Sadra",
      location: "Balaghat, MP",
      period: "2020 - 2022",
      gpa: "75%",
      description: "Focused on mathematics and computer science in higher secondary education.",
      activities: ["Received government laptop scholarship ₹25,000 under MP Yojna 2022",]
    },
    {
      degree: "Matriculation (10th)",
      school: "Govt. H. S. School, Sadra",
      location: "Balaghat, MP",
      period: "2018 - 2020",
      gpa: "87%",
      description: "Completed foundational schooling with distinction in science and computer education.",
      activities: [
        "Academic Top Performer",
        "Class Representative"
      ]
    }
  ]

  const skills = [
    {
      category: "Programming Languages",
      items: ["Java", "JavaScript", "TypeScript", "SQL", "C"]
    },
    {
      category: "Frontend Technologies",
      items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript"]
    },
    {
      category: "Backend Technologies",
      items: ["Spring Boot", "Java EE", "Servlets", "JSP",  "JDBC"]
    },
    {
      category: "Databases",
      items: ["MySQL"]
    },
    {
      category: "Tools & Platforms",
      items: [ "VS Code", "Spring Tool Suite IDE", "Eclipse IDE","IntelliJ IDEA","Run SQL Command","Git", "GitHub"]
    }
  ]

  return (
    <div className="space-y-8 bg-gray-900 text-gray-200 p-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">Professional Experience</h2>
        <div className="w-20 h-1 bg-blue-500 mb-6"></div>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">💼 Work Experience</h3>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-8">
              {/* Timeline Dot */}
              <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 shadow-md hidden md:block"></div>

              <div className="md:ml-12 bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                    <p className="text-lg text-blue-400 font-medium">{exp.company}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                      <span className="flex items-center gap-1">📅 {exp.period}</span>
                      <span className="flex items-center gap-1">📍 {exp.location}</span>
                      <span className="flex items-center gap-1">💼 {exp.type}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                <div className="mb-4">
                  <h5 className="font-semibold text-white mb-3 flex items-center gap-2">🎯 Key Achievements:</h5>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-2 flex items-center gap-2">🛠️ Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium border border-blue-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">🎓 Education</h3>

        {education.map((edu, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                <p className="text-lg text-blue-400 font-medium">{edu.school}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                  <span className="flex items-center gap-1">📅 {edu.period}</span>
                  <span className="flex items-center gap-1">📍 {edu.location}</span>
                  {edu.gpa && <span className="flex items-center gap-1">📊 GPA: {edu.gpa}</span>}
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-4">{edu.description}</p>

            {edu.coursework && (
              <div className="mb-4">
                <h5 className="font-semibold text-white mb-2">📚 Relevant Coursework:</h5>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <span key={courseIndex} className="px-2 py-1 bg-gray-700 text-gray-200 rounded text-xs">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {edu.activities && (
              <div>
                <h5 className="font-semibold text-white mb-2">🏆 Activities & Achievements:</h5>
                <ul className="space-y-1">
                  {edu.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Skills Summary */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">🚀 Technical Skills Summary</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md p-4">
              <h4 className="font-semibold text-white mb-3 text-center">{skillGroup.category}</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-2 py-1 bg-gray-700 text-gray-200 rounded text-xs border border-gray-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Stats */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4 text-center">📈 Career Highlights</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-400">2+</div>
            <div className="text-sm text-gray-300">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">10+</div>
            <div className="text-sm text-gray-300">Projects Completed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">1</div>
            <div className="text-sm text-gray-300">Internship</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-400">15+</div>
            <div className="text-sm text-gray-300">Technologies</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceSection

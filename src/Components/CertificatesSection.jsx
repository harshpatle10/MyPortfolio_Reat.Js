

const CertificatesSection = () => {
  const certificates = [
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    issueDate: "2024",
    expiryDate: "Never",
    credentialId: "NPTEL24CS105S553900373",
    description: "Covered OOPs, exception handling, and Java GUI with project-based learning.",
    skills: ["Java", "OOP", "Swing", "Exception Handling"],
    verificationUrl: "https://archive.nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc24-cs105",
    image: "https://ia.iitm.ac.in/assets/images/impactStories/nptel-logo.png",
    featured: true,
    status: "Active",
    level: "Professional",
    category: "Java",
  },

  {
    title: "Data Structures and Algorithms using Java",
    issuer: "NPTEL",
    issueDate: "2024",
    expiryDate: "Never",
    credentialId: "NPTEL24CS96S353900247",
    description: "Learned essential data structures and algorithms using Java.",
    skills: ["DSA", "Java", "Algorithm Design"],
    verificationUrl: "https://archive.nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc24-cs96",
    image: "https://ia.iitm.ac.in/assets/images/impactStories/nptel-logo.png",
    featured: true,
    status: "Active",
    level: "Associate",
    category: "DSA",
  },
  {
  title: "Data Structures and Algorithms using Java",
  issuer: "SCALive",
  issueDate: "2024",
  expiryDate: "Never",
  credentialId: "SCALIVE-DSA-2024-002",
  description: "Training in Data Structures and Algorithms using Java, including hands-on problem solving and algorithmic thinking.",
  skills: ["Java", "DSA", "Algorithms", "Problem Solving", "Time Complexity"],
  verificationUrl: "https://scalive.in", // Update if you have a LinkedIn or certificate-specific URL
  image: "https://scalive.in/assets/images/logo/site_logos.png",
  featured: false,
  status: "Active",
  level: "Intermediate",
  category: "DSA"
},
  {
    title: "Java Full Stack Development",
    issuer: "SCALive",
    issueDate: "2024",
    expiryDate: "Never",
    credentialId: "SCALIVE-JFS-2024-003",
    description: "Full stack training in Core Java, Advanced Java, Servlets, JSP, JDBC, and frontend.",
    skills: ["Java", "JSP", "Servlet", "JDBC", "React.js"],
    verificationUrl: "https://www.linkedin.com/posts/harsh-patle-4252aa257_javafullstack-scabhopal-fullstackdeveloper-activity-7320322763200585728-_Rbo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD85t90BLHT20E6GmRrKndNU0dvepfeLqLE",
    image: "https://scalive.in/assets/images/logo/site_logos.png",
    featured: false,
    status: "Active",
    level: "Professional",
    category: "Java",
  },
  {
    title: "Software Development Intern Certificate",
    issuer: "Leopard Runs Innovation & Technology",
    issueDate: "2025",
    expiryDate: "Never",
    credentialId: "LRIT-SDI-2025-004",
    description: "Hands-on internship involving real-world full-stack project development.",
    skills: ["React.js", "Spring Boot", "JDBC", "Project Management"],
    verificationUrl: "https://www.linkedin.com/posts/harsh-patle-4252aa257_internship-reactjs-frontenddevelopment-activity-7320822567127199744-yyJx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD85t90BLHT20E6GmRrKndNU0dvepfeLqLE",
    image: "https://thumbs.dreamstime.com/b/internship-text-red-violet-ribbon-badge-stamp-internship-text-red-violet-ribbon-stamp-213094471.jpg",
    featured: true,
    status: "Active",
    level: "Professional",
    category: "Full Stack",
  },
  {
    title: "AI-ML Virtual Internship",
    issuer: "AICTE & Eduskills",
    issueDate: "2024",
    expiryDate: "Never",
    credentialId: "AI-ML-VI-2024-005",
    description: "Completed AI-ML virtual internship covering classification, regression, and Python libraries.",
    skills: ["Machine Learning", "Python", "AI"],
    verificationUrl: "https://www.linkedin.com/posts/harsh-patle-4252aa257_aicteinternship-aicteneat-aicte-activity-7127235327034896384-5ofH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD85t90BLHT20E6GmRrKndNU0dvepfeLqLE",
    image: "https://media-exp1.licdn.com/dms/image/C560BAQH827651PNzYw/company-logo_200_200/0/1622908370840?e=2147483647&v=beta&t=4Cc9LWmJpSUco9gt_bQE75wC8bQ4Z6J0XpbBgFJVfVE",
    featured: false,
    status: "Active",
    level: "Associate",
    category: "AI/ML",
  },
  
  {
    title: "Database Management System - Part 1",
    issuer: "Infosys Springboard",
    issueDate: "2024",
    expiryDate: "Never",
    credentialId: "INFOSYS-DBMS1-2024-006",
    description: "Introduction to relational database design and querying.",
    skills: ["SQL", "DBMS", "Normalization"],
    verificationUrl: "https://infyspringboard.onwingspan.com/",
    image: "https://play-lh.googleusercontent.com/Fjga-fnKPNPSg1_3mVis70od3LrCSvrL1lmwl2123h_RJ4DxlUjCQLym05LqDapG2Q",
    featured: false,
    status: "Active",
    level: "Associate",
    category: "Database",
  },
  {
    title: "React.js Developer Certificate",
    issuer: "Infosys Springboard",
    issueDate: "2024",
    expiryDate: "Never",
    credentialId: "INFOSYS-REACT-2024-007",
    description: "Frontend certification focused on building dynamic UIs with React.",
    skills: ["React.js", "JavaScript", "UI Development"],
    verificationUrl: "https://infyspringboard.onwingspan.com/",
    image: "https://play-lh.googleusercontent.com/Fjga-fnKPNPSg1_3mVis70od3LrCSvrL1lmwl2123h_RJ4DxlUjCQLym05LqDapG2Q",
    featured: false,
    status: "Active",
    level: "Professional",
    category: "Frontend Development",
  },
  {
    title: "Java Programming Fundamentals",
    issuer: "Infosys Springboard",
    issueDate: "2024",
    expiryDate: "Never",
    credentialId: "INFOSYS-JAVA-2024-008",
    description: "Basics of Java programming including variables, loops, and OOP.",
    skills: ["Java", "OOP", "Loops"],
    verificationUrl: "https://infyspringboard.onwingspan.com/",
    image: "https://play-lh.googleusercontent.com/Fjga-fnKPNPSg1_3mVis70od3LrCSvrL1lmwl2123h_RJ4DxlUjCQLym05LqDapG2Q",
    featured: false,
    status: "Active",
    level: "Associate",
    category: "Java",
  },
  {
    title: "Spring 5 Basics with Spring Boot",
    issuer: "Infosys Springboard",
    issueDate: "2024",
    expiryDate: "Never",
    credentialId: "INFOSYS-SPRING5-2024-009",
    description: "Introduction to Spring 5 framework and Spring Boot for backend development.",
    skills: ["Spring", "Spring Boot", "Java"],
    verificationUrl: "https://infyspringboard.onwingspan.com/",
    image: "https://play-lh.googleusercontent.com/Fjga-fnKPNPSg1_3mVis70od3LrCSvrL1lmwl2123h_RJ4DxlUjCQLym05LqDapG2Q",
    featured: false,
    status: "Active",
    level: "Associate",
    category: "Backend",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    issueDate: "2024",
    expiryDate: "Never",
    credentialId: "AWS-ACF-2024-010",
    description: "Academic introduction to AWS services, IAM, EC2, S3, and VPCs.",
    skills: ["AWS", "Cloud", "Infrastructure"],
    verificationUrl: "https://aws.amazon.com/training/",
    image: "https://gadget.co.za/wp-content/uploads/2020/12/aws-logo-scaled.jpg",
    featured: false,
    status: "Active",
    level: "Associate",
    category: "Cloud Computing",
  },
  {
    title: "AWS Academy Machine Learning",
    issuer: "AWS Academy",
    issueDate: "2024",
    expiryDate: "Never",
    credentialId: "AWS-ML-2024-011",
    description: "Core ML principles and AWS SageMaker hands-on labs.",
    skills: ["Machine Learning", "AWS", "SageMaker"],
    verificationUrl: "https://aws.amazon.com/training/",
    image: "https://gadget.co.za/wp-content/uploads/2020/12/aws-logo-scaled.jpg",
    featured: false,
    status: "Active",
    level: "Professional",
    category: "AI/ML",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    issueDate: "2024",
    expiryDate: "Never",
    credentialId: "CISCO-PY1-2024-012",
    description: "Covered Python syntax, data structures, functions, and file operations.",
    skills: ["Python", "Data Structures", "Basic Programming"],
    verificationUrl: "https://www.netacad.com/",
    image: "https://seeklogo.com/images/C/cisco-networking-academy-logo-0B2566178E-seeklogo.com.png",
    featured: false,
    status: "Active",
    level: "Associate",
    category: "Programming",
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    issueDate: "2024",
    expiryDate: "Never",
    credentialId: "CISCO-PY2-2024-013",
    description: "Advanced Python including OOP, modules, and exception handling.",
    skills: ["Python", "OOP", "Exception Handling"],
    verificationUrl: "https://www.netacad.com/",
    image: "https://seeklogo.com/images/C/cisco-networking-academy-logo-0B2566178E-seeklogo.com.png",
    featured: false,
    status: "Active",
    level: "Associate",
    category: "Programming",
  },
]


  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border-green-200"
      case "Expiring Soon":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Expired":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getLevelColor = (level) => {
    switch (level) {
      case "Professional":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Associate":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Expert":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "Active":
        return "✅"
      case "Expiring Soon":
        return "⚠️"
      case "Expired":
        return "❌"
      default:
        return "📄"
    }
  }

  const activeCertificates = certificates.filter((cert) => cert.status === "Active")
  const expiringSoon = certificates.filter((cert) => cert.status === "Expiring Soon")
  const featuredCertificates = certificates.filter((cert) => cert.featured)

  // Group certificates by category
  const certificatesByCategory = certificates.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = []
    }
    acc[cert.category].push(cert)
    return acc
  }, {})

  return (
    <div className="space-y-8 bg-gray-900 text-gray-200 p-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">Certificates & Certifications</h2>
        <div className="w-20 h-1 bg-blue-500 mb-6"></div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800 rounded-lg shadow-md p-4 text-center border-l-4 border-blue-500">
          <div className="text-2xl font-bold text-blue-400">{certificates.length}</div>
          <div className="text-sm text-gray-400">Total Certificates</div>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-md p-4 text-center border-l-4 border-green-500">
          <div className="text-2xl font-bold text-green-400">{activeCertificates.length}</div>
          <div className="text-sm text-gray-400">Active</div>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-md p-4 text-center border-l-4 border-yellow-500">
          <div className="text-2xl font-bold text-yellow-400">{expiringSoon.length}</div>
          <div className="text-sm text-gray-400">Expiring Soon</div>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-md p-4 text-center border-l-4 border-purple-500">
          <div className="text-2xl font-bold text-purple-400">{featuredCertificates.length}</div>
          <div className="text-sm text-gray-400">Featured</div>
        </div>
      </div>

      {/* Featured Certifications */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">⭐ Featured Certifications</h3>
        <div className="grid gap-6">
          {featuredCertificates.map((cert, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg border-2 border-blue-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center gap-3">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={`${cert.issuer} logo`}
                    className="w-16 h-16 object-contain rounded-lg bg-white p-2 shadow-sm"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                    <p className="text-blue-200 font-medium">{cert.issuer}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(cert.status)}`}
                    >
                      {getStatusIcon(cert.status)} {cert.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${getLevelColor(cert.level)}`}>
                    {cert.level}
                  </span>
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs border">{cert.category}</span>
                  <span className="px-2 py-1 bg-blue-600 text-white rounded text-xs border border-blue-200">
                    📅 Issued: {cert.issueDate}
                  </span>
                  {cert.expiryDate !== "Never" && (
                    <span className="px-2 py-1 bg-orange-600 text-white rounded text-xs border border-orange-200">
                      📅 Expires: {cert.expiryDate}
                    </span>
                  )}
                </div>

                <p className="text-gray-300 mb-4">{cert.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-200 mb-2">🛠️ Skills Validated:</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-600 text-white rounded text-xs border border-blue-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 items-start">
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    🔗 Verify Certificate
                  </a>
                  <div className="text-xs text-gray-500 flex items-center bg-gray-700 px-3 py-2 rounded">
                    <span className="font-medium">Credential ID:</span>
                    <span className="ml-2 font-mono">{cert.credentialId}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates by Category */}
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">📂 Certificates by Category</h3>

        {Object.entries(certificatesByCategory).map(([category, certs]) => (
          <div key={category} className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-300 border-b-2 border-gray-600 pb-2">
              {category} ({certs.length})
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {certs.map((cert, index) => (
                <div key={index} className="bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={`${cert.issuer} logo`}
                      className="w-12 h-12 object-contain rounded bg-gray-700 p-1"
                    />
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-200 mb-1">{cert.title}</h5>
                      <p className="text-sm text-blue-200 mb-2">{cert.issuer}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        <span className={`px-2 py-1 rounded text-xs ${getStatusColor(cert.status)}`}>
                          {cert.status}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs ${getLevelColor(cert.level)}`}>{cert.level}</span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Issued: {cert.issueDate} | Expires: {cert.expiryDate}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certification Timeline */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">📅 Certification Timeline</h3>

        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          <div className="space-y-4">
            {certificates
              .sort((a, b) => new Date(b.issueDate) - new Date(a.issueDate))
              .map((cert, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-gray-700 rounded-lg">
                  <div className="text-center min-w-[80px]">
                    <div className="text-sm font-semibold text-blue-400">{cert.issueDate}</div>
                  </div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-200">{cert.title}</h5>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${getStatusColor(cert.status)}`}>{cert.status}</span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Upcoming Renewals */}
      {expiringSoon.length > 0 && (
        <div className="bg-yellow-800 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-200 mb-4 flex items-center gap-2">⚠️ Upcoming Renewals</h3>
          <div className="space-y-2">
            {expiringSoon.map((cert, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-700 p-3 rounded">
                <div>
                  <span className="font-medium text-gray-200">{cert.title}</span>
                  <span className="text-sm text-gray-400 ml-2">- {cert.issuer}</span>
                </div>
                <span className="text-sm text-yellow-300 font-medium">Expires: {cert.expiryDate}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills Summary from Certifications */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-semibold text-gray-200 mb-4 text-center">🎯 Certified Skills Overview</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {[...new Set(certificates.flatMap((cert) => cert.skills))].map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm border border-gray-600">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CertificatesSection

"use client"

import { useState } from "react"
import laundry from "../assets/image/laundry.jpg"
import bookweb from "../assets/image/book.png"
import chatbot from "../assets/image/chatbot.jpg"
import tictac from "../assets/image/ttt.png"
import blood from "../assets/image/blood.png"
import virtual from "../assets/image/virtual.jpg"
import emp from "../assets/image/empimage.jpeg"

import roomrentimg from "../assets/image/roomrentimg.png"
import hospitalimg from "../assets/image/hospitalimg.png"
import movieimg from "../assets/image/movie.jpg"


const ProjectsSection = () => {
   const projects = [
    // {
    //   title: "E-Commerce Platform",
    //   description:
    //     "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
    //   image: "https://via.placeholder.com/400x250?text=E-Commerce+Platform",
    //   technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/yourusername/ecommerce",
    //   featured: true,
    //   category: "Full Stack",
    //   status: "Live",
    //   year: "2024",
    //   highlights: ["Payment Integration", "Admin Dashboard", "Real-time Analytics"],
    //   metrics: { users: "10K+", performance: "98%", uptime: "99.9%" },
    // },
    // {
    //   title: "Task Management App",
    //   description:
    //     "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    //   image: "https://via.placeholder.com/400x250?text=Task+Management",
    //   technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/yourusername/taskmanager",
    //   featured: true,
    //   category: "Web App",
    //   status: "Live",
    //   year: "2023",
    //   highlights: ["Real-time Collaboration", "Drag & Drop", "Team Management"],
    //   metrics: { teams: "500+", tasks: "50K+", satisfaction: "4.8/5" },
    // },
    // {
    //   title: "Weather Dashboard",
    //   description:
    //     "A responsive weather dashboard that displays current weather and forecasts with beautiful data visualizations.",
    //   image: "https://via.placeholder.com/400x250?text=Weather+Dashboard",
    //   technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/yourusername/weather",
    //   featured: false,
    //   category: "Frontend",
    //   status: "Live",
    //   year: "2023",
    //   highlights: ["Data Visualization", "Responsive Design", "API Integration"],
    //   metrics: { accuracy: "95%", cities: "1000+", requests: "1M+" },
    // },
    // {
    //   title: "Blog Platform",
    //   description: "A modern blog platform with markdown support, comment system, and SEO optimization.",
    //   image: "https://via.placeholder.com/400x250?text=Blog+Platform",
    //   technologies: ["Gatsby", "GraphQL", "Contentful", "Netlify"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/yourusername/blog",
    //   featured: false,
    //   category: "CMS",
    //   status: "Live",
    //   year: "2022",
    //   highlights: ["SEO Optimized", "Markdown Support", "Comment System"],
    //   metrics: { posts: "200+", views: "100K+", speed: "95/100" },
    // },
    // {
    //   title: "AI Chat Assistant",
    //   description:
    //     "An intelligent chat assistant powered by machine learning with natural language processing capabilities.",
    //   image: "https://via.placeholder.com/400x250?text=AI+Chat+Assistant",
    //   technologies: ["Python", "TensorFlow", "FastAPI", "React", "WebSocket"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/yourusername/ai-chat",
    //   featured: true,
    //   category: "AI/ML",
    //   status: "Beta",
    //   year: "2024",
    //   highlights: ["Natural Language Processing", "Real-time Chat", "Machine Learning"],
    //   metrics: { accuracy: "92%", responses: "10K+", languages: "5" },
    // },
    // {
    //   title: "Crypto Portfolio Tracker",
    //   description:
    //     "A comprehensive cryptocurrency portfolio tracking application with real-time price updates and analytics.",
    //   image: "https://via.placeholder.com/400x250?text=Crypto+Tracker",
    //   technologies: ["React Native", "Node.js", "Redis", "CoinGecko API", "Chart.js"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/yourusername/crypto-tracker",
    //   featured: false,
    //   category: "Mobile",
    //   status: "Live",
    //   year: "2023",
    //   highlights: ["Real-time Prices", "Portfolio Analytics", "Mobile App"],
    //   metrics: { users: "5K+", coins: "500+", updates: "Real-time" },
    // },
    {
      title: "Laundry Service Website",
      description:
        "A platform for booking laundry services with delivery tracking and admin management. Includes email notifications and feedback system.",
      image: laundry,
      technologies: ["React.js", "Tailwind CSS", "Servlet", "JSP", "MySQL", "JDBC"],
      liveUrl: "https://example.com/laundry",
      githubUrl: "https://github.com/harshpatle10/Laundry-Service-Web-Full-Stack-.git",
      featured: true,
      live: false,
      category: "Full Stack",
      status: "Live",
      year: "2025",
      highlights: ["Booking & Delivery", "Admin Management", "Email Notifications"],
      metrics: { orders: "2K+", uptime: "99.8%", customers: "1K+" },
    },
    {
      title: "Room & Property Finder",
      description:
        "A responsive app for viewing and contacting rental property listings. Built with modern UI and clean experience using Vite and Tailwind.",
      image: roomrentimg,
      technologies: ["React.js", "Tailwind CSS"],
      liveUrl: "https://example.com/room-finder",
      githubUrl: "https://github.com/yourusername/room-property-finder",
      featured: true,
      live: false,
      category: "Full Stack",
      status: "Live",
      year: "2025",
      highlights: ["Responsive UI", "Builder Contact", "Clean UX"],
      metrics: { listings: "1K+", contacts: "500+", satisfaction: "4.9/5" },
    },
    {
      title: "Blood Sync Management System",
      description: "A Java Full Stack web app for managing blood donations, availability and requests.",
      image: blood,
      live: false,
      technologies: ["Java", "Servlet", "JSP", "MySQL"],
      liveUrl: "https://example.com/bloodsync",
      githubUrl: "https://github.com/harshpatle10/bloodsync_managementsystem.git",
      featured: false,
      category: "Full Stack",
      status: "Live",
      year: "2025",
      highlights: ["Blood Request", "Donor Info", "Inventory Management"],
      metrics: { donors: "500+", requests: "2K+", cities: "25" },
    },
    {
      title: "Hospital Management System",
      description: "Simple Java JDBC-based hospital system for managing patients and appointments.",
      image: hospitalimg,
      live: false,
      technologies: ["Java", "JDBC", "MySQL"],
      liveUrl: "https://example.com/hospital",
      githubUrl: "https://github.com/harshpatle10/Hospital_Management_System.git",
      featured: false,
      category: "Full Stack",
      status: "Live",
      year: "2024",
      highlights: ["Patient Record", "Appointments", "Doctor Info"],
      metrics: { patients: "1K+", doctors: "50+", uptime: "99%" },
    },
    {
      title: "Employee Management System",
      description: "Built using Spring Boot and JPA for managing employee records, roles, and salaries.",
      image: emp,
      live: false,
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "MySQL"],
      liveUrl: "https://example.com/employees",
      githubUrl: "https://github.com/yourusername/emp-management",
      featured: false,
      category: "Full Stack",
      status: "Live",
      year: "2025",
      highlights: ["CRUD", "JPA Repository", "REST APIs"],
      metrics: { employees: "500+", uptime: "99.9%", feedback: "4.7/5" },
    },
    {
      title: "Virtual Assistant Website",
      description: "A smart voice-controlled virtual assistant website built using JavaScript, HTML, and CSS. It supports speech recognition and synthesis to perform actions like searching the web, playing music, and navigating between pages. Integrated with backend logic and database, it offers both voice and text command functionalities for an interactive user experience",
      image: virtual,
     live: true,

      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://virtualassistantwebsite.netlify.app/",
      githubUrl: "https://github.com/harshpatle10/Virtual_Assistant_Website.git",
      featured: false,
      category: "Frontend",
      status: "Live",
      year: "2024",
      highlights: ["Voice Commands", "Web Navigation", "Assistant UI"],
      metrics: { commands: "100+", users: "1K+", accuracy: "90%" },
    },
    {
      title: "Movie Search App",
      description: "Simple movie search website using HTML, CSS, JS, and public APIs.",
      image: movieimg,
           live: true,

      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://virtualassistantwebsite.netlify.app/movie/movie",
      githubUrl: "https://github.com/harshpatle10/Virtual_Assistant_Website.git",
      featured: false,
      category: "Frontend",
      status: "Live",
      
      year: "2024",
      highlights: ["Search Movies", "Public API", "Responsive"],
      metrics: { movies: "10K+", requests: "500K+", speed: "Fast" },
    },
    {
      title: "Chat Bot",
      description: "An interactive chatbot that allows users to communicate using text or voice, providing smart responses and performing tasks like search, navigation, and more.",
      image: chatbot,
           live: true,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://virtualassistantwebsite.netlify.app/chatgpt/chatgpt_main",
      githubUrl: "https://github.com/harshpatle10/Virtual_Assistant_Website.git",
      featured: false,
      category: "Frontend",
      status: "Live",
      year: "2024",
      highlights: ["Simple Chat UI", "Basic Logic", "Frontend Only"],
      metrics: { chats: "50K+", languages: "1", demo: "Yes" },
    },
    {
      title: "Tic Tac Toe Game",
  description: "A classic two-player Tic Tac Toe built with a 3×3 grid, automatic win detection, score tracking, and a quick reset so you can play again instantly.",
      image: tictac,
           live: true,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://tttbyhp.netlify.app/",
      githubUrl: "https://github.com/harshpatle10/TickTackToo_Game.git",
      featured: false,
      category: "Frontend",
      status: "Live",
      year: "2023",
      highlights: ["2 Player Mode", "Simple Design", "Fast Play"],
      metrics: { games: "1K+", scoreSaved: "No", fun: "Yes" },
    },
    {
      title: "Free Service Website",
           live: true,
  description: "A platform offering users access to various services at no cost, including tools, resources, and support features to enhance accessibility and convenience.",      image: bookweb,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://notewavecourse.netlify.app/",
      githubUrl: "https://github.com/harshpatle10/FreeCourseWebsite.git",
      featured: false,
      category: "Frontend",
      status: "Live",
      year: "2023",
      highlights: ["Free Booking", "Service Info", "Simple UI"],
      metrics: { services: "200+", visitors: "5K+", loadTime: "1s" },
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Web App", "AI/ML", "Mobile", "CMS"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case "Live":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Beta":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Development":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
        <div className="relative p-8 text-center bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions and technical expertise across various domains
          </p>
        </div>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 text-center hover:border-blue-500 transition-all duration-300">
          <div className="text-2xl font-bold text-blue-400 mb-1">{projects.length}</div>
          <div className="text-sm text-gray-400">Total Projects</div>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 text-center hover:border-green-500 transition-all duration-300">
          <div className="text-2xl font-bold text-green-400 mb-1">{projects.filter((p) => p.featured).length}</div>
          <div className="text-sm text-gray-400">Featured</div>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 text-center hover:border-purple-500 transition-all duration-300">
          <div className="text-2xl font-bold text-purple-400 mb-1">{categories.length - 1}</div>
          <div className="text-sm text-gray-400">Categories</div>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 text-center hover:border-orange-500 transition-all duration-300">
          <div className="text-2xl font-bold text-orange-400 mb-1">
            {projects.filter((p) => p.status === "Live").length}
          </div>
          <div className="text-sm text-gray-400">Live Projects</div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-600 hover:border-blue-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className={`group relative bg-gray-900 rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 ${
              project.featured
                ? "border-blue-500/50 shadow-lg shadow-blue-500/20"
                : "border-gray-700 hover:border-blue-500/50"
            }`}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full flex items-center gap-1">
                  ⭐ Featured
                </span>
              </div>
            )}

            {/* Status Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>

            <div className="lg:flex">
              {/* Project Image */}
              <div className="lg:w-2/5 relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                {/* Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="px-2 py-1 bg-gray-800/80 rounded text-xs">{project.category}</span>
                    <span className="px-2 py-1 bg-gray-800/80 rounded text-xs">{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:w-3/5 p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                    <span className="text-yellow-500">✨</span>
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-xs border border-blue-500/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                    <span className="text-green-500">🛠️</span>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 border border-gray-600 text-gray-300 rounded-lg text-xs hover:bg-gray-700 hover:border-blue-500 hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Metrics */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                    <span className="text-purple-500">📊</span>
                    Metrics
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-lg font-bold text-white">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                {project.live && 
                  <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    🚀 Live Demo
                  </a>
                  }
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gray-800 border border-gray-600 text-gray-300 rounded-xl font-medium hover:bg-gray-700 hover:border-blue-500 hover:text-white transition-all duration-300 text-center transform hover:scale-105"
                  >
                    💻 View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${hoveredProject === index ? "opacity-100" : ""}`}
            ></div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
        <h3 className="text-2xl font-bold text-white mb-4">Interested in Working Together?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          I'm always excited to take on new challenges and create innovative solutions. Let's discuss your next project!
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://www.linkedin.com/in/harsh-patle-4252aa257/"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            💬 Get In Touch
          </a>
          <a
            href="https://github.com/harshpatle10"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-800 border border-gray-600 text-gray-300 rounded-xl font-medium hover:bg-gray-700 hover:border-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            🔗 View All Projects
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection

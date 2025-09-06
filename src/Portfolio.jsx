"use client"

import { useState } from "react"
import Sidebar from "./components/Sidebar"
import AboutSection from "./components/AboutSection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import CertificatesSection from "./components/CertificatesSection"
import ContactSection from "./components/ContactSection"
import ProblemSolvingSection from "./components/ProblemSolvingSection"
import ExperienceSection from "./Components/ExperienceSection"

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about")

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />
      case "skills":
        return <SkillsSection />
      case "projects":
        return <ProjectsSection />
      case "experience":
        return <ExperienceSection />
      case "certificates":
        return <CertificatesSection />
      case "problem-solving":
        return <ProblemSolvingSection />
      case "contact":
        return <ContactSection />
      default:
        return <AboutSection />
    }
  }

  return (
    <div className="flex min-h-screen bg-cyan-950">
      {/* Fixed Sidebar */}
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Content Area with proper margin for fixed sidebar */}
      <main className="flex-1 ml-0 md:ml-80 transition-all duration-300">
        <div className="p-6 md:p-8 min-h-screen">
          <div className="max-w-5xl mx-auto">{renderContent()}</div>
        </div>
      </main>
    </div>
  )
}

export default Portfolio

"use client"

import { useState } from "react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const contactInfo = [
    {
      label: "Email",
      value: "harshpatle99999@gmail.com",
      href: "mailto:harshpatle99999@gmail.com",
      icon: "✉️",
    },
    {
      label: "Phone",
      value: "+91 6264238985",
      href: "tel:+916264238985",
      icon: "📞",
    },
    {
      label: "Location",
      value: "Bhopal, Madhya Pradesh",
      href: "https://maps.google.com?q=Balaghat",
      icon: "📍",
    },
    {
      label: "GitHub",
      value: "github.com/harshpatle10",
      href: "https://github.com/harshpatle10",
      icon: "💻",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/harshpatle",
      href: "https://www.linkedin.com/in/harsh-patle-4252aa257/",
      icon: "🔗",
    },
    {
      label: "WhatsApp",
      value: "+91 6264238985",
      href: "https://wa.me/916264238985",
      icon: "💬",
    },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setSubmitMessage("Thank you for your message! I'll get back to you soon.")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitting(false)

      setTimeout(() => setSubmitMessage(""), 5000)
    }, 1000)
  }

  return (
    <div className="space-y-6 bg-gray-900 text-gray-200 p-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-500 mb-6"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Information */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

          <p className="text-gray-400 mb-6">
            I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to
            work together!
          </p>

          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-lg text-white">{info.icon}</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-blue-400 transition-colors"
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <h4 className="font-semibold text-white mb-3">Let's Connect</h4>
            <p className="text-gray-400 text-sm">
              Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from
              you. Let's create something amazing together!
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

          {submitMessage && (
            <div className="mb-4 p-3 bg-green-100 border border-green-300 text-green-700 rounded-md">
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-200"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project or just say hello!"
                rows={5}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical text-gray-200"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactSection

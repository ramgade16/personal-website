"use client"

import type React from "react"
import { useState } from "react"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import "./Contact.css"
// Import the image
import profilePic from "/images/Profile pic.png"

export default function Contact() {
  // State to keep track of form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Function to handle input changes and update state
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  // Form submit handler
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Prepare data to be sent in the request
    const data = new FormData()
    data.append("name", formData.name)
    data.append("email", formData.email)
    data.append("message", formData.message)
    data.append("access_key", "4fd31ba4-b4b8-448a-8659-3a94dd0c339b")

    const object = Object.fromEntries(data)
    const json = JSON.stringify(object)

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json())

    if (res.success) {
      console.log("Form submitted successfully:", res)
      // Clear the form if submission is successful
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } else {
      console.log("Form submission failed:", res)
    }
  }

  return (
    <div id="contact" className="contact-background">
      <div className="contact">
        <div className="contact-title">
          <h1>Contact Me</h1>
          <img src="/placeholder.svg" alt=""></img>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <div className="profile-image">
              <img src={profilePic || "/placeholder.svg"} alt="Profile" />
            </div>
            <p>Hey, Thanks for visiting my website!</p>
            <p>
              Please feel free to reach out regarding any internships, projects, research opportunities, or even just to
              connect and ask questions! My contact information is listed below.
            </p>
            <div className="contact-details">
              <div className="contact-detail">ramgade@umich.edu</div>
              <div className="contact-detail">256-334-1122</div>
              <div className="contact-detail">AL, United States</div>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ramshreyas-gade/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:ramgade@umich.edu">
                <FaEnvelope />
              </a>
              <a href="https://github.com/ramgade16" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="message">Write your message here</label>
            <textarea
              id="message"
              name="message"
              rows={8}
              placeholder="Enter your message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

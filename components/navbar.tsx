"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const sections = [
      "features",
      "services",
      "about",
      "contact",
    ]

    const handleScroll = () => {
      const threshold = window.innerHeight * 0.5;
      
      let newActiveSection = "";
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const sectionElement = document.getElementById(sectionId);
        
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom >= threshold) {
            newActiveSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(newActiveSection);
    }

    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              <span className="text-emerald-600">CRUCIBLE</span>
              <div className="text-sm font-normal text-gray-600 -mt-1">FINTECH</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="#features" 
              className={`font-medium transition-colors ${
                activeSection === "features" ? "text-emerald-600" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Why us
            </Link>
            <Link 
              href="#services" 
              className={`font-medium transition-colors ${
                activeSection === "services" ? "text-emerald-600" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Solutions
            </Link>
            <Link 
              href="#about" 
              className={`font-medium transition-colors ${
                activeSection === "about" ? "text-emerald-600" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className={`font-medium transition-colors ${
                activeSection === "contact" ? "text-emerald-600" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Available now</span>
            </div>
            <Button className="bg-gray-900 text-white hover:bg-gray-800 px-6">Get started</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

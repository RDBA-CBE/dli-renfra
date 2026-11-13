"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Technologies & Crane",
      href: "",
      dropdown: [
        { label: "Technologies", href: "/technologies" },
        { label: "Crane Models", href: "/crane-models" },
      ],
    },
     { label: "Why DLI", href: "/why-dli" },
     { label: "Solutions", href: "/solutions" },
     { label: "Lifting Solutions", href: "/lifting-solutions" },
    { label: "Projects", href: "/projects" },
    { label: "IMS @ DLI", href: "/ims@dli" },
    { label: "News & Media", href: "/news" },
    { label: "Career", href: "/career" },
    { label: "Corporate", href: "/corporate" },
  ]

  const isActive = (href) => pathname === href

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo-new.svg"
                alt="Dli Logo"
                width={120}
                height={50}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6 relative">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onMouseEnter={() => item.dropdown && setIsDropdownOpen(true)}
                  onMouseLeave={() => item.dropdown && setIsDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`text-sm transition-colors ${
                      isActive(item.href)
                        ? "font-bold bg-gradient-to-r from-[#3AB257] to-[#329ACD] bg-clip-text text-transparent"
                        : "text-[#293E52] hover:text-teal-600 font-medium"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {/* Show dropdown icon only for Technologies & Crane */}
                  {item.label === "Technologies & Crane" && (
                    <ChevronDown
                      className={`w-4 h-4 text-[#293E52] transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180 text-teal-600" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Dropdown (Desktop) */}
                {item.dropdown && (
                  <div
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className={`absolute left-0 mt-0 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200 ${
                      isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    <div className="flex flex-col py-2 w-52">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`xl:hidden fixed top-20 right-0 w-full bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <div className="pb-4 flex flex-col gap-2 pt-4">
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col">
                <div
                  className="flex justify-between items-center px-4 py-2"
                  onClick={() =>
                    item.dropdown
                      ? setIsDropdownOpen(isDropdownOpen === item.label ? false : item.label)
                      : setIsOpen(false)
                  }
                >
                  <Link
                    href={item.href}
                    className={`text-sm font-medium ${
                      isActive(item.href)
                        ? "font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent"
                        : "text-gray-700 hover:text-teal-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isDropdownOpen === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.dropdown && isDropdownOpen === item.label && (
                  <div className="flex flex-col pl-8">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setIsOpen(false)}
                        className="py-2 text-sm text-gray-600 hover:text-teal-600"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}


"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileDropdown, setMobileDropdown] = useState(null)

  const pathname = usePathname()

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      dropdown: [
        { label: "About DLI", href: "/about" },
        { label: "Infrastructure", href: "/infrastructure-facilities" },
        { label: "Sustainability", href: "/sustainability" },
      ],
    },
    {
      label: "Technologies & Crane",
      dropdown: [
        { label: "Technologies", href: "/technologies" },
        { label: "Crane Models", href: "/crane-models" },
      ],
    },
    { label: "Why DLI", href: "/why-dli" },
    { label: "Solutions", href: "/solutions" },
    { label: "Lifting Technology", href: "/lifting-solutions" },
    { label: "Projects", href: "/projects" },
    { label: "IMS @ DLI", href: "/ims@dli" },
    { label: "News & Media", href: "/news" },
    { label: "Career", href: "/career" },
    { label: "Corporate", href: "/corporate" },
  ]

  const isActive = (item) => {
    if (item.dropdown) {
      return item.dropdown.some((subItem) => pathname === subItem.href)
    }

    return pathname === item.href
  }

  const activeClass =
    "font-bold bg-gradient-to-r from-[#3AB257] to-[#329ACD] bg-clip-text text-transparent"

  const inactiveClass =
    "text-[#293E52] hover:text-teal-600 font-medium"

  const closeMobileMenu = () => {
    setIsOpen(false)
    setMobileDropdown(null)
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-new.svg"
              alt="DLI Logo"
              width={120}
              height={50}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative h-20 flex items-center"
                onMouseEnter={() => {
                  setActiveDropdown(item.dropdown ? item.label : null)
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >

                {item.dropdown ? (
                  <button
                    type="button"
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label
                      )
                    }
                    className={`flex items-center gap-1 text-sm transition-colors ${
                      isActive(item) ? activeClass : inactiveClass
                    }`}
                  >
                    {item.label}

                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label
                          ? "rotate-180 text-teal-600"
                          : "text-[#293E52]"
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm transition-colors ${
                      isActive(item) ? activeClass : inactiveClass
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {item.dropdown && (
                  <div
                    className={`absolute top-full left-0 w-52 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200 ${
                      activeDropdown === item.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="flex flex-col py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setActiveDropdown(null)}
                          className={`px-4 py-2 text-sm transition-colors hover:bg-gray-100 hover:text-teal-600 ${
                            pathname === subItem.href
                              ? "text-teal-600 font-semibold bg-gray-50"
                              : "text-gray-700"
                          }`}
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
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => {
                setIsOpen(!isOpen)
                setMobileDropdown(null)
              }}
              className="text-gray-700 p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Navigation */}
        <div
          className={`xl:hidden fixed top-20 left-0 right-0 bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out max-h-[calc(100dvh-5rem)] overflow-y-auto ${
            isOpen
              ? "translate-x-0 opacity-100 visible"
              : "translate-x-full opacity-0 invisible pointer-events-none"
          }`}
        >
          <div className="pb-4 flex flex-col gap-2 pt-4">
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col">

                {item.dropdown ? (
                  <button
                    type="button"
                    aria-expanded={mobileDropdown === item.label}
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === item.label ? null : item.label
                      )
                    }
                    className={`flex justify-between items-center px-4 py-2 text-sm w-full text-left ${
                      isActive(item) ? activeClass : inactiveClass
                    }`}
                  >
                    {item.label}

                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileDropdown === item.label
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`px-4 py-2 text-sm ${
                      isActive(item) ? activeClass : inactiveClass
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mobile Dropdown */}
                {item.dropdown && mobileDropdown === item.label && (
                  <div className="flex flex-col pl-8 bg-gray-50">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={closeMobileMenu}
                        className={`py-3 text-sm hover:text-teal-600 ${
                          pathname === subItem.href
                            ? "text-teal-600 font-semibold"
                            : "text-gray-600"
                        }`}
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

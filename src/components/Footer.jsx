"use client"
import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "./ui/button"
import { axiosGet, axiosPost } from "@/lib/api"

const additionalSolutionLinks = [
  {
    title: "Conventional Crane Rentals",
    href: "/solutions/crane-rentals",
  },
  {
    title: "GWO Training",
    href: "/solutions/gwo-training",
  },
  {
    title: "Turnkey Installation Solutions",
    href: "/solutions/turnkey-installation-solutions",
  },
]

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [solutions, setSolutions] = useState([])
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")


  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const response = await axiosGet.get(
          "masters/solutions/get/?web_sts=1&active_status=1&order_type=asc&order_field=created_date"
        )
        const solutionItems = response.data?.data

        if (!Array.isArray(solutionItems)) {
          throw new Error("Unexpected solutions response")
        }

        setSolutions(
          solutionItems.filter(
            (solution) =>
              solution?.title?.trim() &&
              solution?.data_uniq_id &&
              solution.title.trim().toLowerCase() !== "crane rentals"
          )
        )
      } catch (error) {
        console.error("Footer solutions error:", error)
      }
    }

    fetchSolutions()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }


  const handleSubscription = async (e) => {
  e.preventDefault()
  setLoading(true)
  setErrorMsg("")
  setSubscribed(false)

  try {
    const payload = { email }

    const response = await axiosPost.post(
      "/masters/subscription/?web_sts=1",
      JSON.stringify(payload)
    )

    // 🔴 IMPORTANT CHECK
    if (response.data?.action === "success") {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    } else {
      // Backend error but axios didn't throw
      setErrorMsg(response.data?.message || "Subscription failed")
    }

  } catch (error) {
    // Network / real exception
    if (error.response?.data?.message) {
      const msg = error.response.data.message
      setErrorMsg(typeof msg === "object" ? Object.values(msg)[0] : msg)
    } else {
      setErrorMsg("Server not reachable")
    }
  } finally {
    setLoading(false)
  }
}

  const additionalSolutionTitles = new Set(
    additionalSolutionLinks.map((solution) => solution.title.trim().toLowerCase())
  )
  const solutionLinks = [
    ...solutions
      .filter(
        (solution) =>
          !additionalSolutionTitles.has(solution.title.trim().toLowerCase())
      )
      .map((solution) => ({
        key: solution.data_uniq_id,
        title: solution.title,
        href: `/solution-details?id=${encodeURIComponent(solution.data_uniq_id)}`,
      })),
    ...additionalSolutionLinks.map((solution) => ({
      ...solution,
      key: solution.href,
    })),
  ]



  return (
    <footer className="relative w-full bg-white mt-48">
      {/* Eco-themed skyline SVG background */}
      {/* <div className="relative w-full h-24 bg-white overflow-hidden">

  <img
    src="/images/footer-main.gif" 
    alt="Renewable Energy Illustration"
    className="absolute -top-2 right-28 h-full object-contain"
  />
</div> */}

      {/* Curved dark blue background */}
      <div className="relative w-full bg-[#293E52] pb-8 ">
            <div
  className="absolute top-0 -left-20 h-full w-[500px] bg-no-repeat bg-left bg-contain opacity-100 hidden lg:block z-0 pointer-events-none"
  style={{
    backgroundImage: "url('/images/Footer-tall.gif')",
  }}
></div>

        {/* Curved top edge */}
        {/* <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-20 -translate-y-full"
        >
          <path d="M 0 50 Q 300 0, 600 0 T 1200 50 L 1200 100 L 0 100 Z" className="fill-[#293E52]" />
        </svg> */}

        {/* Mobile image - visible only on mobile (< 768px) */}
        <img
          src="/images/mobile-footer.gif"
          alt="Curved Top"
          className="absolute top-1 left-0 w-full md:hidden -translate-y-full"
        />

        {/* Tablet image - visible only on tablet (768px - 1023px) */}
        <img
          src="/images/footer2.gif"
          alt="Curved Top"
          className="absolute top-1 left-0 w-full hidden md:block lg:hidden -translate-y-full"
        />

        {/* Desktop image - visible only on desktop (1024px and above) */}
        <img
          src="/images/desk.gif"
          alt="Curved Top"
          className="absolute top-1 left-0 w-full hidden lg:block -translate-y-full"
        />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
            {/* Left Section - Logo and Social */}
            <div className="md:col-span-2 flex flex-col items-start lg:ml-2">
              <div className="mb-4">
                {/* Logo Circle */}
                <div className="flex items-center ">
                  <div className="flex items-center">
                    <img src="/images/white-logo.svg" alt="Logo" className="w-40 h-40 object-contain" />
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-8 ">
                <a href="#" className="transition-colors">
                  <img
                    src="/images/facebook.svg"
                    alt="Facebook"
                    className="w-5 h-5 hover:brightness-125 hover:scale-110 transition-transform duration-200 object-contain"
                  />
                </a>
                <a href="#" className="transition-colors">
                  <img
                    src="/images/whatsapp.svg"
                    alt="Message"
                    className="w-5 h-5 hover:brightness-125 hover:scale-110 transition-transform duration-200"
                  />
                </a>
                <a href="#" className="transition-colors">
                  <img
                    src="/images/insta.svg"
                    alt="Instagram"
                    className="w-5 h-5 hover:brightness-125 hover:scale-110 transition-transform duration-200"
                  />
                </a>
                <a href="#" className="transition-colors">
                  <img
                    src="/images/youtube.svg"
                    alt="YouTube"
                    className="w-7 h-7 hover:brightness-125 hover:scale-110 transition-transform duration-200"
                  />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-white font-semibold mb-4">Quick Link</h4>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Solutions", href: "/solutions" },
                  { label: "Technologies", href: "/technologies" },
                  { label: "Crane-Models", href: "/crane-models" },
              

                  { label: "Projects", href: "/projects" },
                  { label: "IMS @ DLI", href: "/ims@dli" },
                  { label: "News & Media Page", href: "/news" },
                  { label: "Career", href: "/career" },
                  { label: "Corporate", href: "/corporate" },
                  { label: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white hover:text-green-400 transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Solution */}
            <div className="md:col-span-1">
              <h4 className="text-white font-semibold mb-4">Our Solution</h4>
              <ul className="space-y-2">
                {solutionLinks.map((solution) => (
                  <li key={solution.key}>
                    <a
                      href={solution.href}
                      className="text-white hover:text-green-400 transition-colors text-sm"
                    >
                      {solution.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="md:col-span-2">
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <div className="space-y-4">
                {/* Head Office */}
                <div className="flex flex-col  gap-3">
                  <div className="flex  gap-3">
                     <img src="/images/location.svg" alt="Head Office" className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">Head Office</p>
                    <p className="text-white text-sm">No: 2-7-88, Tenkasi Road, Elathur, Tenkasi - 627803, Tamil Nadu, India.</p>
                  </div>
                  </div>
                 
                  <div className="flex  gap-3">
                     <img src="/images/location.svg" alt="Head Office" className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">Corporate Office</p>
                    <p className="text-white text-sm">Indiqube Ocean Bay, 5th Floor,<br />
        A-19 & 20, SIDCO Thiru Vi Ka<br />
        Industrial Estate, Guindy,<br />
        Chennai - 600032,<br />
        Tamil Nadu, India.</p>
                  </div>
                  </div>
                </div>

                {/* Call Us */}
                <div className="flex gap-3">
                  <img src="/images/new-call.svg" alt="Call Us" className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-bold">Call Us</p>
                    <p className="text-white text-sm">
  <a href="tel:+919943115133">+91 99431 15133</a>
</p>
<p className="text-white text-sm">
  <a href="tel:+919965515165">+91 99655 15165</a>
</p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex gap-3">
                  <img src="/images/mail.svg" alt="Email Us" className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">Email Us</p>
                   <p className="text-white text-sm">
  <a href="mailto:admin@derricklifters.com">admin@derricklifters.com</a>
</p>
<p className="text-white text-sm">
  <a href="mailto:sm@derricklifters.com">sm@derricklifters.com</a>
</p>
                  </div> 
                </div>
              </div>
            </div>
            <div className="md:col-span-2 lg:col-span-2 flex flex-col justify-start">
              <h4 className="text-white font-semibold mb-2">Stay Connected with Us</h4>
              {/* <p className="text-gray-300 text-sm mb-4">Subscribe to our newsletter for latest updates and offers.</p> */}
              <form onSubmit={handleSubscription} className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 rounded bg-gray-200 text-gray-800 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 w-[120px] bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors text-sm"
                >
                  {subscribed ? "Subscribed!" : "Subscription"}
                </button>
                {errorMsg && (
                  <p className="text-red-600 text-sm mt-2">{errorMsg}</p>
                )}
              </form>
              {subscribed && <p className="text-green-400 text-xs mt-2">Thank you for subscribing!</p>}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-white text-sm lg:ml-2">
            <p>© 2025 - DLI</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="/terms&conditions" className="text-white transition-colors">
                Terms & Conditions
              </a>
              <span className="text-gray-600">|</span>
              <a href="/privacy-policy" className="text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-b from-[#329ACD] to-[#3AB257] hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  )
}

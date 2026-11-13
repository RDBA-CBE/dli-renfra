import { MapPin, Phone, Mail } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="flex flex-col justify-center space-y-8">
      {/* Header Section */}
      <div className="space-y-4">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#293E52]">Get in Touch with <br /> DLI</h1>
        <p className="text-sm sm:text-sm md:text-base lg:text-base text-[#293E52]">
          We'd love to hear from you! Whether you're looking for renewable energy solutions, partnership opportunities,
          or career information – our team is here to help. Reach out to us, and we'll get back to you shortly.
        </p>
      </div>

      {/* Contact Details */}
<div className="space-y-6">
  {/* Head Office */}
  <div className="flex gap-4">
    <div className="flex-shrink-0">
      <img
        src="/images/con-loc.png"
        alt="Location Icon"
        className="h-6 w-6 object-contain"
      />
    </div>
    <div>
      <h3 className="font-semibold text-[#293E52]">Head Office</h3>
      <p className="text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] text-muted-[#293E52]">
        No: 2-7-88, Tenkasi Road, Elathur, <br />
        Tenkasi - 627803, Tamil Nadu, India.
</p>
    </div>
  </div>

  {/* Call Us */}
  <div className="flex gap-4">
    <div className="flex-shrink-0">
      <img
        src="/images/con-call.png"
        alt="Phone Icon"
        className="h-6 w-6 object-contain"
      />
    </div>
    <div>
      <h3 className="font-semibold text-[#293E52]">Call Us</h3>
      <p className="text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] text-muted-[#293E52]">+91 99431 15133</p>
    </div>
  </div>

  {/* Email Us */}
  <div className="flex gap-4">
    <div className="flex-shrink-0">
      <img
        src="/images/con-mail.png"
        alt="Mail Icon"
        className="h-6 w-6 object-contain"
      />
    </div>
    <div>
      <h3 className="font-semibold text-[#293E52]">Email Us</h3>
      <p className="text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] text-muted-[#293E52]">support@gmail.com</p>
    </div>
  </div>
</div>

    </div>
  )
}
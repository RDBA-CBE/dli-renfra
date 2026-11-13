import { ContactForm } from "@/components/Contact-Form"
import { ContactFormSection } from "@/components/Contact-Form-Main"
import { ContactInfo } from "@/components/Contact-Info"
import MapMainContact from "@/components/Contact-Map"
import InnerBanner from "@/components/Inner-Banner"
export default function Contact() {
  return (
    <>
    <InnerBanner title="Contact" bgImage="/images/contact-banner.png" />
    
   
    <main className=" bg-background">
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Contact Information */}
<ContactInfo />
          {/* Right Column - Contact Form */}
<ContactFormSection />
        </div>
      </div>
    </main>

<MapMainContact />
     </>
  )
}

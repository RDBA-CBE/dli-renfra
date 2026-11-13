import { ContactForm } from "@/components/Contact-Form";
import { SectionAbout } from "@/components/Home-About";
import CareerSection from "@/components/Home-Career";
import SolutionsDli from "@/components/Home-Carousel";
import CarouselHomeSection from "@/components/Home-Carousel";
import WindTurbineGrid from "@/components/Home-Projects";
import TechSection from "@/components/Home-Technologies";
import { Navbar } from "@/components/Navbar";
import NewsHomeSection from "@/components/News-Media";
import NewsMedia from "@/components/News-Media";
import { TestimonialsSection } from "@/components/Testimonials";
import VideoBannerSection from "@/components/Video-Banner";
import ChooseUsSection from "@/components/Why-Us";
import Image from "next/image";

export default function Home() {
  return (
 <>
<VideoBannerSection />
<SectionAbout />
<SolutionsDli />
{/* <CarouselHomeSection /> */}
<ChooseUsSection />
<TechSection />
<WindTurbineGrid />
<NewsHomeSection />
<TestimonialsSection />
<CareerSection />
<ContactForm />

 </>
  );
}

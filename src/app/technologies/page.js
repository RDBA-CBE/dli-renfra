
import InnerBanner from "@/components/Inner-Banner";
import MapSection from "@/components/Map";
import ProjectsSection from "@/components/Projects";
import PatentedTechnologies from "@/components/Technologies";


export default function Technologies() {
  return (
<>

<InnerBanner title="Patented Technologies" bgImage="/images/tech-bg.png" />
{/* <ProjectsSection /> */}
<PatentedTechnologies/>
</>
  );
}

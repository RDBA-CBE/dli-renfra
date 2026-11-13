import CommitSection from "@/components/commitment";
import InnerBanner from "@/components/Inner-Banner";
import AboutLayout from "@/components/Main-About";
import ExecutiveMessageTabs from "@/components/Team-Message";
import TimelineSection from "@/components/Timeline";
import MissionVisionSection from "@/components/Vision";


export default function About() {
  return (
<>

<InnerBanner title="About" bgImage="/images/abt-bg.png" />
<AboutLayout />
<MissionVisionSection />
<TimelineSection />
<ExecutiveMessageTabs />
<CommitSection />

</>
  );
}

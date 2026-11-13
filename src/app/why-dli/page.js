import { CardGrid } from "@/components/Card-Grid";
import { WhyDerrick } from "@/components/Choose-Dli";
import InnovationSection from "@/components/Choose-Innovation";
import ChooseusMain from "@/components/Choose-Main";
import { DLiSection } from "@/components/Dli-Card";
import DifferentiatingFactor from "@/components/Factors";
import InnerBanner from "@/components/Inner-Banner";
import ChooseUsSection from "@/components/Why-Us";
import WhyChoose from "@/components/WhyChoose";

export default function ChooseSection() {
  return (
<>

<InnerBanner title="Why DLI?" bgImage="/images/choose-bg.svg" />
<ChooseusMain />
<WhyChoose/>
<InnovationSection />
<DLiSection />
<WhyDerrick />
<DifferentiatingFactor />
</>
  );
}

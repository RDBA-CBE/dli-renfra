// 
'use client'
import InnerBanner from "@/components/Inner-Banner";
import SolutionMainSection, { TabSolutionSection } from "@/components/Main-Solution";
import SolutionDetailPage from "@/components/SolutionDetailsPage";
import WTGInstaalationPage from "@/components/Wtg-Installation";


export default function Installation() {
  
  const title = "WTG Installation"
  return (
    <>
      <InnerBanner title={title} bgImage="/images/wtg-bg.svg" />
     <WTGInstaalationPage />
    </>
  );
}


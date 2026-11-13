// 
'use client'
import InnerBanner from "@/components/Inner-Banner";
import SolutionMainSection, { TabSolutionSection } from "@/components/Main-Solution";
import RefurbishmentPage from "@/components/Refurbishments";
import SolutionDetailPage from "@/components/SolutionDetailsPage";
import WTGInstaalationPage from "@/components/Wtg-Installation";


export default function Refurbish() {
  
  const title = "Refurbishment"
  return (
    <>
      <InnerBanner title={title} bgImage="/images/re-bg.svg" />
     <RefurbishmentPage />
    </>
  );
}


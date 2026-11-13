// 
'use client'
import InnerBanner from "@/components/Inner-Banner";
import SolutionMainSection, { TabSolutionSection } from "@/components/Main-Solution";
import RentalsPage from "@/components/Rentals";
import SolutionDetailPage from "@/components/SolutionDetailsPage";
import WTGInstaalationPage from "@/components/Wtg-Installation";


export default function Installation() {
  
  const title = "WTG Installation"
  return (
    <>
      <InnerBanner title={title} bgImage="/images/sol-banner.png" />
      <RentalsPage />
</>
  );
}


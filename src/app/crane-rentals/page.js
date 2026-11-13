// 
'use client'
import InnerBanner from "@/components/Inner-Banner";
import SolutionMainSection, { TabSolutionSection } from "@/components/Main-Solution";
import RefurbishmentPage from "@/components/Refurbishments";
import RentalsPage from "@/components/Rentals";
import SolutionDetailPage from "@/components/SolutionDetailsPage";
import WTGInstaalationPage from "@/components/Wtg-Installation";


export default function Rentals() {
  
  const title = "Crane Rentals"
  return (
    <>
      <InnerBanner title={title} bgImage="/images/break-bg.svg" />
   <RentalsPage />
    </>
  );
}


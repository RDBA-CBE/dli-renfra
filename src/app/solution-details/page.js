import { Suspense } from "react";
import SolutionDetailsPage from "@/components/SolutionDetailsPage";

export default function Page() {
  return (
    <Suspense fallback={<div className="py-10 text-center">Loading...</div>}>
      <SolutionDetailsPage />
    </Suspense>
  );
}


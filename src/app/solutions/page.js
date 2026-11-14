import InnerBanner from "@/components/Inner-Banner";
import { TabSolutionSection } from "@/components/Main-Solution";
import SolutionsPageList from "@/components/Solutions-List";

export default function Solution() {
  return (
    <>
      <InnerBanner title="Solutions" bgImage="/images/sol-bg.svg" />
      <TabSolutionSection />
      <SolutionsPageList />
    </>
  );
}

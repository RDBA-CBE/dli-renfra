"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { axiosGet, BASE_URL } from "@/lib/api";
import { IMG_ENDPOINT } from "@/lib/config";



export function TabSolutionSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabsData, setTabsData] = useState([]);
  const [tabContent, setTabContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const currentTab = tabsData[activeTab]; 
  console.log("TabsData:", tabsData);
  console.log("CurrentTab:", currentTab);
  console.log("tabcontent:",tabContent)
 

  
 
  const fetchTabsData = async () => {
    setLoading(true);
    try {
      
      const response = await axiosGet.get(
        "masters/solutions/get/?web_sts=1&active_status=1&order_type=asc&order_field=created_date"
      );
      const tabs = response.data.data;
      setTabsData(tabs);

      if (tabs.length > 0) {
        fetchContentData(tabs[0].data_uniq_id);
      }
    } catch (err) {
      console.error("Tabs Error:", err);
    }finally {
      setLoading(false);
    }
  };

  // Load content for specific solution
  const fetchContentData = async (data_uniq_id) => {
    if (!data_uniq_id) return;

    setLoading(true);
    try {
      const response = await axiosGet.get(
        `masters/solutions/content/get/?solution_id=${data_uniq_id}&web_sts=1`
      );

      const contentObj = response.data.data?.[0]?.data;
      setTabContent(contentObj || null);
    } catch (err) {
      console.error("Content Error:", err);
      setTabContent(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTabsData();
  }, []);

  useEffect(() => {
    if (currentTab?.data_uniq_id) {
      fetchContentData(currentTab.data_uniq_id);
    }
  }, [activeTab]);


  useEffect(() => {
  console.log("FULL tabContent:", JSON.stringify(tabContent, null, 2));
}, [tabContent]);


  

  if (loading) {
    return (
      <div className="w-full py-20 text-center text-[#293E52] text-lg font-semibold">
        Loading...
      </div>
    );
  }

  // ------------------------- NO TABS FOUND ------------------------
  if (!loading && tabsData.length === 0) {
    return (
      <div className="w-full py-20 text-center text-[#293E52] text-lg font-semibold">
        No Solutions Found
      </div>
    );
  }

  

  
  const mainDesc =
    tabContent?.content?.[0]?.description || "";

    
  const mainImage = tabContent?.image?.[0]?.file_path
    ? tabContent.image[0].file_path
    : currentTab?.image;

  console.log(tabContent, "tabContent");


  const stats = [
    {
      img: "/images/s1.png",
      number: tabContent?.stats?.[0]?.stats_data?.[0]?.value,
      label: tabContent?.stats?.[0]?.stats_data?.[0]?.label,
    },
    {
      img: "/images/s2.png",
      number: tabContent?.stats?.[0]?.stats_data?.[1]?.value,
      label: tabContent?.stats?.[0]?.stats_data?.[1]?.label,
    },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left side: Tabs */}
        <div className="flex flex-col gap-4 justify-center">
          {tabsData.map((tab, index) => (
            <button
              key={tab.data_uniq_id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-4 p-10 rounded-lg border transition-all duration-300 w-full ${
                activeTab === index
                  ? "border bg-[#EDEDED] text-[#293E52] scale-105"
                  : "border-gray-200 bg-white text-[#293E52] hover:scale-105"
              }`}
              aria-label={`Switch to ${tab.title}`}
            >
              <img src={BASE_URL+tab.image_path} alt={tab.title} className="w-10 h-10 flex-shrink-0" />
              <span className="text-base sm:text-base md:text-lg lg:text-xl font-semibold">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Right side: Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.data_uniq_id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col gap-6 border border-[#329ACD] p-6 rounded-lg"
          >
            {/* Title and External Link */}
            <div className="flex items-center gap-3">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#293E52]">{currentTab.title}</h2>
              {currentTab?.data_uniq_id && (
                <Link href={`/solution-details?id=${currentTab.data_uniq_id}`}>
                  <img src="/images/export.svg" className="w-5 h-5 cursor-pointer" />
                </Link>
              )}
            </div>

            {/* Image */}
            <img
              src={`${BASE_URL}${currentTab.card_image_path}`}
              alt={currentTab.title}
              className="w-full h-auto rounded-lg object-cover"
            />

            {/* Full Description with 'Show more' link */}
            <div className="text-sm sm:text-sm md:text-base lg:text-base text-[#293E52] leading-relaxed">
              <p className="text-[#293E52] mb-4">
                {mainDesc.replace(/<[^>]+>/g, "").slice(0, 550) + "..."}
                
            
                <Link
                  href={`/solution-details?id=${currentTab.data_uniq_id}`}
                  className="text-[#329ACD] font-semibold hover:underline"
                >
                  Show more
                </Link>
              </p>
            </div>


    <div className="flex flex-col sm:flex-row gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 flex-1 bg-gray-50 rounded-lg"
                >
                  <img
                    src={stat.img}
                    alt={stat.label}
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <div className="text-xl lg:text-2xl font-bold text-[#293E52]">
                      {stat.number}
                    </div>
                    <div className="text-sm text-[#293E52]">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

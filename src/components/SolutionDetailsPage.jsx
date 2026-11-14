"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowLeft, ArrowRight, CircleCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { axiosGet, BASE_URL } from "@/lib/api"
import { useSearchParams } from "next/navigation";
import InnerBannersol from "./Inner-bannersol"

// INTRO
function IntroSection({ text }) {
  if (!text) return null;

  const [isExpanded, setIsExpanded] = useState(false);
  const previewLength = 200;

  return (
    <div className="mb-8 px-4">
      <p className="text-sm md:text-base text-[#293E52] leading-relaxed text-center max-w-4xl mx-auto">
        <span className="md:hidden">
          {isExpanded ? text : `${text.slice(0, previewLength)}...`}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#329ACD] font-semibold ml-1 hover:underline"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </span>

        <span className="hidden md:inline">{text}</span>
      </p>
    </div>
  );
}

function VideoSection({ url }) {
  if (!url) return null;

  const embed = url.includes("watch?v=")
    ? url.replace("watch?v=", "embed/")
    : url;

  return (
    <div className="md:mb-12 mb-6">
      <div className="relative w-full bg-gray-900 rounded-lg overflow-hidden h-64 md:h-116">
        <iframe src={embed} className="w-full h-full" allowFullScreen></iframe>
      </div>
    </div>
  );
}

const LONG_TEXT_LIMIT = 60; // characters


function extractHTMLParts(html) {
  const temp = document.createElement("div");
  temp.innerHTML = html;

  const blocks = [];
  const bulletPoints = [];

  let reachedList = false;

  Array.from(temp.children).forEach((el) => {
    const tag = el.tagName.toLowerCase();

    // Stop collecting blocks once UL is found
    if (tag === "ul") {
      reachedList = true;

      el.querySelectorAll("li").forEach((li) => {
        const text = li.textContent.trim();
        if (text) bulletPoints.push(text);
      });
      return;
    }

    // Collect text blocks BEFORE list
    if (!reachedList && ["p", "h1", "h2", "h3"].includes(tag)) {
      const html = el.innerHTML.trim();
      const text = el.textContent.trim();

      
      if (text) {
        blocks.push({ tag, html });
      }

    }
  });

  return { blocks, bulletPoints };
}


function decodeHTML(html) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value;
}

function TwoColumnSection({ data = [] }) {
  if (!Array.isArray(data)) data = [];

  const isTwoColumn = data.length === 2;
  const isSingle = data.length === 1;


  return (
    <div className={`grid gap-10 ${isTwoColumn ? "md:grid-cols-2" : "grid-cols-1"}`}>
      {data.map((item, index) => {

        const decoded = decodeHTML(item.description);
        const { blocks, bulletPoints } = extractHTMLParts(decoded);

        return (
          <div key={index} >

            {/* IMAGE */}
            {item.image && (
              <div className="bg-gray-100 rounded-lg overflow-hidden h-64 sm:h-80">
                <img
                  src={item.image}
                  alt="Two Column Image"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* TWO COLUMN MODE */}
            {isTwoColumn && (
              <>
                {blocks.map((item, i) => {
                  if (item.tag === "h3") {
                    return (
                      <h3
                        key={i}
                        className="text-lg font-semibold text-[#293E52]"
                        dangerouslySetInnerHTML={{ __html: item.html }}
                      />
                    );
                  }

                  return (
                    <p
                      key={i}
                      className="text-sm text-[#293E52] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.html }}
                    />
                  );
                })}

                

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {bulletPoints.map((point, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <img src="/images/check.svg" className="w-4 h-4" />
                      <span className="text-sm text-[#293E52]">{point}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

          
{isSingle && (
  <>
    {/* TEXT CONTENT */}
    {blocks.map((item, i) => {
      if (item.tag === "h1")
        return <h1 key={i} className="text-2xl font-bold mb-2" dangerouslySetInnerHTML={{ __html: item.html }} />;
      if (item.tag === "h2")
        return <h2 key={i} className="text-xl font-bold mb-2" dangerouslySetInnerHTML={{ __html: item.html }} />;
      if (item.tag === "h3")
        return <h3 key={i} className="text-lg font-semibold mb-2" dangerouslySetInnerHTML={{ __html: item.html }} />;
      return <p key={i} className="text-sm leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: item.html }} />;
    })}

    {/* SMART LIST */}
    {bulletPoints.length > 0 && (() => {
      const hasLongPoint = bulletPoints.some(
        (point) => point.length > LONG_TEXT_LIMIT
      );

      const gridCols = hasLongPoint
        ? "grid-cols-1 md:grid-cols-2"
        : "grid-cols-2 md:grid-cols-4";

      return (
        <div className={`grid ${gridCols} gap-4`}>
          {bulletPoints.map((point, i) => (
            <div key={i} className="flex items-start gap-2">
              <img src="/images/check.svg" className="w-4 h-4 mt-1" />
              <span className="text-sm text-[#293E52] leading-relaxed">
                {point}
              </span>
            </div>
          ))}
        </div>
      );
    })()}
  </>
)}



          </div>
        );
      })}
    </div>
  );
}



// PROJECTS SECTION
function ProjectsSection({ projects }) {

  return (
    <div className="mb-10">
      <h2 className="text-lg md:text-2xl font-bold mb-6 text-[#293E52] flex items-center gap-3">
        Projects <img src="/images/export.svg" className="w-5" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-100 rounded-md overflow-hidden h-64">
            <img
              src={BASE_URL + p.image_path}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const installationMethodology = [
  {
    title: "Site Planning",
    description:
      "Our team manages all aspects of site assessment and planning to ensure optimal wind farm installation and maximum energy output.",
  },
  {
    title: "Material Inspection",
    description:
      "We conduct thorough inspection and testing to ensure all materials meet required quality and compliance standards.",
  },
  {
    title: "Unloading",
    description:
      "Safe and efficient unloading of all WTG components at the storage yard.",
  },
  {
    title: "Mechanical Erection",
    description:
      "Installation of all types of WTG towers, including lattice and tubular towers.",
  },
  {
    title: "Electro-Mechanical Activity",
    description:
      "Complete execution of all electro-mechanical activities required for WTG installation.",
  },
  {
    title: "Quality Auditing",
    description:
      "Punch-point checks, inspections, and final quality verification to ensure error-free project completion.",
  },
];

const installationMethodologyImages = [
  { src: "/images/new/ins-1.jfif", alt: "Wind turbine blade installation" },
  { src: "/images/new/ins-2.jfif", alt: "Wind turbine installation work" },
  { src: "/images/new/ins-3.jfif", alt: "Wind turbine tower erection" },
  { src: "/images/new/ins-4.jfif", alt: "Wind turbine installation site" },
];

function InstallationMethodologySection() {
  return (
    <section className="my-12 rounded-xl bg-[#F6F6F6] px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-2xl font-bold text-[#293E52] sm:text-3xl">
        Installation Methodology
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {installationMethodology.map((step, index) => (
          <article
            key={step.title}
            className="rounded-lg border border-gray-200 bg-white p-5"
          >
            <div className="mb-3 flex items-center gap-2 text-[#329ACD]">
              <CircleCheck className="h-5 w-5 shrink-0 text-[#3AB257]" aria-hidden="true" />
              <span className="text-sm font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#293E52]">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#293E52] sm:text-base">
              {step.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {installationMethodologyImages.map((image) => (
          <div
            key={image.src}
            className="relative h-36 overflow-hidden rounded-lg sm:h-60"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}



export default function SolutionDetailC() {
  const searchParams = useSearchParams();
  const solutionId = searchParams.get("id");

  const [solution, setSolution] = useState(null);
  const [orderedSections, setOrderedSections] = useState([]);
  const [relatedSolutions, setRelatedSolutions] = useState([]);
  const [allSolutions, setAllSolutions] = useState([]);

  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
const [projectData, setProjectData] = useState([]);
 const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
  

  const fetchProject = async () => {
    axiosGet
      .get(`masters/projects/get/?web_sts=1`)
      .then((response) => {
        setProjectData(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  
  useEffect(() => {
    fetchProject();
  }, []);

  // -----------------------------------------
  // RESPONSIVE SLIDER
  // -----------------------------------------
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // -----------------------------------------
  // FETCH SOLUTIONS LIST
  // -----------------------------------------
  const fetchSolutionsList = async () => {
    try {
      const res = await axiosGet.get("masters/solutions/get/?web_sts=1");
      const data = res.data.data;
      setAllSolutions(data);
    } catch (err) {
      console.error("Solutions List Error:", err);
    }
  };

  useEffect(() => {
    fetchSolutionsList();
  }, []);


  // -----------------------------------------
  // LOAD SOLUTION CONTENT
  // -----------------------------------------
  const loadSolution = async (id) => {
  setLoading(true);
  setError(false);

  try {
    const res = await axiosGet.get(
      `/masters/solutions/content/get/?solution_id=${id}&web_sts=1`
    );

    const root = res.data.data?.[0];
    if (!root) {
      setError(true);
      setLoading(false);
      setSolution(null);
      setOrderedSections([]);
      return;
    }

    const content = root.data;
    if (!content) {
      setNoData(true);
      setSolution(null);
      setOrderedSections([]);
      return;
    }

    const sections = [];

    // CONTENT
    content.content?.forEach((item) =>
      sections.push({
        type: "content",
        position: Number(item.position),
        html: item.description,
      })
    );

    // VIDEO
    content.video?.forEach((item) =>
      sections.push({
        type: "video",
        position: Number(item.position),
        url: item.url,
      })
    );

    // IMAGE
    content.image?.forEach((item) =>
      sections.push({
        type: "image",
        position: Number(item.position),
        src: BASE_URL + item.file_path,
      })
    );

    // TWO COLUMN
    if (content.twocolumn?.length) {
      content.twocolumn.forEach((block) => {
        const arr = block.two_column_data || [];

        const data = arr.map((item) => ({
          image: item.file_path ? BASE_URL + item.file_path : "",
          description: item.description,
          sub_position: Number(item.sub_position || 1),
        }));

        sections.push({
          type: "twocolumn",
          position: Number(block.position),
          data: data.sort((a, b) => a.sub_position - b.sub_position),
        });
      });
    }

    // SORT SECTIONS
    sections.sort((a, b) => a.position - b.position);

    // GET BANNER FROM SOLUTION MASTER API
    const master = allSolutions.find((s) => s.data_uniq_id === id);

    const heroImage =
      master?.banner_image_path?.trim()
        ? BASE_URL + master.banner_image_path
        : "/images/sol-bg.png";

    setSolution({
      title: root.solution_name,
      innerBannerImage: heroImage,
    });
    console.log("heroImage:",heroImage)

    setOrderedSections(sections);
  } catch (err) {
    console.error("Load Error:", err);
    setError(true);
  } finally {
    setLoading(false);
  }
};


useEffect(() => {
  if (solutionId && allSolutions.length > 0) {
    loadSolution(solutionId);
  }
}, [solutionId, allSolutions]);


  // -----------------------------------------
  // RELATED SOLUTIONS
  // -----------------------------------------
useEffect(() => {
  if (!allSolutions.length || !solutionId) return;

  const loadRelatedSolutions = async () => {
    const filtered = allSolutions
      .filter((item) => item.data_uniq_id !== solutionId)
      .slice(0, 3);

    const finalCards = [];

    for (const sol of filtered) {
      try {
        // Fetch content API for each related solution
        const res = await axiosGet.get(
          `masters/solutions/content/get/?solution_id=${sol.data_uniq_id}&web_sts=1`
        );

        const desc =
          res.data?.data?.[0]?.data?.content?.[0]?.description ||
          "No description available";

        finalCards.push({
          imgSrc: sol.image_path ? BASE_URL + sol.image_path : "/images/default.png",
          subtitle: sol.title,
          description: desc, // <-- correct HTML description
          link: `/solutions-details?id=${sol.data_uniq_id}`,
        });
      } catch (error) {
        console.error("Related solution content error:", error);
      }
    }

    setRelatedSolutions(finalCards);
  };

  loadRelatedSolutions();
}, [allSolutions, solutionId]);

 
  
// GLOBAL LOADING
if (loading) {
  return (
    <div className="w-full py-20 text-center text-[#293E52] text-lg font-semibold">
      Loading...
    </div>
  );
}

// API FAILED OR EMPTY DATA
if (error || !solution) {
  return (
    <div className="w-full py-20 text-center text-[#293E52] text-lg font-semibold">
      No Data Found
    </div>
  );
}

const isNewWtgInstallation = solution.title
  ?.trim()
  .toLowerCase()
  .startsWith("new wtg installation");

// EMPTY SECTIONS
if (orderedSections.length === 0) {
  return (
    <>
      <InnerBannersol
        title={solution?.title}
        bgImage={solution?.innerBannerImage}
      />
      {isNewWtgInstallation ? (
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <InstallationMethodologySection />
        </div>
      ) : (
        <div className="w-full py-20 text-center text-[#293E52] text-lg font-semibold">
          No Content Available
        </div>
      )}
    </>
  );
}

  
  const renderSection = (sec, i) => {
if (sec.type === "content") {
  const temp = document.createElement("div");
  temp.innerHTML = sec.html;

  const nodes = Array.from(temp.children);

  return (
    <div key={i} className="py-3 px-4 sm:px-6 lg:px-8 mx-4 sm:mx-6 lg:mx-8">
      {nodes.map((node, idx) => {
        const tag = node.tagName.toLowerCase();

          if (
    (tag === "p" && !node.textContent.trim()) ||
    tag === "br"
  ) {
    return null;
  }

  
if (tag === "h1")
  return (
    <h1
      key={idx}
      className="text-2xl font-bold text-[#293E52] mb-2"
      dangerouslySetInnerHTML={{ __html: node.innerHTML }}
    />
  );

// H2
if (tag === "h2")
  return (
    <h2
      key={idx}
      className="text-xl font-bold text-[#293E52] mb-2"
      dangerouslySetInnerHTML={{ __html: node.innerHTML }}
    />
  );

// H3
if (tag === "h3")
  return (
    <h3
      key={idx}
      className="text-lg font-semibold text-[#293E52] mb-2"
      dangerouslySetInnerHTML={{ __html: node.innerHTML }}
    />
  );

// PARAGRAPH
if (tag === "p")
  return (
    <p
      key={idx}
      className="text-sm md:text-base text-[#293E52] leading-relaxed mb-3"
      dangerouslySetInnerHTML={{ __html: node.innerHTML }}
    />
  );

        // ✅ BULLET LIST (1 × 2)
       if (tag === "ul") {
  const points = Array.from(node.querySelectorAll("li"))
    .map(li => li.textContent.trim())
    .filter(Boolean);

  return (
    <div
      key={idx}
      className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 mt-4"
    >
      {points.map((point, pIdx) => (
        <div key={pIdx} className="flex items-start gap-2">
          <img src="/images/check.svg" className="w-4 h-4 mt-1" />
          <span className="text-sm text-[#293E52] leading-relaxed">
            {point}
          </span>
        </div>
      ))}
    </div>
  );
}


        // ✅ FALLBACK (render anything else safely)
        return (
          <div
            key={idx}
            dangerouslySetInnerHTML={{ __html: node.outerHTML }}
          />
        );
      })}
    </div>
  );
}


    if (sec.type === "video")
      return <VideoSection key={i} url={sec.url} />;

    if (sec.type === "image")
      return (
        <div key={i} className="py-8">
          <img src={sec.src} className="w-full rounded-lg" />
        </div>
      );

    if (sec.type === "twocolumn")
      return (
        
        <TwoColumnSection key={i} data={sec.data} />
      );
  };


   return (
    <>
    <InnerBannersol
      title={solution.title}
      bgImage={solution.innerBannerImage}
    />
      
      <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
       

      {/* ALL CONTENT SECTIONS */}
      {orderedSections.map((sec, i) => renderSection(sec, i))}

      {isNewWtgInstallation && <InstallationMethodologySection />}

      {projectData.length > 0 ? (
        <div className="mt-12">
        <ProjectsSection projects={projectData} />
      </div>
      ) : (
        <div className="text-center py-10 text-[#293E52]">No Projects Found</div>
      )}


      {/* RELATED SOLUTIONS */}
      {relatedSolutions.length > 0 && (
          <div className="bg-[#F6F6F6]">
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-left mb-8 text-[#1A202C]">
                Related Solutions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedSolutions.map((card, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <Image
                        src={card.imgSrc}
                        alt={card.subtitle}
                        width={48}
                        height={48}
                        className="w-10 sm:w-12 h-10 sm:h-12 object-contain"
                      />
                      <img src="/images/export.svg" alt="export" className="w-5 h-5"/>
                      
                    </div>
                    <p className="text-base sm:text-lg font-semibold text-[#293E52] mb-3">
                      {card.subtitle}
                    </p>
                    <p
                      className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-4"
                      dangerouslySetInnerHTML={{ __html: card.description }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      

      {/* BACK BUTTON */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[#293E52] text-[#293E52] rounded-full font-semibold hover:bg-[#293E52] hover:text-white transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Go Back to Solutions
        </Link>
      </div>
    </section>

    </>
    
  );
}

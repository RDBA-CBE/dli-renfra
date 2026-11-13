"use client"

import { useState,useEffect } from "react";
import { axiosGet,BASE_URL } from "@/lib/api";

const processItems = [
  {
    imgSrc: "/images/abt6.svg",
    number: "40% - 30%",
    title: "Reduction in Cost ",
  },
  {
    imgSrc: "/images/abt5.svg",
    number: "Upto 30 Tons",
    title: "Winch Lifting Range",
  },
  {
    imgSrc: "/images/abt3.svg",
    number: "1,735",
    title: "Major Components Positioned",
  },
  {
    imgSrc: "/images/abt4.svg",
    number: "706,630+ MT ",
    title: "Co2e Carbon Emissions",
  },
]

export function ProcessGrid() {

  
const [solutionsCard,setSolutionsCard] = useState([])
  
      const fetchData = async () => {
    
        axiosGet
          .get(
            `masters/about/get/?web_sts=1&is_home=1&active_status=1 `
          )
          .then((response) => {
            setSolutionsCard(response.data.data);
    
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };
      useEffect(() => {
        fetchData();
      }, []);


      
  return (
    <div className="w-full grid grid-cols-2 border border-gray-300 rounded-lg">
      {solutionsCard.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center gap-4 p-6 text-center md:p-8 
          ${index === 0 || index === 1 ? "border-b border-gray-300" : ""} 
          ${index % 2 === 0 ? "border-r border-gray-300" : ""}`}
        >
          {/* Image */}
          <div>
            <img
              src={BASE_URL+item.image_path}
              alt={item.title}
              className="w-14 h-14 md:w-18 md:h-18 object-contain"
            />
          </div>

          {/* Number */}
          <div className="text-2xl md:text-3xl font-bold text-foreground">
            {item.title}
          </div>

          {/* Title */}
          <h3 className="text-sm md:text-base font-semibold text-foreground">
            {item.value}
          </h3>
        </div>
      ))}
    </div>
  )
}

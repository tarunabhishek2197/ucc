import React from "react";
import Slider from "react-slick";
import './Section.css';
import { useState } from 'react'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Section = (props) => {
  const [sliderRef, setSliderRef] = useState(null)
  const sliderSettings = {
   
    infinite: true,
    
    slidesToShow: 12,
    
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
       breakpoint: 400,
       settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
       }
    }]

  }
  const data = [
    { id: 1, name: "Great for groups" },
    { id: 2, name: "Family-friendly" },
    { id: 3, name: "Animals" },
    { id: 4, name: "Arts & writing" },
    { id: 5, name: "Baking" },
    { id: 6, name: "Cooking" },
    { id: 7, name: "Dance" },
    { id: 8, name: "Drinks" },
    { id: 9, name: "Entainment" },
    { id: 10, name: "Fitness" },
    { id: 11, name: "History & Culture" },
    { id: 12, name: "Magic" },
    { id: 13, name: "Music" },
    { id: 14, name: "Social impact" },
    { id: 15, name: "Wellness" },
    { id: 16, name: "Olmpians & Paralymians" },
    { id: 17, name: "Designed for accessibility" },
  ];
  
  return (
    <div>
    
    <div className="filter_line">
            <button>Dates</button>
            <button>Group size</button>
            <button>More filters</button>
            <div className="line"></div>
            </div>
            <div className="filters">
            <button style={{marginLeft:'106em'}} onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        
    <Slider className="sliders" ref={setSliderRef}  {...sliderSettings}>
    {data.map((user) => (
        <button className="btn">{user.name}</button>
      ))}
      </Slider>
      <button style={{marginLeft:'110em',marginTop:'-20px'}} onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      </div>
    
  </div>
  );
};
export default Section;


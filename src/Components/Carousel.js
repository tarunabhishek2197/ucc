import { useState } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Carousel.css';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const hotelCards = [
    {
      imageSrc:
        'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2340325-media_library/original/599c584e-f401-4f67-958a-18277ee7dd10.png?im_w=320',
      title: '*486(578).Poland',
      description: 'Murder Mystery Escape Room Game-Perfect for Halloween',
      pricingText: 'From ₹1,304',
      
    },
    {
      imageSrc:
        'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2422459-media_library/original/8262d6c7-f0dc-45f0-9610-53f6577cc380.jpeg?im_w=480',
      title: '*4.62(120). France',
      description: "'From Paris with Laughs' The Scavenger Hunt",
      pricingText: 'From ₹1,148',
      
    },
    {
      imageSrc:
        'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1692296-media_library/original/052772ea-d821-4d3b-891c-35bef67ede0c.jpeg?im_w=480',
      title: '*4.92(2,323).Poland',
      description: 'Solve the Mystery Escape Room, also with Halloween Specials',
      pricingText: 'From ₹1,304',
    
    },

    {
      imageSrc:
        'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1718920-media_library/original/ca228931-6da0-4f13-96ec-a4079eaeb6c1.jpg?im_w=480',
      title: '*4.91(2,595).Spain',
      description: "'No Spain no Game' The Fabulous Game",
      pricingText: 'From ₹1,312',
         
      
    },
    {
        imageSrc:
          'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1674019-poster/original/661972cb-2d95-4614-a6e8-a5099ff390db.jpeg?im_w=480',
        title: '*4.98(1287). United States',
        description: 'A Sandwich Masterclass with a Pro',
        pricingText: 'From ₹1,399',
    
      },
      {
        imageSrc:
          'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1891122-media_library/original/2dc36d8d-cb1e-4817-ac1c-a5382981fc8a.jpeg?im_w=480',
        title: '*4.91(150). Japan',
        description: 'Virtual Mt Fuji Climbing - English',
        pricingText: 'From ₹893/person',
    
      },
      {
        imageSrc:
          'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2340325-media_library/original/599c584e-f401-4f67-958a-18277ee7dd10.png?im_w=320',
        title: '*486(578).Poland',
        description: 'Murder Mystery Escape Room Game-Perfect for Halloween',
        pricingText: 'From ₹1,304',
        
      },
      {
        imageSrc:
          'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2422459-media_library/original/8262d6c7-f0dc-45f0-9610-53f6577cc380.jpeg?im_w=480',
        title: '*4.62(120). France',
        description: "'From Paris with Laughs' The Scavenger Hunt",
        pricingText: 'From ₹1,148',
        
      },
      {
        imageSrc:
          'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1692296-media_library/original/052772ea-d821-4d3b-891c-35bef67ede0c.jpeg?im_w=480',
        title: '*4.92(2,323).Poland',
        description: 'Solve the Mystery Escape Room, also with Halloween Specials',
        pricingText: 'From ₹1,304',
      
      },
  
      {
        imageSrc:
          'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1718920-media_library/original/ca228931-6da0-4f13-96ec-a4079eaeb6c1.jpg?im_w=480',
        title: '*4.91(2,595).Spain',
        description: "'No Spain no Game' The Fabulous Game",
        pricingText: 'From ₹1,312',
           
        
      },
      {
          imageSrc:
            'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1674019-poster/original/661972cb-2d95-4614-a6e8-a5099ff390db.jpeg?im_w=480',
          title: '*4.98(1287). United States',
          description: 'A Sandwich Masterclass with a Pro',
          pricingText: 'From ₹1,399',
      
        },
        {
          imageSrc:
            'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1891122-media_library/original/2dc36d8d-cb1e-4817-ac1c-a5382981fc8a.jpeg?im_w=480',
          title: '*4.91(150). Japan',
          description: 'Virtual Mt Fuji Climbing - English',
          pricingText: 'From ₹893/person',
      
        },
        
  ]

  return (
    <div className='content3'>
      <div className='controls3'>
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
        <br/>
      </div>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {hotelCards.map((card, index) => (
          <div key={index} className='card3'>
            <img src={card.imageSrc} alt={card.title} className='card-image3' />
            <div className='text-info3'>
              <div className='card-header3'>
                <h2 style={{fontSize:'17px', fontWeight:'lighter'}}>{card.title}</h2><br/>
              </div>
              <p>{card.description}</p>
              <span>{card.pricingText}</span>/person
              
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
  )
}
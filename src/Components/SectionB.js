import React from "react";

import './SectionB.css';
import Section from './Section';

  function SectionB() {
    const Card = (props) => (
        <div className="card">
          <img src={ props.imgUrl } 
            alt={ props.alt || 'Image' } />
          <div className="card-content">
            <h2>{ props.title }</h2>
            <p className="content">{ props.content }</p>
            <button className="button">Show all</button>
          </div>
          
        </div>
      );
      
      const CardContainer = (props) => (
        <div className="cards-container" >
          {
            props.cards.map((card) => (
              <Card  title={ card.title } imgUrl={ card.imgUrl } content={card.content} id={card.id}/> 
            ))
          }
        </div>
      );



      const cardsData = [
        {id: 1, title: 'Collection', content: 'Most Popular around the world', imgUrl: 'https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=720'},
        {id: 2, title: 'Collection', content: 'Great for team', imgUrl: '	https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=720'},
        {id: 3, title: 'Collection', content: 'Fun for the family', imgUrl: '	https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=720'},
        
      ]
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
  
      return(

        <div className="container" style={{height:'35rem'}}>
          <h1 style={{marginLeft:'5vmin', color:'black' }}>
            New this week 
          </h1>
        <div>
          <div>
            
       
      </div>
          <CardContainer cards={ cardsData } />
         
            
          </div>
          <Section/>
          
        </div>
      );
    
  }
  
  export default SectionB;
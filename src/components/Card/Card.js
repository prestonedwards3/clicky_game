import React from "react";
import '../Card/Card.css'


const Card = (props) => {
return (
      
      <div className="card-body col-lg-4" >
      <img src={props.img} alt="celeb" onClick={props.click}/>
      </div>
    
)};



export default Card;
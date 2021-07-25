import React from 'react';
import './card.css';
const Card = (props) =>{
  return(
    <div className='card'>
        <img src={props.image} />
        <h3>{props.value}</h3>
        <h4>{props.value1}</h4>
    </div>
  );
}
export default Card;
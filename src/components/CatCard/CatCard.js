import React from "react";
import "./CatCard.css";

const CatCard = props => (
  <div className="card">
    <div className="img-container">
      <button className ="btn" onClick = {()=>props.shuffleArray(props.id)} >
        <img alt={props.name} src={props.image} />
      </button>
    </div>

  </div>
);

export default CatCard;

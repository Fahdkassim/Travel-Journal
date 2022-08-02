import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card-container">
      <img className="card-image" src={props.item.imageUrl} />
      <div className="card-info-container">
        <div className="card-header">
          <img
            className="card-location-icon margin-zero"
            src="src/assets/locationIcon.png"
          />
          <p className="card-location margin-zero">{props.item.location}</p>
          <a href={props.item.googleMapsUrl} className="card-maps-link margin-zero">
            <p>View on Google Maps</p>
          </a>
        </div>
        <h1 className="card-title margin-zero">{props.item.title}</h1>
        <p className="card-period margin-zero">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="card-description margin-zero">{props.item.description}</p>
      </div>
    </div>
  );
}

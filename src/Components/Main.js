import React from 'react';

export default function Main(props) {
  return (
    <div className="main-container">
      <div className="main-image">
        <img src={props.item.imageUrl} />
      </div>
      <div className="content">
        <p><span><i className="fa fa-solid fa-location-dot"></i></span>{props.item.location}  <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a></p>
        <h2>{props.item.title}</h2>
        <p>{props.item.startDate} - {props.item.endDate}</p>
        <p>{props.item.description}</p>
      </div>
    </div>
  )
}
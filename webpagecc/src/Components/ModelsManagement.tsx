import React from "react";
import { Model } from "../Models/Model.model";

const Models : React.FC<Model> = ({id,name,portfolio,photos, bookingInfo}) =>{
  return(
     <div>
     <header>Models</header>
     <p>Our models are the best because they use the best</p>
     <section>
      <header>{name}</header>
      {photos.map((photo,index)=>(
       <img key={index} src={photo} alt={name}/>
      ))}
     </section>
     <section>
      <p>Porfolio: {portfolio}</p>
      <p>Booking information: {bookingInfo}</p>
     </section>
     </div>
  )
}

export default Models
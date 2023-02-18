import React, { useState, useEffect } from "react";
import NameCard from "./nameCard.jsx";
import ImageHolder from "./imageHolder";

const Card = (props) => { 
    return ( 
        <section className="card">
            <ImageHolder imageUrl = { props.imageUrl } /> 
            <NameCard name = {props.name}/>
        </section>
    )
}

export default Card; 
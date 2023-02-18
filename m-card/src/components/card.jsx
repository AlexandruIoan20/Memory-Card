import React, { useState, useEffect } from "react";
import NameCard from "./nameCard.jsx";
import ImageHolder from "./imageHolder";

const Card = (props) => { 
    return ( 
        <React.StrictMode>
            <ImageHolder imageUrl = { props.imageUrl } /> 
            <NameCard name = {props.name}/>
        </React.StrictMode>
    )
}

export default Card; 
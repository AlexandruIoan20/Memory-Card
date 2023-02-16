import React, { useState, useEffect } from "react";
import NameCard from "./nameCard.jsx";
import ImageHolder from "./imageHolder";

const Card = (props) => { 
    const [imageUrl, setImageUrl ] = useState("");

    useEffect ( () => { 
        setImageUrl("https://picsum.photos/200/300");

        return () => setImageUrl("");
    })

    return ( 
        <section className="card">
            <ImageHolder imageUrl = { imageUrl } /> 
            <NameCard name = {props.name}/>
        </section>
    )
}

export default Card; 
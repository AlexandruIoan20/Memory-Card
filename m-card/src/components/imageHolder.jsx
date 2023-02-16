import React, { useState, useEffect } from "react";

const ImageHolder = (props) => { 
    return( 
        <section>
            <img src={ props.imageSrc } className = "image" alt="image" />
        </section>
    )
};

export default ImageHolder;
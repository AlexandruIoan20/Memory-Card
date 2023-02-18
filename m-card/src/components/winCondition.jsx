import React, { useState, useEffect } from "react";

const WinCondition = (props) => { 
    const [win, setWin] = useState(false);
    const [timesHit, setTimesHit] = useState (0);

    const { pressed } = props;

    useEffect ( () => { 
        if(pressed === true) setWin(true);
        if (win === false) { 
            setTimesHit(timesHit + 1);
        }
    })

    return( () => { 
        if(win === false) { 
            <section className="in-game">
                Choose an image
            </section>
        }
        else { 
            <section className="in-game">You lost</section>
        }
    })
}

export default WinCondition;
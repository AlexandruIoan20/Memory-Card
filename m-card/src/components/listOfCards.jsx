import React, { useState, useEffect } from "react";
import Card from "./card.jsx";

const useCardList = (length) => {
    const [cardList, setCardList] = useState([]);

    useEffect( () => { 
        let arr = [];

        for(let i = 0; i < length; i++) 
            arr[i] = { name: i, imageUrl: "https://picsum.photos/200/300", ID: i }

        setCardList (arr);
    }, []);

    return cardList;

};

const CardList = (props) => {
    const cardList = useCardList(props.length);

    return (
        <section className="card-list">
            { cardList.map (card => {
                return (
                <article key={card.ID}>
                    <Card name = {card.name} imageUrl= {card.imageUrl}/>
                </article>
                )
            })}
        </section>
    )
}

export default CardList;
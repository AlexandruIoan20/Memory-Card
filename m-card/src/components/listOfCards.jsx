import React, { useState, useEffect } from "react";
import Card from "./card.jsx";

const useCardList = (length) => {
    const [cardList, setCardList] = useState([]);

    useEffect( () => { 
        /* Create card list */
        let arr = [];

        for(let i = 0; i < length; i++) 
            arr[i] = { name: i, selected: false, imageUrl: "https://picsum.photos/200/300", ID: i }

        setCardList (arr);

        /* Select Card Functionality */
        console.log(arr);
        const verifyCard = (HTMLCard) => { 
            const index = parseInt(HTMLCard.classList[0]);
            if(arr[index].selected == false) 
                return true; 

            else
                return false;
        };

        const selectCard = (HTMLCard) => { 
            let verified = verifyCard(HTMLCard);

            if(verified) { 
                const index = parseInt(HTMLCard.classList[0]);

                arr[index].selected = true; 

                setCardList(arr);
                console.log("verified");
            }
        }

        /* Event Listener */
        document.addEventListener("click", (e) => { 
            let button = e.target;

            if (button.tagName === "IMG") { 
                button = e.target.parentNode;
                button = button.parentNode;
            }
            else { 
                button = e.target.parentNode;
            }

            if(button.tagName === "ARTICLE") { 
                selectCard(button);
            }
        }); 

        return () => { 
            document.removeEventListener('remove', selectCard);
        }
    }, []);

    return cardList;
};

const CardList = (props) => {
    const cardList = useCardList(props.length);

    return (
        <section className="card-list">
            { cardList.map (card => {
                return (
                <article key={card.ID} className = {`${card.ID} card`}>
                    <Card name = {card.name} imageUrl= {card.imageUrl}/>
                </article>
                )
            })}
        </section>
    )
}

export default CardList;
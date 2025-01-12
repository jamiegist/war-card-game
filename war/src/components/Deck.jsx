import { useState, useEffect } from "react";
import Card from "./Card";

function Deck() {
    const [cards, setCards] = useState([]);

    useEffect(() => {

    }, []);

    return (
        <div className="deck">
            {cards.map((card) => (
                <Card key={card.id} rank={card.rank} suit={card.suit} />
            ))}
        </div>
    );
}
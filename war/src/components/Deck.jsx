import { useState, useEffect } from "react";
import Card from "./Card";

function Deck() {
    const suits = ["♥", "♦", "♠", "♣"];
    const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

    const generateDeck = () => {
        let deck = [];
        suits.forEach(suit -> {
            ranks.forEach(rank => {
                deck.push({ suit, rank });
            });
        });
        return deck;
    };

    const Deck = () => {
        const deck = generateDeck();

    return (
        <div className="deck">
            {deck.map((card, index) => {
                <Card key={index} suit={card.suit} rank={card.rank} />
            })}
        </div>
    );
}
}

export default Deck;
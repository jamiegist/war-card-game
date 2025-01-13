import { useState } from "react";
import Deck from '../Deck';
import Player from './Player';

export default function Gameboard() {
    const [player1Hand, setPlayer1Hand] = useState([]);
    const [player2Hand, setPlayer2Hand] = useState([]);

    function playRound() {
        const player1Card = player1Hand.shift();
        const player2Card = player2Hand.shift();

        if (player1Card.rank > player2Card.rank) {
            // Player 1 wins
        } else if (player2Card.rank > player1Card.rank) {
            // Player 2 wins
        } else {
            // War
        }
    }

    // Comparing cards

    return (
        <div className="game">
            <Player hand={player1Hand} />
            <Player hand={player2Hand} />

            <button>Draw</button>
        </div>
    );
}
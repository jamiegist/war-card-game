function Player({ hand }) {
    return (
        <div className="player">
            {hand.map((card) => (
                <Card key={card.id} rank={card.rank} suit={card.suit} />
            ))}
        </div>
    );
}
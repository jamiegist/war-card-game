export default function Card({ rank, suit }) {
    return (
        <div className="card">
            {rank} of {suit}
        </div>
    );
}
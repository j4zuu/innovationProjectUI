import "../styles.css";

const TempCard = ({ temp }: { temp: number }) => { // Destructure the 'temp' prop
    return (
        <div className="tempBoxStyle">{temp}</div>
    )
}

export default TempCard;
import React from "react";

const TempCard = ({ temp, name }: { temp: number | string; name: string}) => {
    return <div className="tempBoxStyle">
        <div>{name}</div>
        {temp !== undefined ? (
            <p>No temperature</p>
        ) : (
            <div>Temp: {temp}°C</div>
        )}
    </div>;
};

TempCard.defaultProps = {
    temp: 0,
};


export default TempCard;
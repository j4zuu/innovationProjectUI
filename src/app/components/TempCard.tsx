import React from "react";

const TempCard = ({ temp, name }: { temp: number | string; name: string}) => {
    return <button className='formButton customButton mainButton'>
        <a href="/main/devices"><div>{name}</div></a>
    </button>;
};

TempCard.defaultProps = {
    temp: 0,
};


export default TempCard;
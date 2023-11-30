import React from "react";

const DevicesCard = ({ id }: { id: string }) => {
    return (
    
        <div>
          <button className='formButton customButton mainButton'>
            <div>Device: {id}</div>
          </button>
        </div>
    );
  };
  

DevicesCard.defaultProps = {
    temp: 0,
};


export default DevicesCard;
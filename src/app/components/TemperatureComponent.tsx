import React, { useState, SyntheticEvent } from 'react';
import "../styles.css";
import { useRouter } from "next/navigation";



const TemperatureComponent: React.FC = () => {
    const [temperature, setTemperature] = useState(25);
   

  return (
    <div className="temperature-container">
      <h2>Temperature</h2>
      <div className="temperature">
        {temperature}&deg;C
      </div>
    </div>
  );  
};

export default TemperatureComponent;
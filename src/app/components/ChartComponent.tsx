import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { fetchTemperatureData } from '../auth/apiUtils';
import moment from 'moment';
import "../styles.css";

interface DataPoint {
  timestamp: string;
  value: number;
  field: string;
}

const ChartComponent: React.FC = () => {
  const [temperatureData, setTemperatureData] = useState<DataPoint[]>([]);
  const [humidityData, setHumidityData] = useState<DataPoint[]>([]);
  const [lightLevelData, setLightLevelData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [intervalMinutes, setIntervalMinutes] = useState<number>(30);

  const fetchData = async () => {
    try {
      const allData = await fetchTemperatureData();

      const tempData = allData.filter((point) => point.field === 'temperature');
      const humData = allData.filter((point) => point.field === 'humidity');
      const lightData = allData.filter((point) => point.field === 'light_level');

      setTemperatureData(tempData);
      setHumidityData(humData);
      setLightLevelData(lightData);
    } catch (error) {
      setError('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const organizeData = () => {
    const chartData: DataPoint[] = [];
    let currentTimestamp = moment(temperatureData[0]?.timestamp);
    const endTime = moment(temperatureData[temperatureData.length - 1]?.timestamp);

    while (currentTimestamp.isBefore(endTime)) {
      const tempPoint = temperatureData.find((point) =>
        moment(point.timestamp).isSameOrAfter(currentTimestamp) &&
        moment(point.timestamp).isBefore(currentTimestamp.clone().add(intervalMinutes, 'minutes'))
      );

      const humPoint = humidityData.find((point) =>
        moment(point.timestamp).isSameOrAfter(currentTimestamp) &&
        moment(point.timestamp).isBefore(currentTimestamp.clone().add(intervalMinutes, 'minutes'))
      );

      const lightPoint = lightLevelData.find((point) =>
        moment(point.timestamp).isSameOrAfter(currentTimestamp) &&
        moment(point.timestamp).isBefore(currentTimestamp.clone().add(intervalMinutes, 'minutes'))
      );

      if (tempPoint) {
        chartData.push({
          timestamp: currentTimestamp
            .minutes(Math.ceil(currentTimestamp.minutes() / 5) * 5) 
            .format('DD.MM.YYYY HH:mm'),
          temperature: tempPoint.value,
          humidity: humPoint ? humPoint.value : null,
          light_level: lightPoint ? lightPoint.value : null,
        });
      } else {
        chartData.push({
          timestamp: currentTimestamp
            .minutes(Math.ceil(currentTimestamp.minutes() / 5) * 5)
            .format('DD.MM.YYYY HH:mm'),
          temperature: null,
          humidity: null,
          light_level: null,
        });
      }

      currentTimestamp.add(intervalMinutes, 'minutes');
    }

    return chartData;
  };


return (
  <div style={{ margin: 'auto', textAlign: 'center' }}>
    <h2>Temperature, Humidity, and Light Level Chart</h2>
    <div className="interval-buttons">
      <p>Every: </p>
      <button
        className={`chartButton ${intervalMinutes === 10 ? 'selected' : ''}`}
        onClick={() => setIntervalMinutes(10)}
      >
        10 Minutes
      </button>
      <button
        className={`chartButton ${intervalMinutes === 30 ? 'selected' : ''}`}
        onClick={() => setIntervalMinutes(30)}
      >
        30 Minutes
      </button>
      <button
        className={`chartButton ${intervalMinutes === 60 ? 'selected' : ''}`}
        onClick={() => setIntervalMinutes(60)}
      >
        1 Hour
      </button>
    </div>
    {loading ? (
      <p>Loading chart...</p>
    ) : error ? (
      <p>{error}</p>
    ) : (
      <ResponsiveContainer width="90%" height={300}>
        <LineChart data={organizeData()}>
          <XAxis dataKey="timestamp" tickFormatter={(timestamp) => moment(timestamp, 'DD.MM.YYYY HH:mm').format('DD.MM.YYYY HH:mm')} />
          <YAxis />
          <CartesianGrid stroke="#bcbcbc" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#26577c" name="Temperature C°" />
          <Line type="monotone" dataKey="humidity" stroke="#e55604" name="Humidity (g.m-3)" />
          <Line type="monotone" dataKey="light_level" stroke="#202121" name="Light Level (lux)" />
        </LineChart>
      </ResponsiveContainer>
    )}
  </div>
);

};

export default ChartComponent;

import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { fetchDataWithToken, fetchTemperatureData } from '../auth/apiUtils';
import { getTokenFromStorage } from '../auth/auth';
import moment from 'moment';

interface DataPoint {
  timestamp: string;
  value: number;
  field: string;
}

const ChartComponent: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allData = await fetchTemperatureData();
        setData(allData);
      } catch (error) {
        setError('Error fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once after initial render

  // Slice the last 10 values for the chart
  const lastTenValues = data.slice(-10);

  // Extract timestamps and values for Recharts
  const chartData = lastTenValues.map((point) => ({
    timestamp: moment(point.timestamp).format('YYYY-MM-DD HH:mm:ss'),
    value: point.value,
  }));

  return (
    <div>
      <h2>Humidity Chart (Last 10 Values)</h2>
      {loading ? (
        <p>Loading chart...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <LineChart width={600} height={300} data={chartData}>
          <XAxis dataKey="timestamp" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      )}
    </div>
  );
};

export default ChartComponent;

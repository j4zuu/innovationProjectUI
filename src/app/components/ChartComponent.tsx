import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { fetchTemperatureData } from '../auth/apiUtils';
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
  }, []);

  const aggregatedData: { [timestamp: string]: { totalValue: number; count: number } } = {};
  data.forEach((point) => {
    const hourTimestamp = moment(point.timestamp).startOf('hour').format('YYYY-MM-DD HH:mm:ss');
    if (!aggregatedData[hourTimestamp]) {
      aggregatedData[hourTimestamp] = { totalValue: 0, count: 0 };
    }
    aggregatedData[hourTimestamp].totalValue += point.value;
    aggregatedData[hourTimestamp].count += 1;
  });

  const chartData = Object.entries(aggregatedData).map(([timestamp, { totalValue, count }]) => ({
    timestamp,
    value: count > 0 ? totalValue / count : 0,
  }));

  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
      <h2>Temperature Chart</h2>
      {loading ? (
        <p>Loading chart...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ResponsiveContainer width="90%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="timestamp" tickFormatter={(timestamp) => moment(timestamp).format('YYYY-MM-DD HH:mm')} />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Tooltip labelFormatter={(value) => moment(value).format('YYYY-MM-DD HH:mm')} />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>    
      )}
    </div>
  );
};

export default ChartComponent;

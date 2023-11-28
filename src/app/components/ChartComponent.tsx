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

  const uniqueHoursSet = new Set<string>();

  const filteredTemperatureData = data
    .filter((point) => point.field === 'temperature')
    .filter((point) => {
      const currentTimestamp = moment(point.timestamp);
      const hourString = currentTimestamp.format('YYYY-MM-DD HH:00');

      if (!uniqueHoursSet.has(hourString)) {
        uniqueHoursSet.add(hourString);
        return true;
      }
      return false;
    })
    // .slice(-30);

    const chartData = filteredTemperatureData.map((point) => ({
      timestamp: moment(point.timestamp).format('DD.MM.YYYY HH:00'),
      value: point.value,
    }));
    console.log(chartData);

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
            <XAxis dataKey="timestamp" tickFormatter={(timestamp) => moment(timestamp, 'DD.MM.YYYY HH:00').format('DD.MM.YYYY HH:00')} />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default ChartComponent;
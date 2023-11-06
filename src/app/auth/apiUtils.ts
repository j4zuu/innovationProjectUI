// apiUtils.ts
import { getBearerToken } from "./auth";

const apiUrl = 'https://sensec.dy.fi/rooms/1';

export const fetchDataWithToken = async (username: string, password: string) => {
  try {
    const token = await getBearerToken(username, password);

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };  

    const response = await fetch(apiUrl, requestOptions);

    if (response.ok) {
      const data = await response.json();
      console.log('Data fetched:', data);
      return data;
    } else {
      throw new Error('Data retrieval failed');
    }
  } catch (error) {
    console.error('Data retrieval error:', error);
    throw error;
  }
};

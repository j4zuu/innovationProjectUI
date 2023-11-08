// apiUtils.ts
import { getBearerToken } from "./auth";
import { getTokenFromStorage } from "./auth";
import variables from "@/app/variables";

const apiUrl = variables.mainURL + '/rooms';
const tempDataUrl = variables.mainURL + 'devices/1/data?start_date=-20d';

export const fetchDataWithToken = async () => {
  try {
    const token = await getTokenFromStorage();

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


export const fetchTemperatureData = async () => {
  try {
    const token = await getTokenFromStorage();

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };  

    const response = await fetch(tempDataUrl, requestOptions);

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

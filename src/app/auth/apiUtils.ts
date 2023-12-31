// apiUtils.ts
import { getBearerToken } from "./auth";
import { getTokenFromStorage } from "./auth";
import variables from "@/app/variables";

const apiUrl = variables.mainURL + '/rooms';
const tempDataUrl = variables.mainURL + 'devices/1/data';
const postRoomUrl = variables.mainURL + 'rooms'
const deviceURL = variables.mainURL + 'devices/'

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
}

export const postRoom = async (roomName: string) => {
  try {
    const token = await getTokenFromStorage();
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({name: roomName}),
    };

    const response = await fetch(postRoomUrl, requestOptions);

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

export const deleteDevice = async (deviceName: string) => {
  try {
    const token = await getTokenFromStorage();
    const requestOptions: RequestInit = {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };

    const response = await fetch(deviceURL + deviceName, requestOptions);

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

// Ei toimi :(
export const getDevices = async () => {
  try {
    const token = await getTokenFromStorage();
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };

    const response = await fetch(deviceURL, requestOptions);

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

export const postDevice = async (deviceName: string) => {
  try {
    const token = await getTokenFromStorage();
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };

    const response = await fetch(deviceURL, requestOptions);

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

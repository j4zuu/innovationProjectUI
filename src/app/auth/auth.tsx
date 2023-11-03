const loginApiUrl = 'https://sensec.dy.fi/auth/login';
const apiUrl = 'https://sensec.dy.fi/rooms/1';

export async function getBearerToken(username: string, password: string) {
  const loginData = {
    username: username,
    password: password,
  };

  try {
    const response = await fetch(loginApiUrl, {
      method: 'POST',
      headers: {   
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('API Response:', data);  
      const token = data.access_token;
      console.log('Bearer Token!:', token);
      return token;
      // Voit nyt käyttää tätä tokenia muihin pyyntöihin.
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    console.error('Login error:', error);
  }

}
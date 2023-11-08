import variables from "@/app/variables";

const loginApiUrl = variables.mainURL + '/auth/login';

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
      localStorage.setItem('token', token);
      return token;
      // Voit nyt käyttää tätä tokenia muihin pyyntöihin.
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    console.error('Login error:', error);
  }

}

export function getTokenFromStorage(): string | null {
  return localStorage.getItem('token');
}
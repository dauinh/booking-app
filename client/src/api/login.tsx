import axios from 'axios';

// POST /auth/login
export const loginHost = async (email: string, password: string) => {
    try {
      return axios.post('http://localhost:3000/auth/login/host', {
        email: email,
        password: password
      });
    } catch (error) {
      console.error(error);
    }
}
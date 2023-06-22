import axios from 'axios';

// GET /api/profile
export const getHostProfile = async () => {
    try {
      const response = await axios.get('http://localhost:3000/host/profile');
      return response.data;
    } catch (error) {
      console.error(error);
    }
}
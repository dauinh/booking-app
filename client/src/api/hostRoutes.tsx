import axios from 'axios';

// response from axios is JSON object (data is stored in res.data)
export const getAllHosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/hosts');
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
}
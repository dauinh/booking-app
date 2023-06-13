import axios from 'axios';

const getAllHosts = async () => {
    try {
      const response = await axios.get('/hosts');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
}

export default { getAllHosts }
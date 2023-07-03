import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

export const HttpGet = async (url: string): Promise<any> => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error with GET request at ${url}`, error);
    throw error;
  }
};

export const HttpPost = async (url: string, data: {}): Promise<any> => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    console.error(`Error with POST request at ${url}`, error);
    throw error;
  }
};
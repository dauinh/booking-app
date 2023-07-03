import axiosInstance from '.';

export const getProperty = async (): Promise<any> => {
  try {
    const response = await axiosInstance.get('/host/property');
    return response.data;
  } catch (error) {
    console.error('Error fetching host property:', error);
    throw error;
  }
};
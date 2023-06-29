import axiosInstance from './index';

export const getHostProfile = async (): Promise<any> => {
  try {
    const response = await axiosInstance.get('/host/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching host profile:', error);
    throw error;
  }
};
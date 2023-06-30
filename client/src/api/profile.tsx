import axiosInstance from '.';

export const getHostProfile = async (): Promise<any> => {
  try {
    const response = await axiosInstance.get('/host/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching host profile:', error);
    throw error;
  }
};

export const getGuestProfile = async (): Promise<any> => {
  try {
    const response = await axiosInstance.get('/guest/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching guest profile:', error);
    throw error;
  }
};

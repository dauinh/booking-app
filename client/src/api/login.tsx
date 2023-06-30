import axiosInstance from '.';

export const loginHost = async (
  email: string,
  password: string
): Promise<any> => {
  const url = '/auth/login/host';
  const data = { email, password };

  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

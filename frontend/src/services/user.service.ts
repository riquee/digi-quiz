import axios from '../utils/axios';

export const auth = async () => {
  const { data } = await axios.post<{ token: string }>(`/auth/login`, {
    username: import.meta.env.VITE_API_ADMIN_USER,
    password: import.meta.env.VITE_API_ADMIN_PASSWORD,
  });

  console.log({ data });
  
  axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
};

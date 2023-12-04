import axios from 'axios';

export const axiosInstance = axios.create({
  validateStatus: (status) => {
    return !!status;
  },
});

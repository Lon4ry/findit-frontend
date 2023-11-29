import axios from 'axios';

const axiosInstance = axios.create({
  validateStatus: (status) => {
    return !!status;
  },
});
export default axiosInstance;

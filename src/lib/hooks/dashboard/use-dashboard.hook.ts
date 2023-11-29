import { useEffect, useState } from 'react';
import axiosInstance from '@/lib/axios';

const promiseWrapper = (promise: any) => {
  let status = 'pending';
  let result: any;

  const s = promise.then(
    (value: any) => {
      status = 'success';
      result = value[0][0];
    },
    (error: any) => {
      status = 'error';
      result = error;
    },
  );

  return () => {
    switch (status) {
      case 'pending':
        throw s;
      case 'success':
        return result;
      case 'error':
        throw result;
      default:
        throw new Error('Unknown status');
    }
  };
};

function useDashboard(type: string, skip = 0) {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const promise = axiosInstance
        .get(`/api/dashboard/${type}?skip=${skip}&take=${1}`)
        .then((response) => response.data);
      setResource(promiseWrapper(promise));
    };

    getData().then();
  }, [type, skip]);

  return resource;
}

export default useDashboard;

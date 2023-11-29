import { MutableRefObject, useEffect, useState } from 'react';
import axiosInstance from '@/lib/axios';

const promiseWrapper = (promise: any) => {
  let status = 'pending';
  let result: any;

  const s = promise.then(
    (value: any) => {
      status = 'success';
      result = value[1];
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

function useDashboardLength({
  type,
  listRef,
  setFunction,
}: {
  type: string;
  listRef: MutableRefObject<HTMLOListElement>;
  setFunction: (...args: any[]) => void;
}) {
  const [length, setLength] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const promise = axiosInstance
        .get(`/api/dashboard/${type}?skip=${0}&take=${1}`)
        .then((response) => response.data);
      setLength(promiseWrapper(promise));
    };

    getData().then();
  }, [type]);

  useEffect(() => {
    const setListLength = () => {
      const listElement = listRef.current;

      if (!listElement) return;

      const listHeight = listElement.clientHeight;
      const listChildHeight = 70;
      setFunction(
        Array(
          length > listHeight / listChildHeight
            ? Math.floor(listHeight / listChildHeight) + 5
            : length,
        ).fill(null),
      );
    };

    setListLength();
  }, [length, listRef, setFunction]);

  return length;
}

export default useDashboardLength;

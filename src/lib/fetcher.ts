const fetcher = async (url: string): Promise<any> => {
  return fetch(url).then((res) => res.json());
};
export default fetcher;

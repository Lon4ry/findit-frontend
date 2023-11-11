export const fetcher = async (...args: any[]): Promise<any> => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const response = await fetch(...args);
  return await response.json();
};

export const convertTime = (time: number) => {
  const convertedTime = new Date(time);

  return convertedTime.toISOString().slice(14, 19);
};
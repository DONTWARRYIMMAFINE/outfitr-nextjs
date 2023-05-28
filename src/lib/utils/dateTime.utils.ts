export function splitTime(numberOfHours: number) {
  const days = Math.floor(numberOfHours / 24);
  const remainder = numberOfHours % 24;
  const hours = Math.floor(remainder);
  return {
    days,
    hours,
  };
}

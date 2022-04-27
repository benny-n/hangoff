function getHoursMinutesSeconds(date: number): [number, number, number] {
  const seconds = Math.floor((date % (1000 * 60)) / 1000);
  const minutes = Math.floor(date / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  return [seconds, minutes, hours];
}

export function dateTimeToString(date: number): string {
  const [seconds, minutes, hours] = getHoursMinutesSeconds(date);
  return `${hours < 10 ? `0${hours}` : hours}:${
    minutes % 60 < 10 ? `0${minutes % 60}` : minutes % 60
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

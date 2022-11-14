import dayjs from "dayjs";

export const getTime = (date: string) => {
  return dayjs(date).format('H:mm')

}
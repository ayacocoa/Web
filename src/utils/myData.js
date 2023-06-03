/**
 * @author ayacocoa
 * @description 修改时间样式
 * @param number 时间戳
 * @returns string
 */
export default function MyData() {
  let time = new Date();
  let date = {
    year: time.getFullYear(),
    month: time.getMonth() + 1,
    day: time.getDate(),
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
  return (
    date.year +
    "-" +
    date.month +
    "-" +
    date.day +
    " " +
    date.hour +
    ":" +
    date.minute
  );
}

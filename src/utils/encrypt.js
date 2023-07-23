/**
 * @ayacocoa
 * @description 加密与解密
 */

export function encrypt(data) {
  let set = encodeURIComponent(JSON.stringify(data));
  let result = btoa(set);
  return result;
}
export function Dodecode(data) {
  try {
    let str = atob(data);
    let res = decodeURIComponent(str);
    let result = JSON.parse(res);
    return JSON.parse(result);
  } catch (e) {
    throw Error("解码出错");
  }
}

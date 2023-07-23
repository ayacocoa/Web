/**
 * 配置编译环境和线上环境的地址
 *
 * @author ayacocoa
 * @param baseUrl 域名地址
 * @param routerMode 路由模式
 * @param baseImgPath 图片存放地址
 */

let baseUrl = "";
let routerMode = "hash";
let baseImgPath = "";

if (process.env.NODE_ENV === "development") {
  baseUrl = "http://localhost:3000";
  baseImgPath = "http://localhost:3000";
} else {
  baseUrl = "https://wall-backend-44781-8-1317899860.sh.run.tcloudbase.com:3000";
  baseImgPath = "http://";
}
console.log(baseURL)
export { baseImgPath, baseUrl, routerMode };

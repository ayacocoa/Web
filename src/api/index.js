/**
 *  api
 */
import fetch from "../utils/axios";

//获取访问者ip
export const signInApi = () => fetch.post("/signip");

// 新建wall
export const insertWallApi = (data) => {
  fetch.post("/insertwall", data);
};

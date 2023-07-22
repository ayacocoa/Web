/**
 *  api
 */
import fetch from "../utils/axios";
import service from "../utils/axios";

//获取访问者ip
export const signInApi = () => fetch.post("/signip");

// 新建wall
export const insertWallApi = (data) => {
  fetch.post("/insertwall", data);
};

//新建反馈(喜欢/不喜欢/评论数)
export function insertFeedback(data) {
  return service.request({
    method: "post",
    url: "/insertfeedback",
    data,
  });
}
//删除反馈(喜欢/不喜欢/评论数)
export function deleteFeedback(wallId, userId, type) {
  return service.request({
    method: "post",
    url: "/deletefeedback",
    data: { wallId, userId, type },
  });
}
//查询反馈(喜欢/不喜欢/评论数)
export function findFeedback(wallId, userId, type) {
  return service.request({
    method: "post",
    url: "/findfeedback",
    data: { wallId, userId, type },
  });
}
//查询收藏
export function findCollect(userId, type) {
  return service.request({
    method: "post",
    url: "/findcollect",
    data: { userId, type },
  });
}
//增加喜欢/不喜欢、评论数
export function wallFeedback(wallId, type) {
  return service.request({
    method: "post",
    url: "/wallfeedback",
    data: { wallId, type },
  });
}
//减少喜欢/不喜欢、评论数
export function subWallFeedback(wallId, type) {
  return service.request({
    method: "post",
    url: "/subwallfeedback",
    data: { wallId, type },
  });
}

//新建评论
export function insertComment(data) {
  return service.request({
    method: "post",
    url: "/insertcomment",
    data,
  });
}

//查询墙
export function findWall(data) {
  return service.request({
    method: "post",
    url: "/findwall",
    data,
    // params: params 左边的params是变量名（key）后台接收机的，右边的params是接收的参数
  });
}

//查询墙与页数
export function findWallPage(data) {
  return service.request({
    method: "post",
    url: "/findwallpage",
    data,
  });
}

//查询评论
export function findCommentPage(data) {
  return service.request({
    method: "post",
    url: "/findcommentpage",
    data,
  });
}
//注册
export function registApi(data) {
  return service.request({
    method: "post",
    url: "/api/regist",
    data,
  });
}
//登录
export function loginApi(data) {
  return service.request({
    method: "post",
    url: "/api/login",
    data,
  });
}

//查询用户
export function getUser(data) {
  return service.request({
    method: "post",
    url: "/getUser",
    data,
  });
}
//搜索
export function searchFun(data) {
  return service.request({
    method: "post",
    url: "/search",
    data,
  });
}

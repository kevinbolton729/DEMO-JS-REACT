import request from '@/utils/request';
// Config
import { API_DOMAIN } from '@/config';
// 方法
import { setMd5 } from '@/utils/fns';
// 常量
// import {} from '@/utils/consts';

// [POST]
// 登录
export async function fakeAccountLogin(params) {
  const { username } = params;
  const password = setMd5(params.password);
  // await console.log(username, 'username');
  // await console.log(password, 'password');
  return request(`${API_DOMAIN}/api/server/loginon`, {
    method: 'POST',
    params: { username, password },
  });
}
// 注册
export async function fakeRegister(params = {}) {
  return request(`${API_DOMAIN}/api/server/register`, {
    method: 'POST',
    params: { ...params },
  });
}
// [图片]

// [GET]
// 获取所有站点数
export async function getSiteNums(params = {}) {
  return request(`${API_DOMAIN}/api/server/sitequantity`, {
    params,
  });
}
// 获取所有文章数
export async function getArticleNums(params = {}) {
  return request(`${API_DOMAIN}/api/server/articlequantity`, {
    params,
  });
}
// 获取今日发布文章数
export async function getArticleTodayNums(params = {}) {
  return request(`${API_DOMAIN}/api/server/todayarticlequantity`, {
    params,
  });
}

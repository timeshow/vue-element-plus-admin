/**
 * 自定义 token 操作
 */
import settings from "@/config/settings";

/**
 * 获取本地Token
 */
export const getToken = async (): Promise<string | null> => {
  return await localStorage.getItem(settings.siteTokenKey);
};

/**
 * 设置存储本地Token
 */
export const setToken = async (token: string): Promise<boolean> => {
  try {
    await localStorage.setItem(settings.siteTokenKey, token);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * 移除本地Token
 */
export const removeToken = async (): Promise<boolean> => {
  try {
    await localStorage.removeItem(settings.siteTokenKey);
    return true;
  } catch (error) {
    return false;
  }
};

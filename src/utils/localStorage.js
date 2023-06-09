const ACCESS_TOKEN = "ACCESS_TOKEN";

export const addAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token);

export const getAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token);

export const removeToken = () => localStorage.removeItem(ACCESS_TOKEN);

import { decodeJwt } from "jose";

export const isTokenExpired = (token: string) => {
  if (!token) {
    return true;
  }

  const { exp } = decodeJwt(token);
  return !!exp && exp * 1000 - Date.now() <= 1000;
};

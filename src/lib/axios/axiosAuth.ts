import { axiosPostJson } from "./axiosActions";

export const axiosAuthRegister = (body: object) => {
  return axiosPostJson("/auth/register", body);
};

export const axiosAuthLogin = (body: object) => {
  return axiosPostJson("/auth/login", body);
};

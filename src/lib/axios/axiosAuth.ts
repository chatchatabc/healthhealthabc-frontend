import { axiosPostJson } from "./axiosActions";

export const axiosAuthRegister = (body: object) => {
  return axiosPostJson("/auth/register/patient", body);
};

export const axiosAuthLogin = (body: object) => {
  return axiosPostJson("/auth/login", body);
};

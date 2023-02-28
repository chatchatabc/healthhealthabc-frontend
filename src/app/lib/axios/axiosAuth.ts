import { axiosPostJson } from "./axiosActions";

export const axiosAuthRegister = (body: object) => {
  return axiosPostJson("/auth/register", body);
};

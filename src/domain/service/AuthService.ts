import { axiosPostJson } from "../infra/axios/axiosActions";
import { notificationSuccess } from "../infra/notification/notificationActions";
import {
  AuthLoginRequest,
  AuthPatientRegisterRequest,
} from "../model/AuthModel";

export const authPatientRegister = async (body: AuthPatientRegisterRequest) => {
  const response = await axiosPostJson("/auth/register/patient", body);
  if (!response) return null;

  notificationSuccess("Registration successful!");

  return response;
};

export const authLogin = async (body: AuthLoginRequest) => {
  const response = await axiosPostJson("/auth/login", body);
  if (!response) return null;

  // Get x-access-token from headers
  const token = response.headers["x-access-token"];

  // Save token in cookies
  document.cookie = `token=${token}; path=/; max-age=3600`;

  notificationSuccess("Login successful!");

  return response;
};

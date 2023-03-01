import { axiosPostJson } from "../infra/axios/axiosActions";
import {
  notificationError,
  notificationSuccess,
} from "../infra/notification/notificationActions";
import {
  AuthLoginRequest,
  AuthPatientRegisterRequest,
} from "../model/AuthModel";

export const authPatientRegister = async (body: AuthPatientRegisterRequest) => {
  const response = await axiosPostJson("/auth/register/patient", body);

  // Check if response is null
  if (!response) {
    notificationError("Registration failed!", "Server error");
    return null;
  }

  notificationSuccess("Registration successful!", "Please login to continue");

  return response;
};

export const authLogin = async (body: AuthLoginRequest) => {
  const response = await axiosPostJson("/auth/login", body);

  // Check if response is null
  if (!response) {
    notificationError("Login failed!", "Server error");
    return null;
  }

  // Get x-access-token from headers
  const token = response.headers["x-access-token"];

  // Check if token is null
  if (!token) {
    notificationError("Login failed!", "Token not found");
    return null;
  }

  // Save token in cookies
  document.cookie = `token=${token}; path=/; max-age=3600`;

  notificationSuccess("Login successful!", "Welcome back!");

  return response;
};

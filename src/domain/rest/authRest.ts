import { initContract, initClient } from "@ts-rest/core";
import {
  AuthLoginRequest,
  AuthLoginResponse,
  AuthRegisterRequest,
  AuthRegisterResponse,
} from "../schema/authSchema";

const c = initContract();

const contract = c.router({
  authLogin: {
    method: "POST",
    path: "/auth/login",
    responses: {
      201: AuthLoginResponse,
      400: c.response<{ message: string }>(),
    },
    body: AuthLoginRequest,
    summary: "User Login",
  },
  authRegister: {
    method: "POST",
    path: "/auth/register/patient",
    responses: {
      201: AuthRegisterResponse,
      400: c.response<{ message: string }>(),
    },
    body: AuthRegisterRequest,

    summary: "User Register",
  },
});

export const authRest = initClient(contract, {
  baseUrl: "http://192.168.1.9:8080/api",
  baseHeaders: { "Content-Type": "application/json" },
});

import { z } from "zod";

export const AuthRegisterRequest = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const AuthRegisterResponse = z.object({
  username: z.string(),
  email: z.string(),
  errorContent: z.null(),
});

export const AuthLoginRequest = z.object({
  username: z.string(),
  password: z.string(),
});

export const AuthLoginResponse = z.object({
  username: z.string(),
  password: z.string(),
});

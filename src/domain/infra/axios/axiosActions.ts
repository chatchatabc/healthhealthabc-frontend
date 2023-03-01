import axios from "axios";
import { axiosError } from "./axiosError";

const baseUrl = "http://192.168.1.9:8080/api";

export const axiosConfigJson = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const axiosGetJson = async (url: string) => {
  try {
    return await axios.get(baseUrl + url, axiosConfigJson);
  } catch (err) {
    axiosError(err);
    return null;
  }
};

export const axiosPostJson = async (url: string, body: object) => {
  try {
    return await axios.post(baseUrl + url, body, axiosConfigJson);
  } catch (err) {
    axiosError(err);
    return null;
  }
};

export const axiosPutJson = async (url: string, body: object) => {
  try {
    return await axios.put(baseUrl + url, body, axiosConfigJson);
  } catch (err) {
    axiosError(err);
    return null;
  }
};

export const axiosDeleteJson = async (url: string) => {
  try {
    return await axios.delete(baseUrl + url, axiosConfigJson);
  } catch (err) {
    axiosError(err);
    return null;
  }
};

import axios from "axios";

const baseUrl = "http://192.168.1.9:8080/api";

export const axiosConfigJson = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const axiosGetJson = async (url: string) => {
  return await axios.get(baseUrl + url, axiosConfigJson);
};

export const axiosPostJson = (url: string, body: object) => {
  return axios.post(baseUrl + url, body, axiosConfigJson);
};

export const axiosPutJson = async (url: string, body: object) => {
  return await axios.put(baseUrl + url, body, axiosConfigJson);
};

export const axiosDeleteJson = async (url: string) => {
  return await axios.delete(baseUrl + url, axiosConfigJson);
};

import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {};
export const baseURL = "http://localhost:3000"

config.baseURL = baseURL;

export const axiosInstance = axios.create(config);

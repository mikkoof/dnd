import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {};
const baseURL = process.env.NEXT_PUBLIC_BASE_URL
config.baseURL = baseURL;

export const axiosInstance = axios.create(config);

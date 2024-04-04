import axios, { AxiosRequestHeaders } from "axios";

export const client = () => {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });

  // interceptors: 요청 전이나 응답 전, 특정 작업 수행
  // interceptors.request.use(): 요청 인터셉터 -> 요청 전 수행할 작업
  client.interceptors.request.use(
    (config) => {
      const token = sessionStorage.getItem("token");
      (config.headers as AxiosRequestHeaders).Accept =
        "application/vnd.github+json";
      if (token) {
        (
          config.headers as AxiosRequestHeaders
        ).Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return client;
};

import axios from "axios";

export const client = () => {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      "If-None-Match": "",
      Accept: "application/vnd.github+json",
    },
  });

  const token = sessionStorage.getItem("token");
  // token을 헤더에 저장
  client.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return client;
};

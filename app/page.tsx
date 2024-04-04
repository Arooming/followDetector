"use client";


import { client } from "@/api";
import { AxiosResponse } from "axios";
import { ChangeEvent, useState } from "react";

export interface UserTypes {
  login?: string;
  bio?: string;
  avatar_url?: string;
}

export default function Home() {
  const [token, setToken] = useState("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const handleClickBtn = () => {
    sessionStorage.setItem("token", token);
    client()
      .get<Array<UserTypes>>(`/user/following?per_page=${100}`)
      .then((res: AxiosResponse<UserTypes[]>) => {
        console.log(res);
      });
  };

  return (
    <div>
      <input onChange={handleChangeInput} />
      <button onClick={handleClickBtn}>Home</button>
    </div>
  );
}

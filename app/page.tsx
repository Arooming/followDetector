"use client";

import getFollowInfo from "@/libs/api/getFollowInfo";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import * as styles from "../style/Home/home.css";

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
    getFollowInfo();
  };

  return (
    <main className={styles.HomeWrapper}>
      <section className={styles.HomeContents}>
        <div className={styles.TokenLinkBox}>
          <Link
            href={"https://github.com/settings/tokens"}
            className={styles.TokenLinkBtn}
          >
            Github Token 만들러 가기
          </Link>
          <p className={styles.TokenInfoText}>
            ﹒ 토큰 발급 시 권한 user(Update ALL user data)를 체크해주세요!
          </p>
        </div>

        <article className={styles.TokenInputBox}>
          <input
            type="text"
            placeholder="Github Token을 입력해주세요"
            onChange={handleChangeInput}
            className={styles.TokenInput}
          />
          
          <Link href={"/follow-list"}>
            <button
              type="button"
              onClick={handleClickBtn}
              className={styles.TokenInputNextBtn}
              disabled={token.length === 0}
            >
              나의 맞팔 확인하기
            </button>
          </Link>
        </article>
      </section>
    </main>
  );
}

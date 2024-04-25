"use client";

import Link from "next/link";
import { ChangeEvent, useState } from "react";
import * as styles from "../style/Home/Home.css";

export default function Home() {
  const [token, setToken] = useState("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const handleClickBtn = () => {
    sessionStorage.setItem("token", token);
  };

  return (
    <main className={styles.homeWrapper}>
      <section className={styles.homeContents}>
        <div className={styles.tokenLinkBox}>
          <Link
            href={"https://github.com/settings/tokens"}
            className={styles.tokenLinkBtn}
          >
            Github Token 만들러 가기
          </Link>
          <p className={styles.tokenInfoText}>
            ﹒ 토큰 발급 시 권한 user(Update ALL user data)를 체크해주세요!
          </p>
        </div>

        <article className={styles.tokenInputBox}>
          <input
            type="text"
            placeholder="Github Token을 입력해주세요"
            onChange={handleChangeInput}
            className={styles.tokenInput}
          />

          <Link href={"/follow-list"}>
            <button
              type="button"
              onClick={handleClickBtn}
              className={styles.tokenInputNextBtn}
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

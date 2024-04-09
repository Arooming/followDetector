"use client";

import Lottie from "lottie-react";
import animationData from "../public/lottie/lottie.json";
import * as styles from "../style/Common/loading.css";

const Loading = () => {
  return (
    <section className={styles.LoadingPageItemContainer}>
      <article className={styles.LottieWrapper}>
        <Lottie animationData={animationData} />
      </article>
    </section>
  );
};

export default Loading;

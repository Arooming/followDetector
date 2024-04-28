import img_github_logo_white from "@/public/image/img_github_logo_white.png";
import Image from "next/image";
import Link from "next/link";
import * as styles from "../style/Common/header.css";

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <Link href={"/"}>
        <Image
          src={img_github_logo_white}
          alt="깃허브-로고"
          width={30}
          height={30}
        />
      </Link>

      <h1 className={styles.headerTitle}>깃허브 팔로우 탐지기</h1>
    </header>
  );
};

export default Header;

import { UserTypes } from "@/app/page";
import Image from "next/image";
import * as styles from "../style/Common/ListLayout.css";

const ListLayout = ({
  list,
  isUserInfo,
}: {
  list: UserTypes[];
  isUserInfo: boolean;
}) => {
  return list.map(({ login, avatar_url, bio }) => {
    return (
      <ul key={login} className={styles.contentsWrapper}>
        {avatar_url && (
          <Image
            width={130}
            height={130}
            src={avatar_url}
            alt={"유저-이미지"}
          />
        )}
        <p className={styles.loginInfo}>{login}</p>
        <p className={styles.loginInfo}>{bio}</p>
      </ul>
    );
  });
};

export default ListLayout;

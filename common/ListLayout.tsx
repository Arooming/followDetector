import { UserTypes } from "@/app/page";
import Image from "next/image";
import * as styles from "../style/Common/ListLayout.css";

const ListLayout = ({
  list,
  isUserInfo,
  isFollowingBtn,
}: {
  list: UserTypes[];
  isUserInfo: boolean;
  isFollowingBtn?: boolean;
}) => {
  return list.map(({ login, avatar_url }) => {
    return (
      <ul key={login} className={styles.contentsWrapper}>
        {avatar_url && (
          <Image
            width={130}
            height={130}
            src={avatar_url}
            alt={"유저-이미지"}
            style={{ marginTop: "1rem" }}
          />
        )}
        <div className={styles.followWrapper}>
          <p className={styles.loginInfo}>{login}</p>

          {!isUserInfo && (
            <button type="button" className={isFollowingBtn ? styles.followBtn : styles.unfollowBtn }>
              {isFollowingBtn ? "팔로우" : "언팔로우"}
            </button>
          )}
        </div>
      </ul>
    );
  });
};

export default ListLayout;

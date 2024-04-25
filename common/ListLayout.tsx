import useDeleteFollower from "@/libs/hook/useDeleteFollower";
import usePutFollower from "@/libs/hook/usePutFollower";
import { ListLayoutTypes } from "@/type/user";
import Image from "next/image";
import * as styles from "../style/Common/ListLayout.css";

const ListLayout = ({ list, isUserInfo, listType }: ListLayoutTypes) => {
  const putMuation = usePutFollower();
  const deleteMutation = useDeleteFollower();

  const handleClickFollowBtn = ({
    listType,
    login,
  }: {
    listType?: boolean;
    login: string;
  }) => {
    listType ? putMuation(login) : deleteMutation(login);
  };

  return list.map(({ login, avatar_url }) => {
    return (
      <ul key={login} className={styles.contentsWrapper}>
        {avatar_url && (
          <Image
            width={130}
            height={130}
            src={avatar_url}
            alt={"유저-이미지"}
            priority={true}
          />
        )}
        <div className={styles.followWrapper}>
          <p className={styles.loginInfo}>{login}</p>

          {!isUserInfo && (
            <button
              type="button"
              className={listType ? styles.followBtn : styles.unfollowBtn}
              onClick={() => login && handleClickFollowBtn({ listType, login })}
            >
              {listType ? "팔로우" : "언팔로우"}
            </button>
          )}
        </div>
      </ul>
    );
  });
};

export default ListLayout;

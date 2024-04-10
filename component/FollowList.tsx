import ListLayout from "@/common/ListLayout";
import { FollowInfoDataTypes } from "@/type/user";
import * as styles from "../style/FollowList/FollowList.css";

const FollowList = ({
  followInfoData,
}: {
  followInfoData: FollowInfoDataTypes;
}) => {
  const { followingData, followersData } = followInfoData;

  const matchedList = followersData.filter((follower) => {
    return followingData.some(
      (following) => following.login === follower.login
    );
  });

  const unfollowingList = followersData.filter((follower) => {
    return !matchedList.includes(follower);
  });

  const user = [matchedList, unfollowingList];

  return (
    <section className={styles.followListWrapper}>
      {user.map((list, idx) => {
        return (
          <article key={idx} className={styles.listWrapper}>
            <p className={styles.title}>
              {list === matchedList
                ? "맞팔 중인 사용자"
                : "내가 팔로우 안 한 사용자"}
            </p>
            <ListLayout list={list} isUserInfo={false} />
          </article>
        );
      })}
    </section>
  );
};

export default FollowList;

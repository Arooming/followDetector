import ListLayout from "@/common/ListLayout";
import { FollowInfoDataTypes } from "@/type/user";
import { useMemo } from "react";
import * as styles from "../style/FollowList/followList.css";

const FollowList = ({
  followInfoData,
}: {
  followInfoData: FollowInfoDataTypes;
}) => {
  const { followingData, followersData } = followInfoData;

  // followInfoData가 매우 길어질 수 있는 상황에 대비해 useMemo로 메모이제이션
  const getUserList = useMemo(() => {
    const matchedList = followersData.filter((follower) => {
      return followingData.some(
        (following) => following.login === follower.login
      );
    });

    const unfollowingList = followersData.filter((follower) => {
      return !matchedList.includes(follower);
    });

    return [{ matched: matchedList }, { unfollowed: unfollowingList }];
  }, [followersData, followingData]);

  return (
    <section className={styles.followListWrapper}>
      {getUserList.map((list, idx) => {
        const { matched, unfollowed } = list;

        return (
          <article key={idx} className={styles.listWrapper}>
            <div className={styles.titleWrapper}>
              <p className={styles.title}>
                {matched ? "맞팔 중인 사용자" : "내가 팔로우 안 한 사용자"}
              </p>
              <p className={matched ? styles.followerNum : styles.unfollowerNum}>
                {matched ? matched.length : unfollowed.length}
              </p>
              <p className={styles.title}>명</p>
            </div>

            <ListLayout
              list={matched ? matched : unfollowed}
              isUserInfo={false}
              listType={!matched}
            />
          </article>
        );
      })}
    </section>
  );
};

export default FollowList;

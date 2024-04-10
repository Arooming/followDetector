import { FollowInfoDataTypes } from "@/type/user";
import Image from "next/image";

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
    <section>
      {user.map((list, idx) => {
        return (
          <article key={idx}>
            <p>
              {list === matchedList
                ? "맞팔 중인 사용자"
                : "내가 팔로우 안 한 사용자"}
            </p>
            {list.map(({ login, avatar_url, bio }) => {
              return (
                <div key={login}>
                  {avatar_url && (
                    <Image
                      width={100}
                      height={100}
                      src={avatar_url}
                      alt={"유저-이미지"}
                    />
                  )}
                  <p>{login}</p>
                  <p>{bio}</p>
                </div>
              );
            })}
          </article>
        );
      })}
    </section>
  );
};

export default FollowList;

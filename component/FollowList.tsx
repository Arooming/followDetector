import { FollowInfoDataTypes } from "@/type/user";

const FollowList = ({
  followInfoData,
}: {
  followInfoData: FollowInfoDataTypes;
}) => {
  const { followingData, followersData } = followInfoData;
  console.log(followingData, followersData);

  return <div>FollowList</div>;
};

export default FollowList;

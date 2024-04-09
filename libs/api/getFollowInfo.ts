import { UserTypes } from "@/type/user";
import { client } from ".";

const PER_PAGE = 100;

const getFollowInfo = async () => {
  const { data: followingData } = await client().get<Array<UserTypes>>(
    `/user/following?per_page=${PER_PAGE}`
  );

  const { data: followersData } = await client().get<Array<UserTypes>>(
    `user/followers?per_page=${PER_PAGE}`
  );

  return { followingData, followersData };
};

export default getFollowInfo;

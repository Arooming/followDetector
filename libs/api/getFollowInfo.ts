import React from "react";

import { client } from ".";
import { UserTypes } from "@/type/user";

const PER_PAGE = 100;

const getFollowInfo = async () => {
  const { data: followingData } = await client().get<Array<UserTypes>>(
    `/user/following?per_page=${PER_PAGE}`
  );

  const { data: followersData } = await client().get<Array<UserTypes>>(
    `user/followers?per_page=${PER_PAGE}`
  );

  console.log(followersData, followingData)

  return { followingData, followersData };
};

export default getFollowInfo;

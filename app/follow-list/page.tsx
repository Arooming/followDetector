"use client";

import Loading from "@/common/Loading";
import FollowList from "@/component/FollowList";
import UserInfo from "@/component/UserInfo";
import useGetFollowInfo from "@/libs/hook/useGetFollowInfo";
import useGetUserInfo from "@/libs/hook/useGetUserInfo";
import React from "react";

const page = () => {
  const { isLoading: userInfoLoading, data: userInfoData } = useGetUserInfo();
  const { isLoading: followInfoLoading, data: followInfoData } =
    useGetFollowInfo();

  const isLoading = userInfoLoading || followInfoLoading;

  return isLoading ? (
    <Loading />
  ) : (
    <React.Fragment>
      {userInfoData && <UserInfo userInfoData={userInfoData} />}
      {followInfoData && <FollowList followInfoData={followInfoData} />}
    </React.Fragment>
  );
};

export default page;

"use client";

import Loading from "@/common/Loading";
import useGetFollowInfo from "@/libs/hook/useGetFollowInfo";

const page = () => {
  const token = sessionStorage.getItem("token");

  const { isLoading, data } = useGetFollowInfo(token);

  return isLoading ? <Loading /> : <div>page</div>;
};

export default page;

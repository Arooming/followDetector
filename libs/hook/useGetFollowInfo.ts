import { useQuery } from "@tanstack/react-query";
import React from "react";
import getFollowInfo from "../api/getFollowInfo";

const useGetFollowInfo = () => {
  const { data } = useQuery({
    queryKey: ["get-follow-info"],
    queryFn: () => getFollowInfo(),
  });

  return { data };
};

export default useGetFollowInfo;

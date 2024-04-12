import { useQuery } from "react-query";
import getFollowInfo from "../api/getFollowInfo";

const useGetFollowInfo = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["get-follow-info"],
    queryFn: () => getFollowInfo(),
  });

  return { isLoading, data };
};

export default useGetFollowInfo;

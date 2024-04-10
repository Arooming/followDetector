import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import getFollowInfo from "../api/getFollowInfo";

const useGetFollowInfo = (token: string | null) => {
  const router = useRouter();

  const { isLoading, data } = useQuery({
    queryKey: ["get-follow-info"],
    queryFn: () => getFollowInfo(),
    // 추후 수정 방향
    // onSuccess: () => token && sessionStorage.setItem("token", token),
    onError: () => {
      alert("토큰을 정확히 입력해주세요.");
      router.push("/");
      sessionStorage.clear();
    },
  });

  return { isLoading, data };
};

export default useGetFollowInfo;

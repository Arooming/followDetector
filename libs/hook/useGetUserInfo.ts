import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import getUserInfo from "../api/getUserInfo";

const useGetUserInfo = () => {
  const router = useRouter();
  const { isLoading, data } = useQuery({
    queryKey: ["get-user-info"],
    queryFn: () => getUserInfo(),
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

export default useGetUserInfo;

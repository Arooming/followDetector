import { QUERY_KEY } from "@/constants/queryKey";
import { useMutation, useQueryClient } from "react-query";
import { putFollower } from "../api/putFollowr";

const usePutFollower = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (login: string) => {
      return putFollower(login);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY.followInfo);
    },
  });
  return mutation.mutate;
};

export default usePutFollower;

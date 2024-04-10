import { useMutation, useQueryClient } from "react-query";
import { putFollower } from "../api/putFollowr";

const usePutFollower = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (login: string) => {
      return putFollower(login);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["get-follow-info"]);
    },
  });
  return mutation;
};

export default usePutFollower;

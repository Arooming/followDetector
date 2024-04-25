import { useMutation, useQueryClient } from "react-query";
import deleteFollower from "../api/deleteFollower";

const useDeleteFollower = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (login: string) => {
      return deleteFollower(login);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["get-follow-info"]);
    },
  });
  return mutation.mutate;
};

export default useDeleteFollower;

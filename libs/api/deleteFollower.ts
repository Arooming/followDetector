import { client } from ".";

const deleteFollower = async (login: string) => {
  const { data } = await client().delete(`/user/following/${login}`);
  return data;
};

export default deleteFollower;

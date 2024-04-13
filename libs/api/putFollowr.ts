import { client } from ".";

export const putFollower = async (login: string) => {
  const { data } = await client().put(`/user/following/${login}`);
  return data;
};

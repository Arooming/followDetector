import { UserProfileInfoTypes } from "@/type/user";
import { client } from ".";

const getUserInfo = async () => {
  const { data } = await client().get<UserProfileInfoTypes>("/user");

  return data;
};

export default getUserInfo;

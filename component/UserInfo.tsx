import { UserProfileInfoTypes } from "@/type/user";

const UserInfo = ({ userInfoData }: { userInfoData: UserProfileInfoTypes }) => {
  console.log(userInfoData);
  return <div>UserInfo</div>;
};

export default UserInfo;

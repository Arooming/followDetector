import ListLayout from "@/common/ListLayout";
import { UserProfileInfoTypes } from "@/type/user";
import * as styles from "../style/User/user.css";

const UserInfo = ({ userInfoData }: { userInfoData: UserProfileInfoTypes }) => {
  return (
    <section className={styles.userInfoWrapper}>
      <ListLayout list={[userInfoData]} isUserInfo={true} />
    </section>
  );
};

export default UserInfo;

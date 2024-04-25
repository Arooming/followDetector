export interface UserProfileInfoTypes {
  login: string;
  avatar_url?: string;
  followers?: number;
  following?: number;
}

export interface UserTypes {
  login: string;
  avatar_url?: string;
}

export interface FollowInfoDataTypes {
  followingData: Array<UserTypes>;
  followersData: Array<UserTypes>;
}

export interface ListLayoutTypes {
  list: Array<UserTypes>;
  isUserInfo: boolean;
  listType?: boolean;
}

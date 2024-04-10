export interface UserProfileInfoTypes {
  login?: string;
  bio?: string;
  avatar_url?: string;
  followers?: number;
  following?: number;
}

export interface UserTypes {
  login?: string;
  bio?: string;
  avatar_url?: string;
}

export interface FollowInfoDataTypes {
  followingData: Array<UserTypes>;
  followersData: Array<UserTypes>;
}

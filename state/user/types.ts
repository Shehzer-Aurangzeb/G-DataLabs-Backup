export type UserType = {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  totalRewards: string;
  username: string;
  id: string;
  image: string;
  key: string;
};

export type UserSliceType = {
  isAuthenticated: boolean;
  user: UserType | undefined;
};

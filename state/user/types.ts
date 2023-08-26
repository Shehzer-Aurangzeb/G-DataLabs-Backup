export type UserType = {
  id: string;
  name: string;
  key: string;
};

export type UserSliceType = {
  isAuthenticated: boolean;
  user: UserType | undefined;
};

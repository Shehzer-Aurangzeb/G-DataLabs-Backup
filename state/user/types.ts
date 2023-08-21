export type UserType = {
  id: number;
  name: string;
  key: string;
};

export type UserSliceType = {
  isAuthenticated: boolean;
  user: UserType | undefined;
};

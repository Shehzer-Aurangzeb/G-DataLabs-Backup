type NAVITEM = {
  title: string;
  icon: any;
  to: string;
};
export type NAVITEMS = NAVITEM & {
  nestedItems?: NAVITEM[];
};

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

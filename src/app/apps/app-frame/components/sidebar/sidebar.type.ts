export type SideBarListType = {
  name: string;
  route: string;
  children?: SideBarListType[];
};
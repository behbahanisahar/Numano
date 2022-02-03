import TableSamira from "./features/components/table/table";

export interface RouteTypes {
  exact: boolean;
  path: string;
  component: any;
  parentPath?: string;
}

const routes: RouteTypes[] = [
  {
    exact: true,
    path: "/",
    component: TableSamira,
  },
];

export default routes;

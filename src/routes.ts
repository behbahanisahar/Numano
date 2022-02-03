import Form2 from "./features/components/form2/form2";
import Home from "./features/components/home";
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
    component: Home,
  },
  {
    exact: true,
    path: "/form",
    component: Form2,
  },
  {
    exact: true,
    path: "/samira-table",
    component: TableSamira,
  },
];

export default routes;

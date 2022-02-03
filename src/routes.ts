
import MyForm from "./features/components/form/my-form";
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
    component: MyForm,
  },
  {
    exact: true,
    path: "/samira-table",
    component: TableSamira,
  },
];

export default routes;

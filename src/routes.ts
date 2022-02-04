
import Form from "./features/components/form/Form";
import Home from "./features/components/home";
import table from "./features/components/table/table";

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
    component: Form,
  },
  {
    exact: true,
    path: "/table",
    component: table,
  },
];

export default routes;

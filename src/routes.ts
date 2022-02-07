import Home from "./features/components/home";
import MyForm from "./features/components/myform/myform";

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
    path: "/Form",
    component: MyForm,
  },
];

export default routes;

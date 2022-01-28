import { icons } from "../core/components/svg-icon/icons";

export default interface DropDownModel {
  key: string;
  text: string;
  Icon:keyof typeof icons,
}

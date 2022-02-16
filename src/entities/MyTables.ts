import { icons } from "../core/components/svg-icon/icons";

export default interface MyTableModel {
 iconName:keyof typeof icons,
 key: string;
 name:string;
 Course:string;
 Member:string;
 size:string;
}

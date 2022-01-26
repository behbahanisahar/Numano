import { icons } from "../core/components/svg-icon/icons";

export default interface TblMehdiModel {
 Icon:keyof typeof icons,
 key: string;
 Name:string;
 Course:string;
 Member:string;
 Size:string;
}
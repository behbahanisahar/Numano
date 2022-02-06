import * as React from "react";
import { ReactElement } from "react";
import CustomizedMenus from "../dropDown/dropdown";
import "./header-content.css";

interface Props {
  subTitle?: string;
  title: string;
}

const HeaderContent = ({ subTitle, title }: Props): ReactElement => {
  return (
    <>
      <h3 className="card-title">
        {title}
        <small>{subTitle} </small>
      </h3>
      <div className="card-toolbar">
        <CustomizedMenus></CustomizedMenus>
      </div>
    </>
  );
};

export default HeaderContent;

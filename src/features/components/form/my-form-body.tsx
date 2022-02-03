import * as React from "react";
import { ReactElement } from "react";
import MyFormItem from "./my-form-item";
interface Props {
  onChange: (fieldname: string, value: string) => void;
  data: MyFormItem;
}

const MyFormBody = ({ data, onChange }: Props): ReactElement => {
  return (
    <>
      <div className="row mx-auto">
        <div className="col-6 d-flex flex-column ltr">
          {" "}
          <label>lastname</label>
          <input
            value={data?.lastname}
            onChange={(e: any) => onChange("lastname", e.target.value)}
            className="form-control"
            type="text"
          />
        </div>
        <div className="col-6 d-flex flex-column ltr">
          {" "}
          <label>fisrname</label>
          <input
            value={data?.firstname}
            onChange={(e: any) => onChange("firstname", e.target.value)}
            className="form-control"
            type="text"
          />
        </div>
      </div>
    </>
  );
};

export default MyFormBody;

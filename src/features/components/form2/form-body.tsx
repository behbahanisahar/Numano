import * as React from "react";
import { ReactElement } from "react";
import Form2Item from "./form2-item";
interface Props {
  onChange: (fieldname: string, value: string) => void;
  formData: Form2Item;
}

const FormBody = ({ formData, onChange }: Props): ReactElement => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <label>first name</label>
          <input
            type="text"
            className="form-control"
            value={formData.firstname}
            onChange={(e: any) => onChange("firstname", e.target.value)}
          />
        </div>
        <div className="col-6">
          <label>lastname</label>
          <input
            type="text"
            className="form-control"
            value={formData.lastname}
            onChange={(e: any) => onChange("lastname", e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default FormBody;

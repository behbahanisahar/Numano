import * as React from "react";
import { ReactElement, useState } from "react";
import FormBody from "./form-body";
import FormFooter from "./form-footer";
import Form2Item from "./form2-item";

const Form2 = (): ReactElement => {
  const [formdata, setFormData] = useState<Form2Item>({ firstname: "", lastname: "" });
  const onChangeFields = (fieldname: string, value: string): void => {
    setFormData({ ...formdata, [fieldname]: value });
  };
  return (
    <>
      <FormBody formData={formdata} onChange={onChangeFields} />
      <FormFooter data={formdata} />
    </>
  );
};

export default Form2;

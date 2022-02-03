import * as React from "react";
import { ReactElement, useState } from "react";
import { DKButton } from "src/core/components/button/button";
import { DKCardBody, DKCardFooter } from "src/core/components/card";
import { DKCard } from "src/core/components/card/card";
import { DKCardHeader } from "src/core/components/card/card-header";
import MyFormBody from "./my-form-body";
import MyFormItem from "./my-form-item";

const MyForm = (): ReactElement => {
  // const [firstname, SetFirstName] = useState<string>("");
  //  const [lastname, SetLastName] = useState<string>("");
  const [formData, setFormData] = useState<MyFormItem>({ firstname: "", lastname: "" });
  const onChangeFields = (fieldName: string, value: string): void => {
    setFormData({ ...formData, [fieldName]: value });
  };
  return (
    <>
      <DKCard className="mx-auto">
        <DKCardHeader title="My Form" hasComplexHeader={false} noBorder={true} className={"p-5 ltr"}></DKCardHeader>
        <DKCardBody>
          <MyFormBody onChange={onChangeFields} data={formData} />
        </DKCardBody>
        <DKCardFooter>
          <DKButton className="mx-2" type="submit" onClick={() => alert(formData?.firstname)}>
            Submit
          </DKButton>
          <DKButton type="cancel">Cancel</DKButton>
        </DKCardFooter>
      </DKCard>
    </>
  );
};

export default MyForm;

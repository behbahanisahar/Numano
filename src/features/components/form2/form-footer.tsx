import * as React from "react";
import { ReactElement } from "react";
import { DKButton } from "src/core/components/button/button";
import Form2Item from "./form2-item";
interface Props {
  data: Form2Item;
}

const FormFooter = ({ data }: Props): ReactElement => {
  console.log(data);
  return (
    <>
      <div className="mt-5">
        <DKButton type="submit">Submit</DKButton>
      </div>
    </>
  );
};

export default FormFooter;

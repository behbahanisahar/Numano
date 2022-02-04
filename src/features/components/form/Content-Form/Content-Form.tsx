import * as React from "react";
import { ReactElement } from "react";
import FormItem from "../form-item";
import InputTextField from "../InPut";
import "./Content-Form.css";

interface Props {
  SendFilds:(fieldname: string, value: string) => void;
  formData: FormItem[];
 
}

const ContentForm = ({SendFilds,formData}: Props): ReactElement => {

 return (
   <>
     <div className="card card-custom card-content">
      <div className="card-header">
        <h3 className="card-title">
         Billing Address
        </h3>
      </div>
      <form>
       <div className="card-body">
          <InputTextField formData={formData} onChange={SendFilds} label={"Address1"} readonly={false} nessesary={true} multiline={true} autoComplete="off"/>
          <InputTextField formData={formData} onChange={SendFilds} label={"Address2"} readonly={false} nessesary={true} multiline={true} autoComplete="off"/>
        <div className="row">
          <div className="col-md-6">
            <InputTextField formData={formData} onChange={SendFilds} label={"City"} readonly={false} nessesary={true} multiline={false} autoComplete="off" /></div>
          <div className="col-md-4">
            <InputTextField formData={formData} onChange={SendFilds} label={"State"} readonly={false} nessesary={true} multiline={false} autoComplete="off" /></div>
          <div className="col-md-2">
            <InputTextField formData={formData} onChange={SendFilds} label={"ZIP"} readonly={false} nessesary={true} multiline={false} autoComplete="off" /></div>
        </div>
       </div>
      </form>
     </div>
   </>
 );
};

export default ContentForm;


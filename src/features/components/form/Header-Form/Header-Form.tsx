import { TextField } from "@material-ui/core";
import * as React from "react";
import { ReactElement} from "react";
import ViewsDatePicker from "../Calender/Calender";
import FormItem from "../form-item";
import InputTextField from "../InPut";
import "./Header-Form.css";

interface Props {
  SendFilds:(fieldname: string, value: string) => void;
  formData: FormItem;
  
 
}

const HeaderForm = ({SendFilds,formData}: Props): ReactElement => {
 return (
   <>
     <div className="card card-custom">
      <div className="card-header">
        <h3 className="card-title">
         Advanced Validation
        </h3>
      </div>
      <form>
       <div className="card-body">
          <InputTextField formData={formData} value={formData.CardholderName} onChange={SendFilds} label={"CardholderName"} readonly={false} nessesary={true} autoComplete="off"/>
          <InputTextField  formData={formData} value={formData.CardholderNumber} onChange={SendFilds} label={"CardholderNumber"} readonly={false} nessesary={true} autoComplete="off"/>
        <div className="CalenderRow">
          <div className="col-md-8 leftcol"> 
            <ViewsDatePicker/>
          </div>
          <div className="col-md-4 Rightcol">
            <TextField id="outlined-helperText" label="*CVV" defaultValue=" " variant="outlined"/>
          </div>
        </div>

       </div>
     
      </form>
      
     </div>
   </>
 );
};

export default HeaderForm;
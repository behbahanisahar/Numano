import { TextField } from "@material-ui/core";
import * as React from "react";
import { ReactElement } from "react";
import ViewsDatePicker from "../calender/calender";
import InputTextField from "../InPut";
import "./header-form.css";

const HeaderForm = (): ReactElement => {
 
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
          <InputTextField label={"Cardholder Name"} readonly={false} nessesary={true}/>
          <InputTextField label={"Cardholder Number"} readonly={false} nessesary={true}/>
        <div className="CalenderRow">
          <div className="col-md-8 leftcol"> <ViewsDatePicker/></div>
          <div className="col-md-4 Rightcol"> <TextField id="outlined-helperText" label="*CVV" defaultValue=" " variant="outlined"/></div>
        </div>

       </div>
     
      </form>
      
     </div>
   </>
 );
};

export default HeaderForm;
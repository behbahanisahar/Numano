import { TextField } from "@material-ui/core";
import * as React from "react";
import { ReactElement } from "react";
import MaterialUIPickers from "../Calender/Calender";
import InputTextField from "../InPut";
import "./Header-Form.css";

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
          <div className="col-md-8 leftcol"> <MaterialUIPickers/></div>
          <div className="col-md-4 Rightcol"> <TextField id="outlined-helperText" label="*CVV" defaultValue=" " variant="outlined"/></div>
        </div>

       </div>
     
      </form>
      
     </div>
   </>
 );
};

export default HeaderForm;
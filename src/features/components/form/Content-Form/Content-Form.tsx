import * as React from "react";
import { ReactElement } from "react";
import InputTextField from "../InPut";
import "./content-form.css";


const ContentForm = (): ReactElement => {
 
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
          <InputTextField label={"Address1"} readonly={false} nessesary={true} multiline={true} autoComplete="off"/>
          <InputTextField label={"Address2"} readonly={false} nessesary={true} multiline={true} autoComplete="off"/>
        <div className="row">
          <div className="col-md-6">
            <InputTextField label={"City"} readonly={false} nessesary={true} multiline={false} autoComplete="off" /></div>
          <div className="col-md-4">
            <InputTextField label={"State"} readonly={false} nessesary={true} multiline={false} autoComplete="off" /></div>
          <div className="col-md-2">
            <InputTextField label={"ZIP"} readonly={false} nessesary={true} multiline={false} autoComplete="off" /></div>
        </div>

       </div>
     
      </form>
      
     </div>
   </>
 );
};

export default ContentForm;


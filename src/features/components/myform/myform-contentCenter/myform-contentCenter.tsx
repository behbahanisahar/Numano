import TextField from "@mui/material/TextField";
import * as React from "react";
import { ReactElement } from "react";
import MyFormItem from "../myform-item";
import './myform-contentCenter.css';


interface Props {
  onChange: (fieldname: string, value: string) => void;
  data:MyFormItem
}

const MyFormContentCenter = ({data,onChange}:Props): ReactElement => {
  return (
    <>

 <div className="card card-custom card-content">
          <div className="card-header">
            <h3 className="card-title">
              Billing Address:
            </h3>
           </div>
      <form>
              <div className="card-body">
                  <div className="row">
                    <TextField  className="form-control" id="outlined-basic" label="Address1" variant="outlined"
                    onChange={(e: any) => onChange("Address1",e.target.value)} value={data.Address1}
                    required/>
                  </div>
                  <div className="row mt-20">
                    <TextField  className="form-control" id="outlined-basic" label="Address2" variant="outlined"
                    onChange={(e: any) => onChange("Address2",e.target.value)} value={data.Address2}
                    />
                  </div>
                <div className="row SecondRow mt-20">
                    <div className="col-md-5">
                        <TextField  className="form-control" id="outlined-basic" label="City" variant="outlined"
                        onChange={(e: any) => onChange("City",e.target.value)} value={data.City}
                         required />  
                    </div>
                    <div className="col-md-4">
                     <TextField  className="form-control" id="outlined-basic" label="State" variant="outlined"
                     onChange={(e: any) => onChange("State",e.target.value)} value={data.State}
                     required />  
                    </div>
                    <div className="col-md-1">
                     <TextField  className="form-control" id="outlined-basic" label="ZIP" variant="outlined"
                     onChange={(e: any) => onChange("ZIP",e.target.value)} value={data.ZIP}
                     required />  
                    </div>
                </div>
               
              </div>
      </form>
 </div>     
 


    
    
    </>
  );
};

export default MyFormContentCenter;
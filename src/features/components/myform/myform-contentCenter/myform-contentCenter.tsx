import TextField from "@mui/material/TextField";
import * as React from "react";
import { ReactElement } from "react";



const MyFormContentCenter = (): ReactElement => {
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
                    <TextField  className="form-control" id="outlined-basic" label="Address1:" variant="outlined" required/>
                  </div>
                  <div className="row mt-20">
                    <TextField  className="form-control" id="outlined-basic" label="Address2:" variant="outlined"/>
                  </div>
                <div className="row mt-20">
                    <div className="col-md-5">
                        <TextField  className="form-control" id="outlined-basic" label="City:" variant="outlined" required />  
                    </div>
                    <div className="col-md-4">
                     <TextField  className="form-control" id="outlined-basic" label="State:" variant="outlined" required />  
                    </div>
                    <div className="col-md-1">
                     <TextField  className="form-control" id="outlined-basic" label="Zip:" variant="outlined" required />  
                    </div>
                </div>
               
              </div>
      </form>
 </div>     
 


    
    
    </>
  );
};

export default MyFormContentCenter;
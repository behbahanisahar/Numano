import * as React from "react";
import { ReactElement } from "react";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";



const MyFormContent = (): ReactElement => {
  return (
    <>

 <div className="card card-custom card-content">
          <div className="card-header">
            <h3 className="card-title">
              Billing Information:
            </h3>
           </div>
      <form>
              <div className="card-body">
                  <div className="row">
                    <TextField  className="form-control" id="outlined-basic" label="CardHolder Name:" variant="outlined" required/>
                  </div>
                  <div className="row mt-20">
                    <TextField  className="form-control" id="outlined-basic" label="CardNumber:" variant="outlined" required />
                  </div>
                <div className="row mt-20">
                    <div className="col-md-4">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Exp Month</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value="age"
                                label="Exp Month" >
                                <MenuItem value={10}>April</MenuItem>
                                <MenuItem value={20}>May</MenuItem>
                                <MenuItem value={30}>June</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-4">
                        <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Exp Year</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value="age"
                                    label="Exp Year" >
                                    <MenuItem value={10}>2019</MenuItem>
                                    <MenuItem value={20}>2020</MenuItem>
                                    <MenuItem value={30}>2021</MenuItem>
                                </Select>
                            </FormControl>
                    </div>
                    <div className="col-md-4">
                    <TextField  className="form-control" id="outlined-basic" label="CVV:" variant="outlined" required />  
                    </div>
                </div>
               
              </div>
      </form>
 </div>     
 


    
    
    </>
  );
};

export default MyFormContent;
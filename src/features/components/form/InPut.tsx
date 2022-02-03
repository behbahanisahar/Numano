import TextField from "@mui/material/TextField";
import * as React from "react";
import { ReactElement } from "react";


interface Props {
  label: string;
  value?: any;
  readonly: boolean;
  nessesary:boolean;
  multiline?:boolean;
  autoComplete?:string;
}

const InputTextField = ({ label: Persianlabel, value, readonly ,nessesary,multiline,autoComplete }: Props): ReactElement => {
  return (
    <>
      <div className="text-container">
        <div className="form-group">
          <label><span>{nessesary ? '*':''}</span>{Persianlabel}:</label>
            <TextField type="text" className="form-control" value={value} placeholder="" variant="standard" autoComplete={autoComplete} InputProps={{
            readOnly: readonly,
            multiline:multiline,
            }} />
        </div>     
      </div>
    </>
  );
};
export default InputTextField;

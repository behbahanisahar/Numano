import TextField from "@mui/material/TextField";
import * as React from "react";
import { ReactElement } from "react";
import FormItem from "./form-item";


interface Props {
  label: string;
  value?: any;
  readonly: boolean;
  nessesary:boolean;
  multiline?:boolean;
  autoComplete?:string;
  onChange: (fieldname: string, value: string) => void;
  formData: FormItem[];
}

const InputTextField = ({ label: Persianlabel, value, readonly ,nessesary,multiline,autoComplete, onChange,formData }: Props): ReactElement => {

  return (
    <>
      <div className="text-container">
        <div className="form-group">
          <label><span>{nessesary ? '*':''}</span>{Persianlabel}:</label>
            <TextField type="text" className="form-control" value={value} placeholder="" variant="standard" autoComplete={autoComplete} InputProps={{
            readOnly: readonly,
            multiline:multiline,
            }} 
            onChange={(e: any) => onChange(Persianlabel, e.target.value)}
            />
        </div>     
      </div>
    </>
  );
};
export default InputTextField;

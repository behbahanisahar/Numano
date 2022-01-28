import * as React from "react";
import { ReactElement } from "react";


interface Props {
  label: string;
  value?: any;
  readonly: boolean;
  nessesary:boolean;
}

const InputTextField = ({ label: Persianlabel, value, readonly,nessesary }: Props): ReactElement => {
  return (
    <>
      <div className="text-container">
        <div className="form-group">
          <label><span>{nessesary ? '*':''}</span>{Persianlabel}:</label>
            <input type="text" className="form-control" value={value} placeholder=""/>
        </div>     
      </div>
    </>
  );
};
export default InputTextField;

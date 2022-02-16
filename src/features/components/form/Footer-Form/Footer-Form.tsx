import * as React from "react";
import { ReactElement, useState } from "react";
import FormItem from "../form-item";
import TableForm from "../table-form/table-form";
import "./Footer-Form.css";

interface Props {
  data: FormItem;
  resetData: () => void;
  EditData:(i:number,TblArray:FormItem[])=> void;
  
}

const FooterForm = ({ data,resetData,EditData }: Props): ReactElement => {
 
 const [TblArray, setTblArray] = useState<FormItem[]>([]);
  const Submitdata = () => { 
  setTblArray(TblArray => [...TblArray,data]);
  resetData(); 
};

 return (
   <>
       <div className="card-footer">
         <div className="card-footer-btn">
            <button type="submit" onClick={Submitdata} className="btn btn-info mr-2">Submit</button>
            <button type="reset" className="btn btn-cancel">Cancel</button>
         </div>
         <hr></hr>
        <TableForm data={TblArray} EditData={EditData}/>
       </div>
   </>
 );
};

export default FooterForm;
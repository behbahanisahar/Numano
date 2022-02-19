import * as React from "react";
import { ReactElement, useState } from "react";
import FormItem from "../form-item";
import TableForm from "../table-form/table-form";
import "./Footer-Form.css";

interface Props {
  data: FormItem;
  resetData: () => void;
  EditData: (i: number, TblArray: FormItem[]) => void;


}

const FooterForm = ({ data, resetData, EditData }: Props): ReactElement => {

  const [TblArray, setTblArray] = useState<FormItem[]>([]);
  const [EditFlag, SetEditFlag] = useState<boolean>(false);
  const [TRIndex, SetTRIndex] = useState<number>(0);
 
 
  const Submitdata = () => {
    if (!EditFlag) {
      setTblArray(TblArray => [...TblArray, data]);
    }
    else{
      const NewArray=[...TblArray];
      NewArray[TRIndex]=data;
      setTblArray(NewArray);
      SetEditFlag(false)
    }
  
  resetData();
  // SetNewArray(TblArray);
  };
  
 


  return (
    <>
      <div className="card-footer">
        <div className="card-footer-btn">
          <button type="reset" onClick={Submitdata} className="btn btn-info mr-2">{!EditFlag ? 'Submit': 'Update'}</button>
          <button type="reset" className="btn btn-cancel">Cancel</button>
        </div>
        <hr></hr>
        <TableForm  data={TblArray} EditData={EditData} setTblArray={setTblArray}  EditFlag={SetEditFlag} SetTRIndex={SetTRIndex}/>
      </div>
    </>
  );
};

export default FooterForm;
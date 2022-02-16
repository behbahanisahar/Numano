import * as React from "react";
import { ReactElement, useState } from "react";
import MyFormItem from "../myform-item";
import MyFormTable from "../myform-table/myform-table";
import './footer.css';

interface Props {
  data: MyFormItem;
  ClearForm: () => void;
  EditRow:(i:number,data:MyFormItem[])=> void;

}

const MyFormFooter = ({ EditRow,data,ClearForm }: Props): ReactElement => {
  const [dataArray, setdataArray] = useState<MyFormItem[]>([]);
  const [Editflag, setEditFlag] = useState<boolean>(false);
  const [TblRowIndex, setTblRowIndex] = useState<number>(0);
  const Savedata = () => { 
    if (!Editflag) {
    setdataArray(dataArray => [...dataArray,data]);
    }
    else{
      const NewArray =[...dataArray];
      NewArray[TblRowIndex]=data;
      setdataArray(NewArray);
    }
    ClearForm();

  };

  return (
    <>
        <div className="card-footer">
          <div className="card-footer-btn">
          {!Editflag && (
           <button type="submit" onClick={Savedata} className="btn btn-info mr-2" >Submit</button>
          )}
           {Editflag && (
           <button type="submit" onClick={Savedata} className="btn btn-info mr-2" >Update</button>
           )}
           <button type="reset" className="btn btn-cancel">cancel</button>
          </div>
          <MyFormTable EditRow={EditRow}  data={dataArray} setEditFlag={setEditFlag} setTblRowIndex={setTblRowIndex}/>
        </div>
    
    </>
  );
};

export default MyFormFooter;

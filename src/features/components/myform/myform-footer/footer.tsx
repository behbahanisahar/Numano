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
  const Savedata = () => { 
    setdataArray(dataArray => [...dataArray,data]);
    ClearForm();

  };

  return (
    <>
        <div className="card-footer">
          <div className="card-footer-btn">
           <button type="submit" onClick={Savedata} className="btn btn-info mr-2" >Submit</button>
           <button type="reset" className="btn btn-cancel">cancel</button>
          </div>
          <MyFormTable EditRow={EditRow}  data={dataArray}/>
        </div>
    
    </>
  );
};

export default MyFormFooter;

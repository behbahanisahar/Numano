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
  const [searchInput, setsearchInput] = useState([]);
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
    }
  
  resetData();
  };

  const ChangeInput = (value: any, Tbldata: FormItem[]): void => {

    const keyword = value;

    const filteredData = Tbldata.filter((val) => {

      return (val.CardholderName.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
    })

    if (keyword === "") {
      setsearchInput([]);
      // setTblArray(Tbldata => [...Tbldata, filteredData]);
      console.log(filteredData);
      console.log(Tbldata);
    }
    else {
      setTblArray(filteredData);
      setsearchInput(keyword);
      console.log(filteredData);
      console.log(Tbldata);

    }
  }


  return (
    <>
      <div className="card-footer">
        <div className="card-footer-btn">
        {!EditFlag && (
            <button type="submit" onClick={Submitdata} className="btn btn-info mr-2">Submit</button>
        )}
        {EditFlag && (
            <button type="reset" onClick={Submitdata} className="btn btn-info mr-2">Update</button>
        )}
       
          <button type="reset" className="btn btn-cancel">Cancel</button>
        </div>
        <hr></hr>
        <TableForm Inputvalue={searchInput} ChangeInput={ChangeInput} data={TblArray} EditData={EditData}  EditFlag={SetEditFlag} SetTRIndex={SetTRIndex}/>
      </div>
    </>
  );
};

export default FooterForm;
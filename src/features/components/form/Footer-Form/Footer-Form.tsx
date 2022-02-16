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
  //  console.log(searchInput)


  const Submitdata = (CardholderName:string) => {
 

  setTblArray(TblArray => [...TblArray, data]);
    var commentIndex = TblArray.findIndex(function(c) { 
      return c.CardholderName == CardholderName; 
  });
  console.log(commentIndex);
  
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
          <button type="submit" onClick={()=>Submitdata(data.CardholderName)} className="btn btn-info mr-2">Submit</button>
          <button type="reset" className="btn btn-cancel">Cancel</button>
        </div>
        <hr></hr>
        <TableForm Inputvalue={searchInput} ChangeInput={ChangeInput} data={TblArray} EditData={EditData} />
      </div>
    </>
  );
};

export default FooterForm;
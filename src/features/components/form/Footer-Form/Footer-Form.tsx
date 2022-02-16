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
  const [formIsEdiited, setFormIsEditted] = useState<boolean>(false);
  const [tIndex, setTIndex] = useState<number>(0);
  const Submitdata = (): any => {
    if (!formIsEdiited) {
      setTblArray(TblArray => [...TblArray, data]);
    } else if (formIsEdiited) {
      const newArr = [...TblArray]; // copying the old datas array
      newArr[tIndex] = data;
      setTblArray(newArr);
    }

    resetData();
  };

  return (
    <>
      <div className="card-footer">
        <div className="card-footer-btn">
          {!formIsEdiited && (
            <button type="submit" onClick={Submitdata} className="btn btn-info mr-2">
              Submit
            </button>
          )}
          {formIsEdiited && (
            <button type="reset" onClick={Submitdata} className="btn btn-info mr-2">
              Update
            </button>
          )}
          <button type="reset" className="btn btn-cancel">
            Cancel
          </button>
        </div>
        <hr></hr>
        <TableForm data={TblArray} EditData={EditData} FormIsEditted={setFormIsEditted} SetTIndex={setTIndex} />
      </div>
    </>
  );
};

export default FooterForm;

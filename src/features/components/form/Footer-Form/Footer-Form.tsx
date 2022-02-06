
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { ReactElement, useState } from "react";
import DKSVGIcon from "src/core/components/svg-icon/svg-icon";
import FormItem from "../form-item";
import "./Footer-Form.css";

interface Props {
  data: FormItem;
  resetData: () => void;
 
}

const FooterForm = ({ data,resetData }: Props): ReactElement => {
 
 const [TblArray, setTblArray] = useState<FormItem[]>([]);
 const Submitdata = () => { 
  setTblArray(TblArray => [...TblArray,data]);
  console.log(TblArray);

  resetData();
  
};
const RenderMyTable = (): React.ReactNode => {
return TblArray.map((item: FormItem,i) => {
  return (
    
    <TableRow key={i}>
      <TableCell >
        <div className="symbol">
          <span className="symbol-label">
            <span><DKSVGIcon iconName="Edit"/></span>
          </span>
        </div>
      </TableCell>
      <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">{item.CardholderName}</TableCell>
      <TableCell className="text-muted font-weight-bold">{item.CardholderNumber}</TableCell>
      <TableCell className="text-muted font-weight-bold">{item.Address1}</TableCell>
      <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">{item.Address2}</TableCell>
      <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">{item.City}</TableCell>
      <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">{item.State}</TableCell>
      <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">{item.ZIP}</TableCell>
    </TableRow>
      

  );
});
}

const RenderHeaderTable = (): React.ReactNode => {
const HeaderTbl=[
  'Action',
  'CardholderName',
  'CardholderNumber',
  'Address1',
  'Address2',
  'City',
  'State',
  'ZIP'
]

return <TableHead>
<TableRow>
  {HeaderTbl.map((column,id) => (
    <TableCell key={id} >
      {column}
    </TableCell>
  ))}
</TableRow>
</TableHead>
}

 return (
   <>
       <div className="card-footer">
         <div className="card-footer-btn">
            <button type="submit" onClick={Submitdata} className="btn btn-info mr-2">Submit</button>
            <button type="reset" className="btn btn-cancel">Cancel</button>
         </div>
         <hr></hr>
         <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className="ltr mt-5">
          {RenderHeaderTable()}
          <TableBody>
          {RenderMyTable()}
          </TableBody>
        </Table>
       </div>
    
    
   </>
 );
};

export default FooterForm;
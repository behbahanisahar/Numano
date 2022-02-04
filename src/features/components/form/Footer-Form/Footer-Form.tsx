
// import TableCell from "@material-ui/core/TableCell";
// import TableRow from "@material-ui/core/TableRow";
import * as React from "react";
import { ReactElement } from "react";

import FormItem from "../form-item";
import "./Footer-Form.css";

interface Props {
  data: FormItem[];
}

const FooterForm = ({ data }: Props): ReactElement => {
  // console.log(data);
 const savedata = () => {

for (const [key, value] of Object.entries(data)) {
  console.log(`${key}: ${value}`);
 // return (
        
    // <TableRow key={key} className={item.iconName}>
    //   <TableCell >
    //     <div className="symbol">
    //       <span className="symbol-label">
    //       </span>
    //     </div>
    //   </TableCell>
    //   <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">{item.name}</TableCell>
    //   <TableCell className="text-muted font-weight-bold">{item.Course}</TableCell>
    //   <TableCell className="text-muted font-weight-bold">{item.Member}</TableCell>
    //   <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">{item.size}</TableCell>
    // </TableRow>
      

  //);
}
 
};
 
 return (
   <>
       <div className="card-footer">
         <button type="submit" onClick={savedata} className="btn btn-info mr-2">Submit</button>
         <button type="reset" className="btn btn-cancel">Cancel</button>
       </div>
    
   </>
 );
};

export default FooterForm;
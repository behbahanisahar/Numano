import TableCell from "@material-ui/core/TableCell";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { ReactElement, useState ,useEffect } from "react";
import DKSVGIcon from "src/core/components/svg-icon/svg-icon";
import "./table.css";
import TblMehdiModel from "src/entities/Tbl-Mehdi";
import SPRestService from "src/services/sp-service/sp-services";

// const data =[
//   { svg:<DKSVGIcon iconName='Cart3'color='green' />, name: "Top Authors", course: "ReactJs,HTML", Member: "4600 Users",size:"5.4MB",key:"first" },
//   { svg:<DKSVGIcon iconName='blocks'color='orange' />, name: "Popular Authors", course: "Python, MySQL", Member: "7200 Users",size:"2.8MB",key:"second" },
//   { svg:<DKSVGIcon iconName='Group' color='purple' />, name: "New Users", course: "Laravel, Metronic", Member: "890 Users",size:"1.5MB",key:"third" },
//   { svg:<DKSVGIcon iconName='Library' color='yellow' />, name: "Active Customers", course: "AngularJS, C#", Member: "6370 Users",size:"890KB",key:"fourth" },
//   { svg:<DKSVGIcon iconName='Box2' color='blue' />, name: "Bestseller Theme", course: " ReactJS, Ruby", Member: "354 Users",size:"500KB",key:"fifth" },
 
// ]

const TableSamira = (): ReactElement => {
  const [TblValues, SetTblValues] = useState<TblMehdiModel[]>([]);
  const spRestService = new SPRestService();

  const getTblMehdiValues = async (): Promise<void> => {
    const values = await spRestService.getTblMehdiValues();
   
    SetTblValues(values);
  };
  useEffect(() => {
    getTblMehdiValues();    
  }, []);

  const renderTblMehdi = (): React.ReactNode => {
    return TblValues.map((item: TblMehdiModel) => {
      return (
        
        <TableRow key={item.key} className={item.Icon}>
          <TableCell >
            <div className="symbol">
              <span className="symbol-label">
                <span><DKSVGIcon  iconName={item.Icon}/></span>
              </span>
            </div>
          </TableCell>
          <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">{item.Name}</TableCell>
          <TableCell className="text-muted font-weight-bold">{item.Course}</TableCell>
          <TableCell className="text-muted font-weight-bold">{item.Member}</TableCell>
          <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">{item.Size}</TableCell>
        </TableRow>
          
  
      );
    });
  };


  
  return (
    <>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className="ltr">
        <TableBody>
        {renderTblMehdi()}
        </TableBody>
      </Table>
    </>
  );
};

export default TableSamira;

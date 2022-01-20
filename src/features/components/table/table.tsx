import TableCell from "@material-ui/core/TableCell";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { ReactElement, useEffect, useState } from "react";
// import DKSVGIcon from "src/core/components/svg-icon/svg-icon";
import MyTableModel from "src/entities/MyTables";
import SPRestService from "src/services/sp-service/sp-services";
import "./table.css";

// const data =[
//   { svg:<DKSVGIcon iconName='Cart3' />, name: "Top Authors", course: "ReactJs,HTML", Member: "4600 Users",size:"5.4MB",key:"first" },
//   { svg:<DKSVGIcon iconName='blocks'/>, name: "Popular Authors", course: "Python, MySQL", Member: "7200 Users",size:"2.8MB",key:"second" },
//   { svg:<DKSVGIcon iconName='Group' />, name: "New Users", course: "Laravel, Metronic", Member: "890 Users",size:"1.5MB",key:"third" },
//   { svg:<DKSVGIcon iconName='Library' />, name: "Active Customers", course: "AngularJS, C#", Member: "6370 Users",size:"890KB",key:"fourth" },
//   { svg:<DKSVGIcon iconName='Box2' />, name: "Bestseller Theme", course: " ReactJS, Ruby", Member: "354 Users",size:"500KB",key:"fifth" },
 
// ]

const TableSamira = (): ReactElement => {

  const [MyTableValues, setMyTableValues] = useState<MyTableModel[]>([]);
  const spRestService = new SPRestService();

  const getMyTableValues = async (): Promise<void> => {
    const values = await spRestService.getMyTableValues();
   
    setMyTableValues(values);
  };

  useEffect(() => {
    getMyTableValues();
    
  }, []);
  const renderMyTable = (): React.ReactNode => {
    return MyTableValues.map((item: MyTableModel) => {
      return (
        
        <TableRow key={item.key} className={item.name}>
          <TableCell >
            <div className="symbol">
              <span className="symbol-label">
                <span>{item.key}</span>
              </span>
            </div>
          </TableCell>
          <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">{item.name}</TableCell>
          <TableCell className="text-muted font-weight-bold">{item.course}</TableCell>
          <TableCell className="text-muted font-weight-bold">{item.Member}</TableCell>
          <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">{item.size}</TableCell>
        </TableRow>
          
  
      );
    });
  };
  return (
    <>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className="ltr">
        <TableBody>
        {renderMyTable()}
        </TableBody>
      </Table>
    </>
  );
};

export default TableSamira;

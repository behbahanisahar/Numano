import TableCell from "@material-ui/core/TableCell";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { ReactElement, useEffect, useState } from "react";
import DKSVGIcon from "src/core/components/svg-icon/svg-icon";
import MyTableModel from "src/entities/MyTables";
import SPRestService from "src/services/sp-service/sp-services";
import "./table.css";


const TableSamira = (): ReactElement => {

  const [MyTableValues, setMyTableValues] = useState<MyTableModel[]>([]);
  const spRestService = new SPRestService();

  const getMyTableValues = async (): Promise<void> => {
    const values = await spRestService.GetMyTableValues();
   
    setMyTableValues(values);
  };

  useEffect(() => {
    getMyTableValues();
    
  }, []);
  const renderMyTable = (): React.ReactNode => {
    return MyTableValues.map((item: MyTableModel) => {
      return (
        
        <TableRow key={item.key} className={item.iconName}>
          <TableCell >
            <div className="symbol">
              <span className="symbol-label">
                <span><DKSVGIcon  iconName={item.iconName}/></span>
              </span>
            </div>
          </TableCell>
          <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">{item.name}</TableCell>
          <TableCell className="text-muted font-weight-bold">{item.Course}</TableCell>
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

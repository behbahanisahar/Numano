import TableCell from "@material-ui/core/TableCell";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { ReactElement } from "react";
import DKSVGIcon from "src/core/components/svg-icon/svg-icon";
import "./table.css";

const data =[
  { svg:<DKSVGIcon iconName='Cart3'color='green' />, name: "Top Authors", course: "ReactJs,HTML", Member: "4600 Users",size:"5.4MB",key:"first" },
  { svg:<DKSVGIcon iconName='blocks'color='orange' />, name: "Popular Authors", course: "Python, MySQL", Member: "7200 Users",size:"2.8MB",key:"second" },
  { svg:<DKSVGIcon iconName='Group' color='purple' />, name: "New Users", course: "Laravel, Metronic", Member: "890 Users",size:"1.5MB",key:"third" },
  { svg:<DKSVGIcon iconName='Library' color='yellow' />, name: "Active Customers", course: "AngularJS, C#", Member: "6370 Users",size:"890KB",key:"fourth" },
  { svg:<DKSVGIcon iconName='Box2' color='blue' />, name: "Bestseller Theme", course: " ReactJS, Ruby", Member: "354 Users",size:"500KB",key:"fifth" },
 
]

const TableSamira = (): ReactElement => {
  return (
    <>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className="ltr">
        <TableBody>
        {data.map((val, key) => {
                return (
                  <TableRow key={key} className={val.key}>
                    <TableCell ><div className="symbol"> <span className="symbol-label"><span>{val.svg}</span></span></div></TableCell>
                    <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">{val.name}</TableCell>
                    <TableCell className="text-muted font-weight-bold">{val.course}</TableCell>
                    <TableCell className="text-muted font-weight-bold">{val.Member}</TableCell>
                    <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">{val.size}</TableCell>
                  </TableRow>
                )
        })}
        </TableBody>
      </Table>
    </>
  );
};

export default TableSamira;

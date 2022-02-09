import * as React from "react";
import { ReactElement} from "react";
import Table from "@mui/material/Table";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import MyFormItem from "../myform-item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


interface Props {
  data: MyFormItem[];
  EditRow:(i:number,data:MyFormItem[])=> void;
}

const MyFormTable = ({ data ,EditRow}: Props): ReactElement => {
 
  const RenderHeaderTable = (): React.ReactNode => {
      const HeaderTbl=[
        'Edit',
        'Cardholder Name',
        'Cardholder Number',
        'Cvv',
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
  const RenderMyTable = (): React.ReactNode => {
      return data.map((item,i) => {
        return (
          
          <TableRow key={i}>
            <TableCell >
              <div className="symbol">
                <span className="symbol-label">
                  <span><FontAwesomeIcon icon={faCoffee} onClick={()=>EditRow(i,data)}/></span>
                </span>
              </div>
          </TableCell>
              <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">{item.CardholderName}</TableCell>
              <TableCell className="text-muted font-weight-bold">{item.CardholderNumber}</TableCell>
              <TableCell className="text-muted font-weight-bold">{item.Cvv}</TableCell>
              <TableCell className="text-muted font-weight-bold">{item.Address1}</TableCell>
              <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">{item.Address2}</TableCell>
              <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">{item.City}</TableCell>
              <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">{item.State}</TableCell>
              <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">{item.ZIP}</TableCell>
          </TableRow>
            
      
        );
      });
  } 

return (
    <>
           <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className="ltr mt-5">
                <TableHead>
                    <TableRow>
                        {RenderHeaderTable()}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {RenderMyTable()}
                    </TableRow>
                </TableBody>
            </Table>
    
    </>
  );
};

export default MyFormTable;

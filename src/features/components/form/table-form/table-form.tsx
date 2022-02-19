import * as React from "react";
import { ReactElement, useState } from "react";
import DKSVGIcon from "src/core/components/svg-icon/svg-icon";
import FormItem from "../form-item";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


interface Props {
  data: FormItem[];
  EditData: (i: number, data: FormItem[]) => void;
  EditFlag: (x: boolean) => void;
  SetTRIndex: (x: number) => void;
  setTblArray: (x: FormItem[]) => void;
  
}

const TableForm = ({ data, EditData,EditFlag,SetTRIndex,setTblArray }: Props): ReactElement => {
  const [NewArray,SetNewArray]=useState<FormItem[]>([]);
  const [searchInput, setsearchInput] = useState([]);

  const RenderMyTable = (): React.ReactNode => {
    
    return data.map((item: FormItem, i) => {
      return (
 
    <TableRow key={i}>
      <TableCell >
        <div className="symbol" onClick={() =>{
        EditData(i,data);
        EditFlag(true);
        SetTRIndex(i) 
      } 
        }>
          <span className="symbol-label">
            <span><DKSVGIcon iconName="Edit"/></span>
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

  const RenderHeaderTable = () => {
    const HeaderTbl = [
      'Action',
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
        {HeaderTbl.map((column, id) => (
          <TableCell key={id} >
            {column}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>


  }

  const ChangeInput = (value: any, data: FormItem[]): void => {
   
    const keyword = value;
    const filteredData = data.filter((val) => {
      return (val.CardholderName.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
    })

    if ((keyword === "") ) {
      setsearchInput([]);
      setTblArray(NewArray);
  
    }
    else {
      if(filteredData.length!=0){
        SetNewArray(data);
      }
      setTblArray(filteredData);
      setsearchInput(keyword);
    }
  }

  return (
    <>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Table"
          onChange={(e)=>ChangeInput(e.target.value,data)}
          value={searchInput}
        />
        <IconButton  aria-label="search">
          <SearchIcon />
        </IconButton>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className="ltr mt-5">
        {RenderHeaderTable()}
        <TableBody>
          {RenderMyTable()}
        </TableBody>
      </Table>
    </>
  );
};

export default TableForm;
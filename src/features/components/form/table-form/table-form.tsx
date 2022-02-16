import * as React from "react";
import { ReactElement } from "react";
import DKSVGIcon from "src/core/components/svg-icon/svg-icon";
import FormItem from "../form-item";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface Props {
  data: FormItem[];
  EditData: (i: number, data: FormItem[]) => void;
  FormIsEditted: (x: boolean) => void;
  SetTIndex: (x: number) => void;
}

const TableForm = ({ data, EditData, FormIsEditted, SetTIndex }: Props): ReactElement => {
  const RenderMyTable = (): React.ReactNode => {
    return data.map((item: FormItem, i) => {
      return (
        <TableRow key={i}>
          <TableCell>
            <div className="symbol">
              <span
                onClick={() => {
                  EditData(i, data);
                  FormIsEditted(true);
                  SetTIndex(i);
                }}
                className="symbol-label"
              >
                <span>
                  <DKSVGIcon iconName="Edit" />
                </span>
              </span>
            </div>
          </TableCell>
          <TableCell className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">
            {item.CardholderName}
          </TableCell>
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
  };

  const RenderHeaderTable = () => {
    const HeaderTbl = [
      "Action",
      "CardholderName",
      "CardholderNumber",
      "Cvv",
      "Address1",
      "Address2",
      "City",
      "State",
      "ZIP",
    ];

    return (
      <TableHead>
        <TableRow>
          {HeaderTbl.map((column, id) => (
            <TableCell key={id}>{column}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  return (
    <>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className="ltr mt-5">
        {RenderHeaderTable()}
        <TableBody>{RenderMyTable()}</TableBody>
      </Table>
    </>
  );
};

export default TableForm;

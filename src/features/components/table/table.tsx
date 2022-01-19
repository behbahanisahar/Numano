import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import * as React from "react";
import { ReactElement } from "react";
import TableRowsGet from "./GetData";

const TableSamira = (): ReactElement => {
  return (
    <>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className="ltr">
        <TableBody>
      <TableRowsGet></TableRowsGet>
        </TableBody>
      </Table>
    </>
  );
};

export default TableSamira;

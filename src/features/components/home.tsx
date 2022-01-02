import TableCell from "@material-ui/core/TableCell";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { ReactElement } from "react";
import { DKCardBody } from "src/core/components/card";
import { DKCard } from "src/core/components/card/card";
import { DKCardHeader } from "src/core/components/card/card-header";
import CustomizedMenus from "./dropDown/dropdown";
import "./Home.css";



const Home = (): ReactElement => {
  return <>
          <DKCard>
            <DKCardHeader 
              hasComplexHeader={true} 
              noBorder={true} className={'p-5 ltr'} 
            >
            <h3 className={"card-title"} style={{display: "grid"}}>
               Files
            <small>More than 400+ new members </small>
            </h3>
            <div className="card-toolbar">
              <CustomizedMenus></CustomizedMenus>
            </div>
          
            </DKCardHeader>
            <DKCardBody>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className="ltr">
                <TableBody>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">1</TableCell>
                    <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">Top Authors</TableCell>
                    <TableCell align="left" className="text-muted font-weight-bold">ReactJs, HTML</TableCell>
                    <TableCell align="left" className="text-muted font-weight-bold">4600 Users</TableCell>
                    <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">5.4MB</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">2</TableCell>
                    <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">Popular Authors</TableCell>
                    <TableCell align="left" className="text-muted font-weight-bold">Python, MySQL</TableCell>
                    <TableCell align="left" className="text-muted font-weight-bold">7200 Users</TableCell>
                    <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">2.8MB</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">3</TableCell>
                    <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">New Users</TableCell>
                    <TableCell align="left" className="text-muted font-weight-bold">Laravel, Metronic</TableCell>
                    <TableCell align="left" className="text-muted font-weight-bold">890 Users</TableCell>
                    <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">1.5MB</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">4</TableCell>
                    <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">Active Customers</TableCell>
                    <TableCell align="left" className="text-muted font-weight-bold">AngularJS, C#</TableCell>
                    <TableCell align="left" className="text-muted font-weight-bold">6370 Users</TableCell>
                    <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">890KB</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">5</TableCell>
                    <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">Bestseller Theme</TableCell>
                    <TableCell align="left" className="text-muted font-weight-bold">ReactJS, Ruby</TableCell>
                    <TableCell align="left" className="text-muted font-weight-bold">354 Users</TableCell>
                    <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">500KB</TableCell>
                  </TableRow>
              </TableBody>
              </Table>
            </DKCardBody>
            
          </DKCard>

          
        </>
        ;
};
export default Home;

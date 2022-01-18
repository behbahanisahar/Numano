import TableCell from "@material-ui/core/TableCell";
import SvgIcon from "@mui/material/SvgIcon";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { ReactElement } from "react";

const TableSamira = (): ReactElement => {
  return (
    <>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className="ltr">
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell align="left">
              <span className="symbol-label symbol-label-First">
                <SvgIcon>
                  <path
                    d="M12,4.56204994 L7.76822128,9.6401844 C7.4146572,10.0644613 6.7840925,10.1217854 6.3598156,9.76822128 C5.9355387,9.4146572 5.87821464,8.7840925 6.23177872,8.3598156 L11.2317787,2.3598156 C11.6315738,1.88006147 12.3684262,1.88006147 12.7682213,2.3598156 L17.7682213,8.3598156 C18.1217854,8.7840925 18.0644613,9.4146572 17.6401844,9.76822128 C17.2159075,10.1217854 16.5853428,10.0644613 16.2317787,9.6401844 L12,4.56204994 Z"
                    fill="#1BC5BD "
                    fill-rule="nonzero"
                    opacity="0.3"
                  />
                  <path
                    d="M3.28077641,9 L20.7192236,9 C21.2715083,9 21.7192236,9.44771525 21.7192236,10 C21.7192236,10.0817618 21.7091962,10.163215 21.6893661,10.2425356 L19.5680983,18.7276069 C19.234223,20.0631079 18.0342737,21 16.6576708,21 L7.34232922,21 C5.96572629,21 4.76577697,20.0631079 4.43190172,18.7276069 L2.31063391,10.2425356 C2.17668518,9.70674072 2.50244587,9.16380623 3.03824078,9.0298575 C3.11756139,9.01002735 3.1990146,9 3.28077641,9 Z M12,12 C11.4477153,12 11,12.4477153 11,13 L11,17 C11,17.5522847 11.4477153,18 12,18 C12.5522847,18 13,17.5522847 13,17 L13,13 C13,12.4477153 12.5522847,12 12,12 Z M6.96472382,12.1362967 C6.43125772,12.2792385 6.11467523,12.8275755 6.25761704,13.3610416 L7.29289322,17.2247449 C7.43583503,17.758211 7.98417199,18.0747935 8.51763809,17.9318517 C9.05110419,17.7889098 9.36768668,17.2405729 9.22474487,16.7071068 L8.18946869,12.8434035 C8.04652688,12.3099374 7.49818992,11.9933549 6.96472382,12.1362967 Z M17.0352762,12.1362967 C16.5018101,11.9933549 15.9534731,12.3099374 15.8105313,12.8434035 L14.7752551,16.7071068 C14.6323133,17.2405729 14.9488958,17.7889098 15.4823619,17.9318517 C16.015828,18.0747935 16.564165,17.758211 16.7071068,17.2247449 L17.742383,13.3610416 C17.8853248,12.8275755 17.5687423,12.2792385 17.0352762,12.1362967 Z"
                    fill="#1BC5BD"
                  />
                </SvgIcon>
              </span>
            </TableCell>
            <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">
              Top Authors
            </TableCell>
            <TableCell align="left" className="text-muted font-weight-bold">
              ReactJs, HTML
            </TableCell>
            <TableCell align="left" className="text-muted font-weight-bold">
              4600 Users
            </TableCell>
            <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">
              5.4MB
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell align="left">
              <span className="symbol-label symbol-label-second">
                <SvgIcon>
                  <rect fill="#F64E60" x="4" y="4" width="7" height="7" rx="1.5" />
                  <path
                    d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                    fill="#F64E60"
                    opacity="0.3"
                  />
                </SvgIcon>
              </span>
            </TableCell>
            <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">
              Popular Authors
            </TableCell>
            <TableCell align="left" className="text-muted font-weight-bold">
              Python, MySQL
            </TableCell>
            <TableCell align="left" className="text-muted font-weight-bold">
              7200 Users
            </TableCell>
            <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">
              2.8MB
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell align="left">
              <span className="symbol-label symbol-label-third">
                <SvgIcon>
                  <path
                    d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                    fill="#B5B5C3"
                    fill-rule="nonzero"
                    opacity="0.3"
                  />
                  <path
                    d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                    fill="#8950FC"
                    fill-rule="nonzero"
                  />
                </SvgIcon>
              </span>
            </TableCell>
            <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">
              New Users
            </TableCell>
            <TableCell align="left" className="text-muted font-weight-bold">
              Laravel, Metronic
            </TableCell>
            <TableCell align="left" className="text-muted font-weight-bold">
              890 Users
            </TableCell>
            <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">
              1.5MB
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell align="left">
              <span className="symbol-label symbol-label-Forth">
                <SvgIcon>
                  <path
                    d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                    fill="#FFA800"
                  />
                  <rect
                    fill="#FFA800"
                    opacity="0.3"
                    transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) "
                    x="16.3255682"
                    y="2.94551858"
                    width="3"
                    height="18"
                    rx="1"
                  />
                </SvgIcon>
              </span>
            </TableCell>
            <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">
              Active Customers
            </TableCell>
            <TableCell align="left" className="text-muted font-weight-bold">
              AngularJS, C#
            </TableCell>
            <TableCell align="left" className="text-muted font-weight-bold">
              6370 Users
            </TableCell>
            <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">
              890KB
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell align="left">
              <span className="symbol-label symbol-label-fifth">
                <SvgIcon>
                  <path
                    d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z"
                    fill="#3699FF"
                  />
                  <path
                    d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z"
                    fill="#3699FF"
                    opacity="0.3"
                  />
                </SvgIcon>
              </span>
            </TableCell>
            <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">
              Bestseller Theme
            </TableCell>
            <TableCell align="left" className="text-muted font-weight-bold">
              ReactJS, Ruby
            </TableCell>
            <TableCell align="left" className="text-muted font-weight-bold">
              354 Users
            </TableCell>
            <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">
              500KB
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default TableSamira;

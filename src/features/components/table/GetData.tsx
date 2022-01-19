import TableCell from "@material-ui/core/TableCell";
import SvgIcon from "@mui/material/SvgIcon";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import axios from 'axios';


export default class PersonList extends React.Component {
  state = {
    persons: []
  }
  
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
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
                {person.name}
                </TableCell>
                <TableCell align="left" className="text-muted font-weight-bold">
                {person.id}
                </TableCell>
                <TableCell align="left" className="text-muted font-weight-bold">
                {person.email}
                </TableCell>
                <TableCell align="left" className="text-hover text-dark font-weight-bolder mb-1 font-size-lg">
               {person.body}
                </TableCell>
              </TableRow>
    
            )
        }
      </ul>
    )
  }
}
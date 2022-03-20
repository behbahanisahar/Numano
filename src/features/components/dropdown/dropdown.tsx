import React, { ReactElement, useEffect, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import DropDownModel from 'src/entities/drop-down';
import SPRestService from 'src/services/sp-service/sp-services';


import "./dropdown.css";

interface Props {
    label: string;
    onChange: (fieldname: string, value: string) => void;
  }

const DropdownForm= ({ label,onChange }: Props):ReactElement => {
    const [dropdownValues, setDropdownValues] = useState<DropDownModel[]>([]);
    const spRestService = new SPRestService();
    const getDropDownValues = async (): Promise<void> => {
        const values = await spRestService.getDropDownValues();
       
        setDropdownValues(values);
      };
      useEffect(() => {
        getDropDownValues();
        
      }, []);

    const renderDropDown = (): React.ReactNode => {
        return dropdownValues.map((item: DropDownModel) => {
          return (
            item.Parent === `${label}`?
            <MenuItem value={item.key}>{item.text}</MenuItem>:
            <option aria-label="None" value="" />

          );
        });
      };

    return (
        <div >
        <FormControl variant="outlined" className='dropdownDiv'>
          <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
          <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Age"
              onChange={(e: any) => onChange(label, e.target.value)}
            >
              {renderDropDown()}
            </Select>
          
        </FormControl>

        </div>
    );
};



export default DropdownForm;
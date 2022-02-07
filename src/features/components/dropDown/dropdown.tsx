import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@mui/material/MenuItem";
import React, { ReactElement, useEffect, useState } from "react";
import DropDownModel from "src/entities/drop-down";
import SPRestService from "src/services/sp-service/sp-services";
import "./dropdown.css";

const CustomizedMenus = (): ReactElement => {
  const [create, setcreate] = React.useState("");
  const [dropdownValues, setDropdownValues] = useState<DropDownModel[]>([]);
  const spRestService = new SPRestService();
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>): any => {
    setcreate(event.target.value as string);
  };
  const getDropDownValues = async (): Promise<void> => {
    const values = await spRestService.getDropDownValues();
    console.log(values);
    setDropdownValues(values);
  };

  useEffect(() => {
    getDropDownValues();
    console.log(dropdownValues);
  }, []);
  const renderDropDown = (): React.ReactNode => {
    return dropdownValues.map((item: DropDownModel) => {
      return (
        <MenuItem value={item.text} key={item.key}>
          {item.text === "test" ? <span className="text-primary">{item.text}</span> : item.text}
        </MenuItem>
      );
    });
  };
  return (
    <div>
      <FormControl>
        <InputLabel id="demo-customized-select-label">create</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          onChange={handleChange}
          value={create}
        >
          {renderDropDown()}
        </Select>
      </FormControl>
    </div>
  );
};
export default CustomizedMenus;
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import SeventeenMpOutlinedIcon from '@mui/icons-material/SeventeenMpOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';
import "./dropdown.css";


function CustomizedMenus() {
  const [create, setcreate] = React.useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setcreate(event.target.value as string);
  };
  return (
    <div>
      <FormControl >
        <InputLabel id="demo-customized-select-label">create</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          onChange={handleChange}
          value={create}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={10}> Add New:</MenuItem>
          <MenuItem value={20}><ShoppingCartOutlinedIcon />order</MenuItem>
          <MenuItem value={40}><SeventeenMpOutlinedIcon />Event</MenuItem>
          <MenuItem value={50}><AssessmentOutlinedIcon />Report</MenuItem>
          <MenuItem value={50}><MailOutlineOutlinedIcon />post</MenuItem>
          <MenuItem value={50}>< ArticleOutlinedIcon />File</MenuItem>
        </Select>
      </FormControl>
    
    </div>
  );
}
export default CustomizedMenus;
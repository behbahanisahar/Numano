import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicTable from './Table';
import SwitchListSecondary from './switch';
import CustomizedList from './FireBash';
import CardRam from './Card';
import CustomizedAccordions from './accordian';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <><Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2.75}>
          <Item><CustomizedList></CustomizedList></Item>
        </Grid>
        <Grid item xs={2.75}>
          <Item><SwitchListSecondary></SwitchListSecondary></Item>
        </Grid>
        <Grid item xs={6.5}>
          <Item><BasicTable></BasicTable></Item>
        </Grid>
        <Grid item xs={8}>
          <Item><CardRam></CardRam></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><CustomizedAccordions></CustomizedAccordions></Item>
        </Grid>
      
      </Grid>
    </Box></>
  );
}

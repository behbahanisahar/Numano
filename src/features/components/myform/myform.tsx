import * as React from "react";
import { ReactElement } from "react";
import MyFormFooter from "./myform-footer/footer";
import MyFormContent from "./myform-content/myform-content";
import {Grid} from "@material-ui/core";
import MyFormContentCenter from "./myform-contentCenter/myform-contentCenter";
import MyFormCard from "./myform-card/myform-card";
import './myform.css'


const MyForm = (): ReactElement => {
  return (
    <>
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <MyFormContent></MyFormContent>
            <MyFormContentCenter></MyFormContentCenter>
            <MyFormCard></MyFormCard>
            <MyFormFooter></MyFormFooter>
        </Grid>
    </Grid>
    </>
  );
};

export default MyForm;

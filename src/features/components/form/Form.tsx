import { Grid } from "@material-ui/core";
import * as React from "react";
import { ReactElement } from "react";


import DeliveryForm from "./delivery-form/delivery-form";
import ContentForm from "./content-form/content-form";
import FooterForm from "./footer-form/footer-form";
import HeaderForm from "./header-form/header-form";
import "./form.css";


const Form = (): ReactElement => {
 return (
   <>
     <Grid container spacing={3}>
        <Grid item xs={12}>
            <HeaderForm />
            <ContentForm/>
            <DeliveryForm />
            <FooterForm />
        </Grid>
      </Grid>
    
   </>
 );
};

export default Form;
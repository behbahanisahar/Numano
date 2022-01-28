import { Grid } from "@material-ui/core";
import * as React from "react";
import { ReactElement } from "react";
import FooterForm from "./Footer-Form/Footer-Form";
import HeaderForm from "./Header-Form/Header-Form";
import ContentForm from "./Content-Form/Content-Form";
import DeliveryForm from "./Delivery-Form/Delivery-Form";
import "./Form.css";

const Form = (): ReactElement => {
 return (
   <>
     <Grid container spacing={3}>
        <Grid item xs={12}>
            <HeaderForm />
            <ContentForm />
            <DeliveryForm />
           <FooterForm />
        </Grid>
      </Grid>
    
   </>
 );
};

export default Form;
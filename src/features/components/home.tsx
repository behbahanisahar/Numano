import * as React from "react";
import { ReactElement } from "react";
import Form from "./form/form";
import { Grid } from "@material-ui/core";

//components
import Footer from "./footer/footer";

const Home = (): ReactElement => {
  return <>
     <Grid container spacing={3}>
        <Grid item xs={12}>
            <Form/>
            <Footer/>
        </Grid>
      </Grid>
  </>;
};
export default Home;

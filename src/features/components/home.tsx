import { Button } from "@material-ui/core";
import * as React from "react";
import { ReactElement } from "react";
import { DKButton } from "src/core/components/button/button";

const Home = (): ReactElement => {
  return (
    <>
      <Button variant="contained">Contained</Button>
      <DKButton type="cancel">submit</DKButton>
    </>
  );
};
export default Home;

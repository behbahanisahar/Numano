import { Button } from "@material-ui/core";
import * as React from "react";
import { ReactElement } from "react";
import { DKButton } from "src/core/components/button/button";
import { DKCard, DKCardBody, DKCardFooter, DKCardHeader } from "src/core/components/card";

const Home = (): ReactElement => {
  return (
    <>
      <Button variant="contained">Contained</Button>
      <DKButton type="cancel">submit</DKButton>
      <DKCard>
        <DKCardHeader hasComplexHeader={true} title="mycard"></DKCardHeader>
        <DKCardBody>
          <span>sahar</span>
        </DKCardBody>
        <DKCardFooter>
          <span>footer</span>
        </DKCardFooter>
      </DKCard>
    </>
  );
};
export default Home;

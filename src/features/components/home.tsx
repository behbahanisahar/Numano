
import * as React from "react";
import { ReactElement } from "react";
import Form from "./form/Form";


import "./Home.css";
// import { DKCardBody } from "src/core/components/card";
// import { DKCard } from "src/core/components/card/card";
// import { DKCardHeader } from "src/core/components/card/card-header";
// import HeaderContent from "./header-content/header-content";
// import TableSamira from "./table/table";

const Home = (): ReactElement => {
  return (
    <>
      {/* <DKCard>
        <DKCardHeader hasComplexHeader={true} noBorder={true} className={"p-5 ltr"}>
          <HeaderContent title="Files" subTitle="More than 400+ new members" />
        </DKCardHeader>
        <DKCardBody>
          <TableSamira />
        </DKCardBody>
      </DKCard> */}
      <Form />
    </>
  );
};

export default Home;

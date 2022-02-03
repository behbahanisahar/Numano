import * as React from "react";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { DKCardBody } from "src/core/components/card";
import { DKCard } from "src/core/components/card/card";
import { DKCardHeader } from "src/core/components/card/card-header";
// import DKSVGIcon from "src/core/components/svg-icon/svg-icon";
import HeaderContent from "./header-content/header-content";
import "./Home.css";
import TableSamira from "./table/table";

const Home = (): ReactElement => {
  return (
    <>
      <DKCard>
        <DKCardHeader hasComplexHeader={true} noBorder={true} className={"p-5 ltr"}>
          <HeaderContent title="Files" subTitle="More than 400+ new members" />
        </DKCardHeader>
        <DKCardBody>
          <TableSamira />
          <Link className="btn btn-primary cursor-pointer" to={"/form"}>
            See more...
          </Link>
          {/* <DKSVGIcon color="success" size="md" iconName="Clipboard"/> */}
        </DKCardBody>
      </DKCard>
    </>
  );
};

export default Home;

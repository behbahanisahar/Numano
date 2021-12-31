

import * as React from "react";
import { ReactElement } from "react";
import { DKCardBody, DKCardFooter } from "src/core/components/card";
import { DKCard } from "src/core/components/card/card";
import { DKCardHeader } from "src/core/components/card/card-header";
import CustomizedMenus from "./dropDown/dropdown";



const Home = (): ReactElement => {
  return <>
          <DKCard>
            <DKCardHeader 
              hasComplexHeader={true} 
              noBorder={true} className={'p-5 ltr'} 
            >
            <h3 className={"card-title"} style={{display: "grid"}}>
               Files
            <small>More than 400+ new members </small>
            </h3>
            <div className="card-toolbar">
              <CustomizedMenus></CustomizedMenus>
            </div>
          
            </DKCardHeader>
            <DKCardBody></DKCardBody>
            <DKCardFooter></DKCardFooter>
          </DKCard>

          
        </>
        ;
};
export default Home;

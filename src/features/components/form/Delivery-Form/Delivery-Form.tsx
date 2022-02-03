import * as React from "react";
import { ReactElement } from "react";
import MyCard from "../mycard-form/mycard";
import './delivery-form.css';


const DeliveryForm = (): ReactElement => {
 const txtBody='Estimated 14-20 days shipping (Duties and taxes my be due upon delivery'
 
 return (
   <>
     <div className="card card-custom ">
        <div className="cardheader">
          <h3 className="card-title">
           Delivery Type:
          </h3>
        </div>
        <div className="CartContainer">
          <MyCard label={'Standard Delivery'} Cost={'Free'} txtBody={txtBody} />
          <MyCard label={'Fast Delivery'} Cost={'$8.00'} txtBody={txtBody} />
        </div>
     </div>
     <div className="card card-custom ">
        <div className="cardheader">
          <h3 className="card-title">
           Select Package:
          </h3>
        </div>
        <div className="CartContainer card-delivery">
          <MyCard label={'Standard Package'} Cost={'Free'} txtBody={txtBody} />
          <MyCard label={'Premium Package'} Cost={'$8.00'} txtBody={txtBody} />
        </div>
     </div>
   </>
 );
};

export default DeliveryForm;


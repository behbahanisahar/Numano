import * as React from "react";
import { ReactElement, useState } from "react";
import MyFormFooter from "./myform-footer/footer";
import MyFormContent from "./myform-content/myform-content";
import {Grid} from "@material-ui/core";
import MyFormContentCenter from "./myform-contentCenter/myform-contentCenter";
import MyFormCard from "./myform-card/myform-card";
import './myform.css'
import MyFormItem from "./myform-item";


const MyForm = (): ReactElement => {
  const [data, setdata] = useState<MyFormItem>({ CardholderName: "", CardholderNumber: "",Address1:"",Address2:"",City:"",State:"",ZIP:"",Cvv:""});
  const onChangeField = (fieldname: string, value: string): void => {
    setdata({ ...data, [fieldname]: value });
  
  };
  const ClearForm = (): void => {
    setdata({ CardholderName: "", CardholderNumber: "",Address1:"" ,Address2:"" ,City:"" ,State:"" ,ZIP:"" ,Cvv:""});
  
  };
  const EditRow =(i:number,data:MyFormItem[])=>{
  
   [data[i]].map((item,key)=>{
      setdata({ CardholderName: item.CardholderName,
                    CardholderNumber:item.CardholderNumber,
                    Address1:item.Address1,
                    Address2:item.Address2,
                    City:item.City,
                    State:item.State,
                    ZIP:item.ZIP,
                    Cvv:item.Cvv});
    })
  }
  return (
    <>
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <MyFormContent onChange={onChangeField} data={data}></MyFormContent>
            <MyFormContentCenter onChange={onChangeField} data={data}></MyFormContentCenter>
            <MyFormCard></MyFormCard>
            <MyFormFooter EditRow={EditRow} ClearForm={ClearForm} data={data}></MyFormFooter>
        </Grid>
    </Grid>
    </>
  );
};

export default MyForm;

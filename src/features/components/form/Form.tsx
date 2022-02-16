import { Grid } from "@material-ui/core";
import * as React from "react";
import { ReactElement, useState } from "react";
import DeliveryForm from "./Delivery-Form/Delivery-Form";
import ContentForm from "./Content-Form/Content-Form";
import HeaderForm from "./Header-Form/Header-Form";
import "./Form.css";
import FooterForm from "./Footer-Form/Footer-Form";
import FormItem from "./form-item";



 const Form = (): ReactElement => {
  const [formdata, setFormData] = useState<FormItem>({ CardholderName: "", CardholderNumber: "",Address1:"",Address2:"",City:"",State:"",ZIP:"",Cvv:""});
  const onChangeFields = (fieldname: string, value: string): void => {
    setFormData({ ...formdata, [fieldname]: value });
 
  };
  const resetData = (): void => {
    setFormData({ CardholderName: "", CardholderNumber: "",Address1:"" ,Address2:"" ,City:"" ,State:"" ,ZIP:"" ,Cvv:""});
  
  };
  const EditData =(i:number,TblArray:FormItem[])=>{
    let NewArray;
    NewArray=[TblArray[i]];
    NewArray.map((item,key)=>{
      setFormData({ CardholderName: item.CardholderName,
                    CardholderNumber:item.CardholderNumber,
                    Address1:item.Address1,
                    Address2:item.Address2,
                    City:item.City,
                    State:item.State,
                    ZIP:item.ZIP,
                    Cvv:item.Cvv});
    })

    // for (const [key, value] of Object.entries(NewArray)) {
  
    //   console.log(`${key}: ${value}`);
    //   setFormData({[key]:value})
    // }
    
  }
  

 
 return (
   <>
     <Grid container spacing={3}>
        <Grid item xs={12}>
            <HeaderForm  SendFilds={onChangeFields} formData={formdata} />
            <ContentForm SendFilds={onChangeFields} formData={formdata} />
            <DeliveryForm />
            <FooterForm EditData={EditData} resetData={resetData} data={formdata}/>
        </Grid>
      </Grid>
    
   </>
 );
};

export default Form;
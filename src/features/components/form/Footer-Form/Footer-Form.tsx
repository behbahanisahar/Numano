import * as React from "react";
import { ReactElement } from "react";
import FormItem from "../form-item";
import "./Footer-Form.css";

interface Props {
  data: FormItem;
}

const FooterForm = ({ data }: Props): ReactElement => {
 console.log(data);
 
 return (
   <>
       <div className="card-footer">
         <button type="submit" className="btn btn-info mr-2">Submit</button>
         <button type="reset" className="btn btn-cancel">Cancel</button>
       </div>
    
   </>
 );
};

export default FooterForm;
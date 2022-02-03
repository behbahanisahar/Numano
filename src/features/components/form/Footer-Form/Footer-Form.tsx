import * as React from "react";
import { ReactElement } from "react";
import "./footer-form.css";

const FooterForm = (): ReactElement => {
 return (
   <>
       <div className="card-footer">
         <button type="reset" className="btn btn-info mr-2">Validate</button>
         <button type="reset" className="btn btn-cancel">Cancel</button>
       </div>
    
   </>
 );
};

export default FooterForm;
import * as React from "react";
import { ReactElement } from "react";
import './footer.css'



const MyFormFooter = (): ReactElement => {
  return (
    <>
        <div className="card-footer">
          <div className="card-footer-btn">
           <button type="submit" className="btn btn-info mr-2" >Submit</button>
           <button type="reset" className="btn btn-cancel">cancel</button>
          </div>
        </div>
    
    </>
  );
};

export default MyFormFooter;

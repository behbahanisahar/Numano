import React, { ReactElement } from 'react';
import "./footer.css";


const Footer = (): ReactElement => {
    return (
        
            <>
                <div className="card-footer">
                    <div className="card-footer-btn">
                    <button type="reset" className="btn btn-cancel">Cancel</button>
                    <button type="submit" className="btn btn-info mr-2">Submit Data</button>
                    
                    </div>
                   
                </div>
            </>
        
    );
};



export default Footer;
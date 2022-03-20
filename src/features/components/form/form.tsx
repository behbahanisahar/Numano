import React, { ReactElement, useState } from 'react';
import "./form.css";


//components
import DropdownForm from '../dropdown/dropdown';
import FormItem from './form-item';




const Form = (): ReactElement => {
    const [formdata, setFormData] = useState<FormItem>();
    console.log(formdata)
    console.log(setFormData)

    const SendFields = (fieldname: string, value: string): void => {
        console.log(fieldname)
        console.log(value)
     
      };
    return (
        <>         
        <div className="card card-custom card-content">
            <div className="card-header">
                <h3 className="card-title">
                Ticketing
                </h3>
            </div>
            <form>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4 mt-1">
                            <DropdownForm onChange={SendFields} label={'Node Type'}/>
                        </div>
                        <div className="col-md-4 mt-1">
                            <DropdownForm onChange={SendFields} label={'Ticket Type'}/>
                        </div>
                        <div className="col-md-4 mt-1">
                            <DropdownForm  onChange={SendFields} label={'Vendor'}/>
                        </div>
                        <div className="col-md-4 mt-1">
                            <DropdownForm  onChange={SendFields} label={'Technology Type'}/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
};


export default Form;
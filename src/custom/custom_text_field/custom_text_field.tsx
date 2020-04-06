import React from "react";
import './custom_text_field.scss';
import {Field} from "formik";

const CustomTextField = (props: { heading: string, errors: any, touched: any }) => {
    return (<div>
        {props.errors[props.heading]? (
            <div className={"error"}>{props.errors[props.heading]}</div>
        ) : null}
        <Field name={props.heading}
               className={"textField"}
        />
    </div>);
};

export default CustomTextField;
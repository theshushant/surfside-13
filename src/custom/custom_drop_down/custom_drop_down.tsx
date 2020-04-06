import React from "react";
import './custom_drop_down.scss';
import { Field } from "formik";

const CustomDropDown = (props: { label: string, options: Array<string> }) => {
    return (<div>
        <Field  as = {"select"} name = {props.label} className={"dropDown"}>
            <option  value="" disabled selected>Select your option</option>
            {props.options.map((option) => <Option title={option}/>)}
        </Field>
    </div>);
};

const Option = (props: { title: string }) => {
    return <option value={props.title}>{props.title}</option>;
};

export default CustomDropDown;
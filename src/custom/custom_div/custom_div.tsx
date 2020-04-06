import React from "react";
import './custom_div.scss';
import '../custom_text_field/custom_text_field';
import CustomTextField from "../custom_text_field/custom_text_field";
import CustomDropDown from "../custom_drop_down/custom_drop_down";


export enum CustomDivType {
    text, dropDown
}

const CustomDiv = (props: { heading: string, type: CustomDivType,formType:string,errors:any, touched:any }) => {

    return (
        <div className={"customDivLabel"}>
            <label>{props.heading}</label>
            <div className={"customDiv"} key={props.heading}>
                {props.type === CustomDivType.text ? <CustomTextField errors={props.errors} touched={props.touched} heading={props.formType}/> :
                    <CustomDropDown label={props.formType}
                                    options={["hello", "byee", "hello", "byee", "hello", "byee", "hello", "byee"]}/>}
            </div>
        </div>);
};


export default CustomDiv;

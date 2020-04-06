import React from "react";
import CustomDiv, {CustomDivType} from "../custom/custom_div/custom_div";
import './right_form_section.scss';
import CustomButton from "../custom/custom_button/custom_button";
import CustomRowSection from "../custom/custom_row_section/custom_row_section";

const RightFormSection = (props: { isSubmitting: boolean, errors: any, touched: any }) => {

    return (<div className={"rightFormSection"}>
        <CustomRowSection first={
            <CustomDiv heading={"Seal Number"} errors={props.errors} touched={props.touched} type={CustomDivType.text}
                       formType={"10"}/>
        } second={
            <CustomDiv formType={"11"} heading={"Specie"} type={CustomDivType.dropDown} errors={props.errors}
                       touched={props.touched}/>
        }
        />
        <CustomRowSection first={
            <CustomDiv heading={"Refer Number"} formType={"12"} type={CustomDivType.text} errors={props.errors}
                       touched={props.touched}/>
        } second={
            <CustomDiv heading={"Refer Code"} formType={"13"} type={CustomDivType.text} errors={props.errors}
                       touched={props.touched}/>
        }
        />
        <CustomDiv heading={"Trailer Condition"} formType={"14"} type={CustomDivType.dropDown} errors={props.errors}
                   touched={props.touched}/>
        <CustomRowSection first={
            <CustomDiv heading={"Received Date"} formType={"15"} type={CustomDivType.dropDown} errors={props.errors}
                       touched={props.touched}/>
        } second={
            <CustomDiv heading={"Received Time"} formType={"16"} type={CustomDivType.dropDown} errors={props.errors}
                       touched={props.touched}/>
        }
        />

        <CustomDiv heading={"Moved To Cooler"} type={CustomDivType.dropDown} formType={"17"} errors={props.errors}
                   touched={props.touched}/>

        <CustomButton isSubmitting={props.isSubmitting} onPressed={() => {
            console.log("hello")
        }} title={"Add To Shell Stock"}/>
    </div>);
};

export default RightFormSection;
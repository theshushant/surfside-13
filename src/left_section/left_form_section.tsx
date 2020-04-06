import React from "react";
import './left_form_section.scss';
import CustomDiv, {CustomDivType} from "../custom/custom_div/custom_div";
import CustomRowSection from "../custom/custom_row_section/custom_row_section";

const LeftFormSection = (props:{errors:any, touched:any}) => {

    return (<div className={"leftFormSection"}>
        <CustomDiv errors={props.errors} touched={props.touched} heading={"Boat"} type={CustomDivType.dropDown} formType={"1"}/>
        <CustomRowSection first={
            <CustomDiv heading={"Load Number"} type={CustomDivType.text}errors={props.errors} touched={props.touched} formType={"2"}/>
        } second={
            <CustomDiv errors={props.errors} touched={props.touched} heading={"Bill Of Lading"} type={CustomDivType.text} formType={"3"}/>
        }
        />
        <CustomDiv errors={props.errors} touched={props.touched} heading={"Actual Trailer Temperature"} type={CustomDivType.text} formType={"4"}/>
        <CustomRowSection first={
            <CustomDiv heading={"Harvest Location"} errors={props.errors} touched={props.touched}type={CustomDivType.text} formType={"5"}/>
        } second={
            <CustomDiv heading={"Catch/Harvest Date"} type={CustomDivType.dropDown} formType={"6"}errors={props.errors} touched={props.touched}/>
        }
        />

        <CustomDiv heading={"Rec Log"} type={CustomDivType.text} formType={"7"}errors={props.errors} touched={props.touched}/>

        <CustomRowSection first={
            <CustomDiv heading={"Cages Received"} type={CustomDivType.text} formType={"8"}errors={props.errors} touched={props.touched}/>
        } second={
            <CustomDiv heading={"Cages Return"} type={CustomDivType.text} formType={"9"}errors={props.errors} touched={props.touched}/>
        }
        />
    </div>);
};


export default LeftFormSection;
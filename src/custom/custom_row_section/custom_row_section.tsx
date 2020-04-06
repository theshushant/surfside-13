import React from "react";
import './custom_row_section.scss';

const CustomRowSection = (props: { first: any, second: any }) => {
    return (
        <div className={"customRowSection"}>
            {props.first}
            {props.second}
        </div>
    );
};

export default CustomRowSection;